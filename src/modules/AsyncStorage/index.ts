import AsyncStorage from '@react-native-async-storage/async-storage';

export const localStorageName = {
  saveStatusLogined: 'saveStatusLogined',
};

export const localStorageModule = {
  setItem: async (key: string, value: string | number | boolean | Uint8Array) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('setItem=>', value);

    } catch (error) {
        console.log('setItem=>error', error);
    }
  },
  getItem: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      console.log('getItem=>', value);
      return value !== null && value !== "false" ? JSON.parse(value) : false;
    } catch (error) {
      console.log('getItem=>error', error);
      return false;
    }
  },
  getBoolean: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : false;
    } catch (error) {
      console.error('Error getting boolean from AsyncStorage:', error);
      return false;
    }
  },
  getNumber: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? parseFloat(value) : null;
    } catch (error) {
      console.error('Error getting number from AsyncStorage:', error);
      return null;
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing item from AsyncStorage:', error);
    }
  },
};
