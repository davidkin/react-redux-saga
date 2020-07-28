import { takeLatest, put, apply, select } from 'redux-saga/effects';
import * as actionTypes from '../../actions/actionTypes';
import API from '../../../apiService';
import { getImagesSuccess } from '../../actions/images';

const getImages = state => state.imagesReducer.images;

function* updateImage({ payload }) {
    console.log('Saga (update)', payload);

    const response = yield apply(API, API.updateImage, [payload]);
    const images = yield select(getImages);
    const oldElemIndex = images.findIndex(item => item.id === payload.id);
    const newArr = [...images.slice(0, oldElemIndex), response, ...images.slice(oldElemIndex + 1)]
    
    yield put(getImagesSuccess(newArr));
}

export function* watchUpdateImage() {
    yield takeLatest(actionTypes.images.update, updateImage);
}