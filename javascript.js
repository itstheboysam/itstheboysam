document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector(".primary-nav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!isExpanded));
      primaryNav.classList.toggle("is-open");
    });

    // Close mobile menu when a navigation link is clicked
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
      });
    });
  }

  // FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const answer = button.nextElementSibling;

      // Close other open FAQ items for a clean accordion experience
      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== button) {
          otherBtn.setAttribute("aria-expanded", "false");
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.hidden = true;
          }
        }
      });

      // Toggle current FAQ item
      button.setAttribute("aria-expanded", String(!isExpanded));
      if (answer) {
        answer.hidden = isExpanded;
      }
    });
  });
});