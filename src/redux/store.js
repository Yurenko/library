import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import books from './books/booksReducer';
import storeBooks from './store/storeReducer';

const rootReducer = combineReducers({ books, storeBooks });

const middleware = [ReduxThunk];

const enhanter = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhanter));
export default store;
