import { takeLatest, put, apply, select } from 'redux-saga/effects';
import API  from '../../../apiService';
import * as actionTypes from '../../actions/actionTypes';
import { getImagesSuccess } from '../../actions/images';

const getImages = state => state.imagesReducer.images;

function* deleteImage({ payload }) {    
    yield apply(API, API.deleteImage, [payload]);

    const images = yield select(getImages);
    const newImages = images.filter(item => item.id !== payload);
   
    yield put(getImagesSuccess(newImages))
}

export function* watchDeleteImage() {
    yield takeLatest(actionTypes.images.delete, deleteImage);
}