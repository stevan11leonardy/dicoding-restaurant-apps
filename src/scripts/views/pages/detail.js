import '../templates/restaurant-menu-list';
import '../templates/restaurant-menu-item';
import '../templates/restaurant-rating';
import '../../../styles/detail.css';
import RestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const renderTemplate = (restaurant, type) => restaurant.menus[type].map(
  (menu) => `<restaurant-menu-item slot="${type}" name="${menu.name}"></restaurant-menu-item>`,
).join();

const Detail = {
  async render() {
    return `
      <div class="detail__container">
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);

    const detailContainer = document.querySelector('.detail__container');

    detailContainer.innerHTML = `
      <div class="detail__image-container">
        <img 
          src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" 
          alt="${restaurant.name}"
          tabindex="0"
        />
        <div
          class="like-button-container"
        >
        </div>
      </div>
      <div class="detail__restaurant-info">
        <div class="detail__restaurant-main">
          <h1 tabindex="0"class="detail__restaurant-name">${restaurant.name}</h1>
          <restaurant-rating rating="${restaurant.rating}" aria-label="rating ${restaurant.rating}" tabindex="0"></restaurant-rating>
        </div>
        <p tabindex="0" class="detail__restaurant-address">${restaurant.address}</p>
        <restaurant-menu-list>
          ${renderTemplate(restaurant, 'foods')}
          ${renderTemplate(restaurant, 'drinks')}
        </restaurant-menu-list>
      </div>
    `;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.like-button-container'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
