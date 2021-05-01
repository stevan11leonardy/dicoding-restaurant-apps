const ReviewFormInitator = {
  init({ form }) {
    this._form = form;

    this._form.addEventListener('submit', (event) => {
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

  _handleFormSubmit(event) {
    event.preventDefault();
    this._disabledSubmitButton(true);

    setTimeout(() => {
      this._disabledSubmitButton(false);
      this._resetForm();
    }, 2000);
  },
};

export default ReviewFormInitator;
