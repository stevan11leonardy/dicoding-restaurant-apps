import FavouriteRestaurantIdb from '../data/favourite-restaurant-idb';
import { LikeButton, LikedButton } from '../views/templates/favourite-button';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

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
    const movie = await FavouriteRestaurantIdb.getRestaurant(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = LikeButton;

    const likeButton = document.querySelector('.like-button');
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = LikedButton;

    const likedButton = document.querySelector('.liked-button');
    likedButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
