import React from "react";
import './helpu.css';
import img1 from './img-grid-1.jpg'
import img2 from './img-grid-2.jpg'
import img3 from './img-grid-3.jpg'

const HelpU = () => {
    return (
        <div style={{marginTop:"200px"}} className="helpu row justify-content-center align-items-center">
            <div className="help-imgs col-lg-7 col-md-12 col-sm-12">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
            </div>

            <div class="help-text col-lg-5 ps-lg-5 col-md-12 col-sm-12 ">
                <h2 class="section-title mb-4">We Help You Make Modern Interior Design</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

                <ul class="my-4">
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                </ul>
                <p><a herf="#" class="btn1">Explore</a></p>
            </div>
        </div>
    )


}

export default HelpU;