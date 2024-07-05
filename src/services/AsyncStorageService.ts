import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageService {
  static saveData(data: any, key: string): void {
    AsyncStorage.setItem(key, JSON.stringify(data)).catch(() => {
      console.log('failed to save data');
    });
  }

  static async getData(key: string): Promise<any> {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result) return JSON.parse(result);
    } catch (error) {
      return undefined;
    }
  }

  static removeAllAsyncData(): void {
     AsyncStorage.clear();
  }
}
