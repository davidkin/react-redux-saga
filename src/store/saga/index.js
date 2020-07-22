import { all } from 'redux-saga/effects';
import { watchGetImages } from './images/getImages';

export function* rootSaga() {
    yield all(
        [
            watchGetImages()
        ]
    );
};