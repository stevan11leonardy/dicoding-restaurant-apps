class RestaurantRating extends HTMLElement {
  connectedCallback() {
    const restaurantRatingTemplate = `
      <span class="rating-container">
        ★ <span>${this.getAttribute('rating')}</span>
      </span>
    `;
    this.innerHTML = restaurantRatingTemplate;
  }
}

window.customElements.define('restaurant-rating', RestaurantRating);
