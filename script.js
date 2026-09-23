// Highlight the current page in the sidebar nav, and auto-close the
// mobile nav after a link is tapped.
(function () {
  const links = document.querySelectorAll(".sidebar-nav a");
  const toggle = document.getElementById("nav-toggle");
  const current = location.pathname.split("/").pop() || "index.html";

  links.forEach((link) => {
    const hrefPage = link.getAttribute("href").split("#")[0] || "index.html";
    if (hrefPage === current) {
      link.classList.add("active");
    }
    link.addEventListener("click", () => {
      if (toggle) toggle.checked = false;
    });
  });
})();
