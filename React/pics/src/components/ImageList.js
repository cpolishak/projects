import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // You also could use the ({description, id, urls}) arguments so that we don't have to put image.whatever for the alt, key and src properties. It's just shorter and cleaner code.
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
            
    })

    return <div className="image-list">{images}</div>;
}

export default ImageList;