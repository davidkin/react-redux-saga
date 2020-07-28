import * as actionTypes from './actionTypes';

export const getImages = () => ({
    type: actionTypes.images.getAll
});

export const createImage = body => ({
    type: actionTypes.images.create,
    payload: body
});

export const deleteImage = id => ({
    type: actionTypes.images.delete,
    payload: id
});

export const updateImage = body => {    
    console.log('Action (update)', body);
    return {
        type: actionTypes.images.update,
        payload: body
    }
};

export const getImagesSuccess = body => ({
    type: actionTypes.images.success,
    payload: body
});

export const getImagesError = error => ({
    type: actionTypes.images.error,
    payload: error
});