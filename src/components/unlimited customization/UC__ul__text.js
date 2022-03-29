import React from "react";
import BulletPoint from "../../img/bullet point.png"

const UCUlText = () => (
    <div className="UC__text">
        <ul>
            <li className="UC__li">
                <img src={BulletPoint}  alt="BulletPoint" className="uc__li__img"/>
                More wordpress featrures with great responsive design.
            </li>
            <li className="UC__li">
                <img src={BulletPoint}  alt="BulletPoint"  className="uc__li__img"/>
                Corporate flat design with necessary elements.
            </li>
            <li className="UC__li">
                <img src={BulletPoint}  alt="BulletPoint"  className="uc__li__img"/>
                Free vector shape and mockup by great designer.
            </li>
            <li className="UC__li">
                <img src={BulletPoint}  alt="BulletPoint"  className="uc__li__img"/>
                Full one page flat and modern trend following goods.
            </li>
        </ul>
    </div>
);

export default UCUlText;