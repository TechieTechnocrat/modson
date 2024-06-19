import './css/modal.css';

class Modal {
  constructor({ title, theme, buttons }) {
    this.title = title || 'Default Title';
    this.theme = theme || 'light-theme';
    this.buttons = buttons || [];
    this.modal = null;
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.className = `modal ${this.theme}`;

    const header = document.createElement('div');
    header.className = 'modal-header';
    header.textContent = this.title;

    const content = document.createElement('div');
    content.className = 'modal-content';
    content.textContent = 'This is a dynamic modal content.';

    const buttonSection = document.createElement('div');
    buttonSection.className = 'modal-buttons';
    this.buttons.forEach(buttonConfig => {
      const button = document.createElement('button');
      button.textContent = buttonConfig.label;
      button.onclick = buttonConfig.onClick;
      buttonSection.appendChild(button);
    });

    this.modal.appendChild(header);
    this.modal.appendChild(content);
    this.modal.appendChild(buttonSection);

    document.body.appendChild(this.modal);
  }

  showModal() {
    if (!this.modal) {
      this.createModal();
    }
    this.modal.style.display = 'block';
  }

  hideModal() {
    if (this.modal) {
      this.modal.style.display = 'none';
    }
  }
}

export default Modal;
