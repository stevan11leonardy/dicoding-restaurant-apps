import { LikeButton, LikedButton } from '../views/templates/favourite-button';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant, favouriteRestauratIdb }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favouriteRestauratIdb = favouriteRestauratIdb;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const movie = await this._favouriteRestauratIdb.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = LikeButton;

    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestauratIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = LikedButton;

    const likedButton = document.querySelector('.liked-button');
    likedButton.addEventListener('click', async () => {
      await this._favouriteRestauratIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
