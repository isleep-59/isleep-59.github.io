(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("has-js");
  const themeButton = document.querySelector("[data-theme-toggle]");
  const themeLabel = document.querySelector("[data-theme-label]");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const labels = { system: "自动", light: "浅色", dark: "深色" };

  function storedTheme() {
    try {
      return localStorage.getItem("site-theme") || "system";
    } catch (_) {
      return "system";
    }
  }

  function applyTheme(theme, persist = true) {
    if (theme === "system") delete root.dataset.theme;
    else root.dataset.theme = theme;

    if (persist) {
      try {
        if (theme === "system") localStorage.removeItem("site-theme");
        else localStorage.setItem("site-theme", theme);
      } catch (_) {}
    }

    const resolved = theme === "system" ? (systemDark.matches ? "dark" : "light") : theme;
    themeLabel.textContent = labels[theme];
    themeButton.dataset.mode = theme;
    themeButton.setAttribute("aria-label", `当前为${labels[theme]}外观，点击切换`);
    themeButton.title = `当前：${labels[theme]}`;
    themeColor.setAttribute("content", resolved === "dark" ? "#202522" : "#e8e4dc");
  }

  const initialTheme = storedTheme();
  applyTheme(["light", "dark"].includes(initialTheme) ? initialTheme : "system", false);

  themeButton.addEventListener("click", () => {
    const order = ["system", "light", "dark"];
    const next = order[(order.indexOf(themeButton.dataset.mode) + 1) % order.length];
    applyTheme(next);
  });

  systemDark.addEventListener("change", () => {
    if (themeButton.dataset.mode === "system") applyTheme("system", false);
  });

  const cards = [...document.querySelectorAll("[data-project-card]")];
  const emptyState = document.querySelector("[data-empty-state]");
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      let visible = 0;
      cards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.hidden = !matches;
        if (matches) visible += 1;
      });
      emptyState.hidden = visible !== 0;
    });
  });

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target === card) card.querySelector(".project-link").click();
    });
  });

  const reveals = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }
})();
