# Visual Semantic Entropy

12 English slides for a 25-minute paper-sharing talk plus 5 minutes of discussion.

Paper: Huy et al., *Visual Semantic Entropy: Do Vision Language Models Recognize Visual Ambiguity?*, arXiv:2606.31407v1. https://arxiv.org/html/2606.31407v1

The standalone `index.html` embeds all images, CSS and JavaScript. Original paper figures are attributed to Huy et al. under CC BY 4.0. Figure 5 uses its first panel. Tables 2, 5 and 6 supply the selected numeric results. Teaching examples and discussion questions are labelled separately. No runtime API or external asset request is required. External citations open only when clicked.

## Controls

- Space / Right arrow: reveal the next build or advance.
- Left arrow: previous build or slide.
- Shift + arrow: jump directly between slides.
- F: fullscreen. O: overview. N: English speaker notes. R: replay current slide.
- Click a paper figure to enlarge it. Escape closes dialogs.
- URL fragment `#slide-N` selects a slide, where N is an integer 1–12, default 1. Invalid integers clamp, invalid syntax uses slide 1.

## Interactive example

Slide 8 uses `U=2w(1-w)d` for two clusters with symmetric distance, following Equation 8. Cluster-A mass `w` is a number 0–1 (step .01, default .5), cluster B has mass `1-w`. Distance `d` is a number 0–1 (step .01, default .8). The sliders and presets feed `updateDemo()` in the embedded script. These ranges are illustrative rather than restrictions on all semantic metrics. Balanced mass and greater separation raise the score. The score is not a calibrated error probability. Speaker notes explain the pair-counting convention difference in the source figure.
