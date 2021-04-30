import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';
import '../templates/jumbotron';
import '../templates/restaurant-card';

const Favourite = {
  async render() {
    return `
      <section class="explore-restaurant">
        <h2 tabindex="0">Favourite Restaurants</h2>
        <div class="restaurant-list">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();

    const restaurantListElement = document.querySelector('.restaurant-list');

    if (restaurants.length === 0) {
      document.querySelector('.explore-restaurant').innerHTML += `
        <p class="centered">No restaurant exist</p>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantListElement.innerHTML += `
        <restaurant-card
          data-id="${restaurant.id}"
          name="${restaurant.name}"
          pic="${restaurant.pictureId}"
        >
          <span slot="location">${restaurant.city}</span>
          <span slot="rating">${restaurant.rating}</span>
          <span slot="description">${restaurant.description}</span>
        </restaurant-card>
      `;
    });
  },
};

export default Favourite;
