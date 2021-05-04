/* eslint-disable import/prefer-default-export */
import FavouriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('.like-button-container'),
    favouriteRestauratIdb: FavouriteRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
