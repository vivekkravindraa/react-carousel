import React, { useState } from 'react';

export default function Slider(){
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ translateValue, setTranslateValue ] = useState(0);
    const [ images, setImages ] = useState([
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
    ]);

    const goToPrevSlide = () => {
        if(currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
        setTranslateValue(translateValue + slideWidth());
    }

    const goToNextSlide = () => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0)
            setTranslateValue(0)
        }
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(translateValue + -(slideWidth()))
    }
  
    const slideWidth = () => {
       return document.querySelector('.slide').clientWidth;
    }
  
    return (
        <div className="slider">
            <div className="slider-wrapper"
                style={{
                transform: `translateX(${translateValue}px)`,
                transition: 'transform ease-out 0.45s'
                }}>
                    {images.map((image, i) => (
                        <Slide key={i} image={image} />
                    ))}
            </div>
            <div className="backArrow arrow" onClick={() => goToPrevSlide()}>
                <i className="fas fa-arrow-left fa-2x" aria-hidden="true"></i>
            </div>
            {
                currentIndex === images.length - 1 ?
                    null :
                <div className="nextArrow arrow" onClick={() => goToNextSlide()}>
                    <i className="fas fa-arrow-right fa-2x" aria-hidden="true"></i>
                </div>
            }
        </div>
    );
};
  
const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>;
};
