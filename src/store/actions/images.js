import * as actionTypes from './actionTypes';

export const getImages = () => ({
    type: actionTypes.images.getAll
});

export const getImagesSuccess = (body) => ({
    type: actionTypes.images.success,
    payload: body
});

export const getImagesError = (error) => ({
    type: actionTypes.images.error,
    payload: error
});