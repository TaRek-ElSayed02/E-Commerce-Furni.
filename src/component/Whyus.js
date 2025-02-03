import React from "react";
import "./whyus.css";
import whyUsImage from "../component/why-choose-us-img.jpg";
import dots from "../component/dots-yellow.svg";


const Whyus = () => {

    return (
        
        <div style={{marginTop:"200px" }} className="whyus  py-2 row ">
            <div className="choose col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h2 className="choosetitle">Why Choose Us</h2>
                <p className="choosedescription mb-5">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

                <div className="pros">
                    <div className="pro-cards ">
                        <i class="fa-solid fa-truck"></i>
                        <h3>Fast & Free Shipping</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div className="pro-cards">
                        <i class="fa-solid fa-box"></i>
                        <h3>Easy to Shop</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div className="pro-cards">
                        <i class="fa-solid fa-circle-check"></i>
                        <h3>24/7 Support</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                    <div className="pro-cards">
                        <i class="fa-solid fa-arrows-rotate"></i>
                        <h3>Hassle Free Returns</h3>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </div>


            <div className="whyus-image col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img src={whyUsImage} alt='Why us section image' />

            </div>


        </div>

    )


}

export default Whyus;