class RestaurantReviewItem extends HTMLElement {
  connectedCallback() {
    const restaurantReviewListTemplate = `
      <style>
        p {
          padding: 0;
          margin: 0;
        }
        .review-item {
          padding: 1rem;
          border: 1px solid #fea82f;
          margin-bottom: 1rem;
        }
        .reviewer-name {
          font-size: 16px;
          font-weight: 600;
        }
        .review-date {
          font-size: 10px;
          margin-bottom: 1rem;
        }
        .review {
          font-size: 14px;
          text-align: justify;
        }
      </style>
      <li class="review-item">
        <div class="reviewer-name">
          <slot name="reviewer-name">
            -
          </slot>
        </div>
        <div class="review-date">
          <slot name="review-date">
            -
          </slot>
        </div>
        <div class="review">
          <slot name="review">
            -
          </slot>
        </div>
      </li>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = restaurantReviewListTemplate;
  }
}

window.customElements.define('restaurant-review-item', RestaurantReviewItem);
