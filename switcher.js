const $$ = (selector) => document.querySelectorAll(selector);
const createElement = (tagName, properties) =>
  Object.assign(document.createElement(tagName), properties);

// remove existing style sheets and inline styles
$$('link[rel="stylesheet"],style').forEach((el) => el.remove());
$$("*").forEach((el) => (el.style = ""));

const linkElm = createElement("link", {
  rel: "stylesheet",
  href: "https://cdn.jsdelivr.net/gh/eilla1/hackclub.css@main/lib/hackclub.min.css",
});

// Add hackclub.css and responsive viewport (if necessary)
document.head.append(
  linkElm,
  !$$('meta[name="viewport"]').length &&
    createElement("meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1.0",
    })
);
