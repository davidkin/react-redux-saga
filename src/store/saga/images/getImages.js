import { takeLatest, put, apply } from 'redux-saga/effects';
import API from '../../../apiService';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesError, getImagesSuccess } from '../../actions/images';

function* getImages() {
    const response = yield apply(API, API.getImages, []);
    
    if (response.length) {
        yield put(getImagesSuccess(response))
    } else {
        yield put(getImagesError('error'));
    }
}

export function* watchGetImages() {
    yield takeLatest(actionTypes.images.getAll, getImages)
}