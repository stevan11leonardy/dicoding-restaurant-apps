import RestaurantSource from '../../data/restaurantdb-source';
import LoadingInitiator from '../../utils/loading-initator';
import '../templates/jumbotron';
import '../templates/restaurant-card';

const Home = {
  async render() {
    return `
      <home-jumbotron></home-jumbotron>
      <section class="explore-restaurant">
        <h2 tabindex="0">Explore Restaurant</h2>
        <div class="restaurant-list">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const exploreRestaurantElement = document.querySelector('.explore-restaurant');

    const loading = LoadingInitiator.init({
      container: exploreRestaurantElement,
    });

    const { restaurants, error, message } = await RestaurantSource.list();

    const restaurantListElement = document.querySelector('.restaurant-list');

    await loading._hide();

    if (error) {
      exploreRestaurantElement.innerHTML = `
        <error-fetch message="${message}"></error-fetch>
      `;
    } else {
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
    }
  },
};

export default Home;
