class RestaurantMenuItem extends HTMLElement {
  connectedCallback() {
    const restaurantMenuItemTemplate = `
      <style>
        .menu-item {
          padding: 2rem 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px #00000025;
          margin-right: 1rem;
          border-radius: 8px;
          min-width: 100px;
          width: max-content;
        }
      </style>
      <li 
        class="menu-item" 
        tabindex="0" 
        aria-label="${this.getAttribute('name')}"
        title="${this.getAttribute('name')}"
      >
        ${this.getAttribute('name')}
      </li>
    `;
    this.innerHTML = restaurantMenuItemTemplate;
  }
}

window.customElements.define('restaurant-menu-item', RestaurantMenuItem);
