import './hero.css';
import React, { useState } from "react";
import couchImage from '../component/couch.png';



const Hero = (props) => {

    return (

        <div className='hero row justify-content-center align-items-center'>
            <div className='hero-content col-lg-5 text-left'>
                    <h1 className='mb-5'>{props.title}</h1>
                    <p>{props.description}</p>
                    <div className='hero-buttons'>
                        <button>Shop Now</button>
                        <button>Explore</button>
                    </div>
            </div>
            <div className='hero-image col-lg-7 col-md-12'>
            <img src={couchImage} alt='Hero section image' />
            </div>
        </div>


    )



}

export default Hero;