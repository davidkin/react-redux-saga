import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesSelector } from '../../store/selectors';
import './Form.scss';
import { createImage, updateImage } from '../../store/actions/images';

const RadioButtonWrapper = ({
    id, name, text, positionValue, setPosVal
}) => (
    <div className="wrapperInput">
        <label htmlFor={id} className="label">{ text }</label>
        <input 
            type="radio"
            className="input"
            id={id}
            name={name}
            checked={positionValue === id}
            onChange={() =>setPosVal(id)}
            required
        />
    </div>
)

const Form = ({ popupContent, closePopup }) => {
    const [file, setFile] = useState(popupContent ? popupContent.src : '');
    const [title, setTitle] = useState(popupContent ? popupContent.title : '');
    const [positionValue, setPositionValue] = useState(popupContent ? popupContent.position : '');

    const images = useSelector(imagesSelector);
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        
        const id = popupContent && popupContent.id || images.length && images[images.length - 1].id + 1;
        const body = {
            id,
            src: file,
            title,
            position: positionValue
        }

        if (popupContent) {
            dispatch(updateImage(body))
        } else {
            dispatch(createImage(body));
        }
        
        closePopup();
    }

    const chooseImage = e => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            setFile(reader.result);
        }
    }

    return (
        <form onSubmit={onSubmit} className="form">
            <a
                type="button"
                className="exitButton"
                onClick={() => closePopup()}
            >x</a>

            <div className="fileInputWrapper">
                <label 
                    htmlFor="file" 
                    className="image-link"
                > { !file ? 'Select image' : 'Image is selected' }
                </label>

                <input 
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    id="file"
                    onChange={e => chooseImage(e)}
                    className="inputLoadFile"
                />
            </div>
            
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="tooltipText"
                placeholder="Enter tooltip Title"
            />

            <RadioButtonWrapper 
                name="tooltipPosition"
                id="left"
                text="on left side"
                positionValue={positionValue}
                setPosVal={setPositionValue}
            />
            <RadioButtonWrapper 
                name="tooltipPosition"
                id="right"
                text="on right side"
                positionValue={positionValue}
                setPosVal={setPositionValue}
            />
            <RadioButtonWrapper 
                name="tooltipPosition"
                id="top"
                text="on the top"
                positionValue={positionValue}
                setPosVal={setPositionValue}
            />
            <RadioButtonWrapper 
                name="tooltipPosition"
                id="bottom"
                text="on the bottom"
                positionValue={positionValue}
                setPosVal={setPositionValue}
            />

            <button
                type="submit"
                disabled={!file || !title || !positionValue}
            >Submit</button>
        </form>
    )
}

export default Form;