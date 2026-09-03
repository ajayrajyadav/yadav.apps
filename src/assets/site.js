document.addEventListener("DOMContentLoaded", () => {
  for (const node of document.querySelectorAll("[data-year]")) {
    node.textContent = String(new Date().getFullYear());
  }
});
