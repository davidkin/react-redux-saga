import React, {useEffect} from "react";
import Layout from '../../Layout/Layout';
import { useSelector, useDispatch } from "react-redux";
import { imagesSelector } from "../../store/selectors";
import { getImages } from '../../store/actions/images';

const Main = () => {
    const images = useSelector(imagesSelector);
    const isDataReceived = useSelector(state => state.imagesReducer.isDataReceived);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch])
    
    if (!isDataReceived) {
        return <p>loading...</p>;
    }

    return <Layout images={images} />
};

export default Main;