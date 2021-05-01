class ErrorFetch extends HTMLElement {
  connectedCallback() {
    const errorFetchTemplate = `
      <div class="error-container">
        <p class="error-message">
          Oppss..., something went wrong: ${this.getAttribute('message')}
        </p>
        <p class="error-message-caption">
          please, try again later
        </p>
      </div>
    `;
    this.innerHTML = errorFetchTemplate;
  }
}

window.customElements.define('error-fetch', ErrorFetch);
