import { createStore } from 'redux';
import rootReducer from './reducers';

// Creates a Redux store with the combined reducers
const store = createStore(rootReducer);

export default store;
