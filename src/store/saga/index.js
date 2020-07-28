import { all } from 'redux-saga/effects';
import { watchGetImages } from './images/getImages';
import { watchCreateImage } from './images/createImage';
import { watchDeleteImage } from './images/deleteImage';
import { watchUpdateImage } from './images/updateImage';

export function* rootSaga() {
    yield all(
        [
            watchGetImages(),
            watchCreateImage(),
            watchDeleteImage(),
            watchUpdateImage()
        ]
    );
};