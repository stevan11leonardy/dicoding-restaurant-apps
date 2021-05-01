import API_ENDPOINT from '../globals/api-endpoint';

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
}

export default RestaurantSource;
