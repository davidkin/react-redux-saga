import * as actionTypes from '../actions/actionTypes';

const initialValue = {
    images: [],
    isDataReceived: false,
    isFetch: false,
    error: null
}

export const imagesReducer = (state = initialValue, { type, payload}) => {
    switch (type) {
        case actionTypes.images.getAll:
        case actionTypes.images.create:
        case actionTypes.images.delete:
        case actionTypes.images.update:
            return {
                ...state,
                isFetch: true
            };

        case actionTypes.images.success:
            return {
                ...state,
                images: payload,
                isDataReceived: true,
                isFetch: false
            };
        
        case actionTypes.images.error:
            return {
                ...state,
                isDataReceived: false,
                isFetch: false,
                error: payload
            }

        default:
            return state;
    }
}