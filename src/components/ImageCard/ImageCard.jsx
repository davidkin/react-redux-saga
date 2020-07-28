import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import withPopup from '../../HOC/withPopup';
import './ImageCard.scss';
import Tooltip from '../../UI-Kit/Tooltip/Tooltip';
import Form from '../../components/Form/Form';
import { deleteImage } from '../../store/actions/images';

const ImageCard = ({ item, openPopup }) => {
    const [isOpenTooltip, setIsOpenTooltip] = useState(false);
    const [isActiveUpdateButton, setIsActiveUpdateButton] = useState(false);

    const dispatch = useDispatch();

    return (
        <article className="card">
            <div 
                className="imageWrapper"
                onClick={() => setIsActiveUpdateButton(!isActiveUpdateButton)}
                onMouseOver={() => setIsOpenTooltip(true)}
                onMouseLeave={() => setIsOpenTooltip(false)}
            > 
                { 
                    isOpenTooltip && (
                        <Tooltip 
                            title={item.title}
                            position={item.position}
                        />
                    )
                }
                <img src={item.src} className="image" alt="card" />
            </div>

            {
                isActiveUpdateButton && (
                    <button
                        type="button"
                        className="buttonUpdate"
                        onClick={() => {
                            openPopup({ PopupComponent: Form, content: item })
                        }}
                    >Update</button>

                )
            }

            <button 
                type="button"
                className="buttonDelete"
                onClick={() => dispatch(deleteImage(item.id))}
            >Delete</button>
        </article>
    )
}

export default withPopup(ImageCard);