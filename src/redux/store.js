import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';  //used for logging action details when ever any action gets fired

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);

// export default {store, persistor};
export default store;