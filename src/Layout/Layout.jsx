import React from 'react';
import './Layout.scss';
import ImageCard from '../components/ImageCard/ImageCard';

const Layout = ({ images = [] }) => {
    return (
        <div className="container">
            
            <button 
                type="button"
                className="popup-button"
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

export default Layout;