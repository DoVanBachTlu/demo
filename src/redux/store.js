import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true
  // whiteList: ['post'],
};
const rootReducer = combineReducers({
  postReducer: persistReducer(persistConfig, reducer),
});


export const store = createStore(rootReducer, applyMiddleware(thunk));
export const appPersist = persistStore(store);
