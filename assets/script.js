document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();
  document.body.classList.add("page-transition");

  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    mobileMenu.hidden = true;
    document.body.classList.remove("menu-open");
    menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i><span>Menu</span>';
    if (window.lucide) window.lucide.createIcons();
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) return closeMenu();
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    mobileMenu.hidden = false;
    document.body.classList.add("menu-open");
    menuToggle.innerHTML = '<i data-lucide="x" aria-hidden="true"></i><span>Close</span>';
    if (window.lucide) window.lucide.createIcons();
  });

  mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.querySelectorAll("a.page-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.href === window.location.href) return;
      event.preventDefault();
      document.body.classList.add("page-leaving");
      window.setTimeout(() => { window.location.href = destination.href; }, 170);
    });
  });

  const tabs = [...document.querySelectorAll("[data-research]")];
  const panels = [...document.querySelectorAll("[data-panel]")];

  const activateTab = (tab) => {
    const key = tab.dataset.research;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.panel === key;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) return;
      event.preventDefault();
      const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
      const nextIndex = (index + (forward ? 1 : -1) + tabs.length) % tabs.length;
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  document.querySelector("[data-year]").textContent = new Date().getFullYear();
});
