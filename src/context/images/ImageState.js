import React, { useReducer } from 'react';
import { ImageContext } from './ImagesContext';
import { ImageReducer } from './ImageReducer';
import API from '../../apiService/index';

const ImageState = ({ children }) => {
    const initialSate = {
        images: [],
        work: 'work'
    }

    const [state, dispatch] = useReducer(ImageReducer, initialSate)

    const getImages = async () => {
        const payload = await API.getImages();

        console.log('GET IMAGES', payload);
    }

    return (
        <ImageContext.Provider value={{
            getImages,
            images: state.images,
            status: state.work
        }}>
            { children }
        </ImageContext.Provider>
    )
}

export default ImageState;