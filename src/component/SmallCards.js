import React from "react";
import "./smallcards.css";
import img1 from './product-1.png';
import img2 from './product-2.png';
import img3 from './product-3.png';

const SmallCards = function () {

    return (
        <div className="parentcard ">
            <div className="smallcard col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="smallcard-img">
                    <img src={img1} alt="chair product1" />
                </div>
                <div className="smallcard-content">
                    <h3>Nordic Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="smallcard col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="smallcard-img">
                    <img src={img2} alt="chair product2" />
                </div>
                <div className="smallcard-content">
                    <h3>Modern Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="#">Read More</a>
                </div>
            </div>
            <div className="smallcard col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="smallcard-img">
                    <img src={img3} alt="chair product3" />
                </div>
                <div className="smallcard-content">
                    <h3>Classic Chair</h3>
                    <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default SmallCards;
