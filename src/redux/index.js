import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import singerReducer from './reducers/singer'
import albumReducer from './reducers/album';
import songReducer from './reducers/song';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  singers: singerReducer,
  albums: albumReducer,
  songs: songReducer,
})
export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store;
