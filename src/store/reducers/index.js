import { combineReducers } from 'redux';
import { imagesReducer } from './images';

const createRootReducer = () => combineReducers({
    imagesReducer
})

export default createRootReducer;