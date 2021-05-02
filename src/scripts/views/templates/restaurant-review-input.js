class RestaurantReviewInput extends HTMLElement {
  connectedCallback() {
    const restaurantReviewInputTemplate = `
      <p class="title">Add New Review</p>
      <form
        name="restaurant-review"
        class="add-review-form"
      >
        <div class="form-control">
          <label for="reviewer-name">Your Name *</label>
          <input id="reviewer-name" type="text" name="name" placeholder="your name" required/>
        </div>
        <div class="form-control">
          <label for="review">Review *</label>
          <textarea required id="review" rows="5" name="review" placeholder="write your review here..." required></textarea>
        </div>
        <button type="submit" aria-label="submit this review" class="add-review-button">Add Review</button>
      </form>
    `;

    this.innerHTML = restaurantReviewInputTemplate;
  }
}

window.customElements.define('restaurant-review-input', RestaurantReviewInput);
