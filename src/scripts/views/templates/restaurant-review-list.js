class RestaurantReviewList extends HTMLElement {
  connectedCallback() {
    const restaurantReviewListTemplate = `
      <style>
        .reviews-container {
          list-style: none;
          margin: 0;
          padding: 0;
          margin-bottom: 2rem;
        }
        .reviews-title {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 0;
          padding: 0;
        }
      </style>
      <p class="reviews-title" tabindex="0">
        Reviews:
      <p>
      <ul class="reviews-container">
        <slot name="review">
          <li tabindex="0">No Review Exist</li>
        </slot>
      </ul>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = restaurantReviewListTemplate;
  }
}

window.customElements.define('restaurant-review-list', RestaurantReviewList);
