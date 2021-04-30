class Jumbotron extends HTMLElement {
  connectedCallback() {
    const jumbotronTemplate = `
      <section class="jumbotron-container">
        <div class="jumbotron">
          <h1 id="main-heading" tabindex="0">Eat today, live another day.</h1>
          <div class="overlay"></div>
        </div>
      </section>
    `;
    this.innerHTML = jumbotronTemplate;
  }
}

window.customElements.define('home-jumbotron', Jumbotron);
