/* eslint-disable no-alert */
import RestaurantSource from '../data/restaurantdb-source';
import UrlParser from '../routes/url-parser';

const ReviewFormInitator = {
  init({ form, onSubmitted }) {
    this._onSubmitted = onSubmitted;

    form.addEventListener('submit', (event) => {
      this._handleFormSubmit(event);
    });
  },

  _resetForm() {
    document.getElementById('reviewer-name').value = '';
    document.getElementById('review').value = '';
  },

  _getValues() {
    const reviewerName = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review').value;

    return {
      reviewerName,
      review,
    };
  },

  _disabledSubmitButton(value) {
    const button = document.querySelector('.add-review-button');

    button.disabled = value;
    button.innerHTML = (value) ? '<fetch-loading></fetch-loading>' : 'Add Review';
  },

  async _handleFormSubmit(event) {
    event.preventDefault();
    this._disabledSubmitButton(true);

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const { error, customerReviews } = (await RestaurantSource.addReview(url.id, {
      name: this._getValues().reviewerName,
      review: this._getValues().review,
    }));

    this._disabledSubmitButton(false);

    if (error) {
      alert('failed to add review');
    } else {
      alert('success to add review');
      this._resetForm();
      this._onSubmitted(customerReviews);
    }
  },
};

export default ReviewFormInitator;
