class RestaurantMenuList extends HTMLElement {
  connectedCallback() {
    const restaurantMenuListTemplate = `
      <style>
        .food-menus, .drink-menus {
          list-style: none;
          margin: 0;
          padding: .5rem 0;
          display: flex;
          align-items: center;
          overflow-x: auto;
          padding-left: .25rem;
          margin-bottom: 1rem;
        }
        .menus-title {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 0;
          padding: 0;
        }

        .menu-title {
          font-size: 16px;
          padding: 0;
          margin: 0;
          margin-bottom: .5rem;
        }
      </style>
      <p class="menus-title" tabindex="0">Menus:<p>
      <p class="menu-title" tabindex="0">
        Foods
      <p>
      <ul class="food-menus">
        <slot name="foods">
          <li tabindex="0">No Menu Exist</li>
        </slot>
      </ul>
      <p class="menu-title" tabindex="0">Drinks<p>
      <ul class="drink-menus">
        <slot name="drinks">
          <li tabindex="0">No Menu Exist</li>
        </slot>
      </ul>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = restaurantMenuListTemplate;
  }
}

window.customElements.define('restaurant-menu-list', RestaurantMenuList);
