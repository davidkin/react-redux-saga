import React from 'react';
import './Layout.scss';
import ImageCard from '../components/ImageCard/ImageCard';
import Form from '../components/Form/Form';
import withPopup from '../HOC/withPopup';

const Layout = ({ images, openPopup }) => {
    return (
        <div className="container">
            
            <button 
                type="button"
                className="popup-button"
                onClick={() => {
                    openPopup({PopupComponent: Form});
                }}
            >Add Image</button>

            { 
                images.length ? 
                (
                    <div className="cards">
                        { images.map(item => (
                            <ImageCard key={item.id} item={item} />     
                        )) }
                    </div>
                ) : (
                    <p>You havn't added some images yet</p>
                )
            }

        </div>
    )
}

export default withPopup(Layout);