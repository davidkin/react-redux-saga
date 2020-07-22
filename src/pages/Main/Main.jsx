import React, {useContext, useEffect} from "react";
import { ImageContext } from "../../context/images/ImagesContext";
import Layout from '../../Layout/Layout';

const Main = () => {
    const { images, getImages } = useContext(ImageContext);

    useEffect(() => {
        getImages()
    }, [images])
    
    if (!Array.isArray(images)) {
        return <p>loading...</p>;
    }

    return <Layout images={images} />
};

export default Main;