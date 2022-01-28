/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import './SlideShow.css'

export default function SlideShow(props) {

    let [currentSlide, setCurrentSlide] = useState(0)

    const prevPicture = () => {
        setCurrentSlide(currentSlide = currentSlide - 1)
        console.log(currentSlide);
        
        if (currentSlide < 0) {
            setCurrentSlide(props.img.length - 1)
            return
        }
    }

    const nextPicture = () => {
        console.log(currentSlide, props.img.length);
        setCurrentSlide(currentSlide = currentSlide + 1)
        if (currentSlide + 1 > props.img.length) {
            setCurrentSlide(0)
        }
    }

    return (
        <div className="slideshow">
            <img className="picture" src={props.img && props.img[currentSlide]} alt="TEST PICTURE" />
            <div className="slideshow-options">
                <p className="slideshow-state">{(currentSlide) ? currentSlide + 1 : 1}/{props.img && props.img.length}</p>
                <button className={`slideshow-prev ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={prevPicture}><img src="../../left-arrow.png" /></button>
                <button className={`slideshow-next ${(props.img && props.img.length === 1) ? "buttondisable" : ""}`} onClick={nextPicture}><img src="../../next.png" /></button>
            </div>
        </div>
    )

}