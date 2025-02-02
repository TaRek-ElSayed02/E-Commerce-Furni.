import React from "react";
import "./crafted.css";
import Card from "./card";
import pro1 from '../component/product-1.png';
import pro2 from '../component/product-2.png';
import pro3 from '../component/product-3.png';

const Crafted = () => {

    return (
        <div className="craft py-2 mt-5 row ">
            <div className="craft-content col-lg-3 col-md-12">
                <h2>Crafted with excellent material.</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <button>Explore</button>
            </div>

            <Card src={pro1} title='Nordic Chair' price='$50.00' />
            <Card src={pro2} title='Kruzo Aero Chair' price='$78.00' />
            <Card src={pro3} title='Ergonomic Chair' price='$43.00' />
        </div>


    )


}

export default Crafted;