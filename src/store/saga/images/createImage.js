import { takeLatest, put, apply, select } from "redux-saga/effects";
import * as actionTypes from '../../actions/actionTypes';
import API from '../../../apiService/index';
import { getImagesSuccess } from '../../actions/images';

const getImages = state => state.imagesReducer.images;

function* createImage({ payload }) {
    const response = yield apply(API, API.createImage, [payload]);
    const images = yield select(getImages);

    yield put(getImagesSuccess([...images, response]));
}

export function* watchCreateImage() {
    yield takeLatest(actionTypes.images.create, createImage)
}