import {combineReducers, createStore, applyMiddleware,} from 'redux';
import reducer from './reducer';
const store = createStore(
    reducer,
    // applyMiddleware(createLogger()),
);

if (module.hot) {
    module.hot.accept('../reducers', () => {
        store.replaceReducer(require('./reducer'));
    });
}
const {dispatch, getState,}=store;
export {dispatch, getState,}
export default store;