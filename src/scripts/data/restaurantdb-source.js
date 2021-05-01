import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detail(id) {
    const response = await fetch(`${API_ENDPOINT.DETAIL}${id}`);
    const responseJson = await response.json();

    return responseJson;
  }

  static async addReview(restaurantId, reviewer) {
    const response = await fetch(`${API_ENDPOINT.ADD_REVIEW}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify({
        id: restaurantId,
        name: reviewer.name,
        review: reviewer.review,
      }),
    });
    const responseJson = await response.json();

    return responseJson;
  }
}

export default RestaurantSource;
