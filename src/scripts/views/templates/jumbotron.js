class Jumbotron extends HTMLElement {
  connectedCallback() {
    const jumbotronTemplate = `
      <section class="jumbotron-container">
        <picture class="pic-container">
          <source media="(max-width: 600px)" srcset="/images/heros/main-small.jpg">
          <source type="image/jpeg" srcset="/images/heros/main.jpg">
          <img class="lazyload" data-src="/images/heros/main.jpg" alt="fastfood" crossorigin="anonymous">
        </picture>
        <div class="overlay">
          <h1 id="main-heading" tabindex="0">Eat today, live another day.</h1>
        </div>
      </section>
    `;
    this.innerHTML = jumbotronTemplate;
  }
}

window.customElements.define('home-jumbotron', Jumbotron);
