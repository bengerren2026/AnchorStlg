const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = contactForm.querySelector('.form-status');
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      status.textContent = 'Please complete the required fields.';
      return;
    }
    status.textContent = 'Thank you. Connect this form to the firm’s secure intake system before launch.';
    contactForm.reset();
  });
}
