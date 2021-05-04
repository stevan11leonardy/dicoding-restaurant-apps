import '../templates/restaurant-review-input';
import '../templates/restaurant-review-item';
import '../templates/restaurant-review-list';
import '../templates/restaurant-menu-list';
import '../templates/restaurant-menu-item';
import '../templates/restaurant-rating';
import '../../../styles/detail.css';
import RestaurantSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import LoadingInitiator from '../../utils/loading-initator';
import ReviewFormInitator from '../../utils/review-form-initiator';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const renderMenuTemplate = (menus, type) => menus[type].map(
  (menu) => `<restaurant-menu-item slot="${type}" name="${menu.name}"></restaurant-menu-item>`,
).join();

const renderReviewTemplate = (reviews) => reviews.map(
  (review) => `
    <restaurant-review-item slot="review">
      <p tabindex="0" slot="reviewer-name">${review.name}</p>
      <p tabindex="0" slot="review-date">${review.date}</p>
      <p tabindex="0" slot="review">${review.review}</p>
    </restaurant-review-item>
  `,
).join();

const renderDetailTemplate = (restaurant) => `
  <div class="detail__image-container">
    <img
      class="lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" 
      alt="${restaurant.name}"
      tabindex="0"
      crossorigin="anonymous"
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
      ${renderMenuTemplate(restaurant, 'categories')}
      ${renderMenuTemplate(restaurant.menus, 'foods')}
      ${renderMenuTemplate(restaurant.menus, 'drinks')}
    </restaurant-menu-list>
    <restaurant-review-list>
      ${renderReviewTemplate(restaurant.customerReviews)}
    </restaurant-review-list>
    <restaurant-review-input></restaurant-review-input>
  </div>
`;

const Detail = {
  async render() {
    return `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" crossorigin="anonymous"/>
      <div class="detail__container">
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const detailContainer = document.querySelector('.detail__container');

    const loading = LoadingInitiator.init({
      container: detailContainer,
    });

    const { restaurant, error, message } = await RestaurantSource.detail(url.id);

    await loading._hide();

    if (error) {
      detailContainer.innerHTML = `
        <error-fetch message="${message}"></error-fetch>
      `;
    } else {
      detailContainer.innerHTML = renderDetailTemplate(restaurant);

      ReviewFormInitator.init({
        form: document.querySelector('.add-review-form'),
        onSubmitted: (response) => {
          detailContainer.innerHTML = renderDetailTemplate({
            ...restaurant,
            customerReviews: response,
          });
        },
      });

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
        favouriteRestauratIdb: FavouriteRestaurantIdb,
      });
    }
  },
};

export default Detail;
