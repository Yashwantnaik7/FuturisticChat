// NetworkManager.js

class NetworkManager {
  static baseUrl = 'https://api.spoonacular.com/recipes/complexSearch';
  static apiKey = '60681c7b21c04f178ba89d7fa5d4a091';

  static async searchFood(item: string) {
    try {
      let response = await fetch(
        NetworkManager.baseUrl +
          `?number=1&apiKey=${NetworkManager.apiKey}&addRecipeInformation=true&query=${item}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error(
        'There has been a problem with your fetch operation:',
        error,
      );
      throw error;
    }
  }
}

export default NetworkManager;
