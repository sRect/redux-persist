import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  transforms: [immutableTransform()], // https://github.com/rt2zz/redux-persist-transform-immutable
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

let store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
export default store;