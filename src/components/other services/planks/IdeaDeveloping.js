import React from "react";
import BulbIcon from "../../../img/bulb__icon.svg"

const IdeaDeveloping = () => (
    <div className="planks__content id__planks__content"> 
        <div className="id__icon">
            <img src={BulbIcon} alt="Bulb" className="icon__bulb" />
        </div>
        <div className="ID__content">
            <h3 className="plank__title id__title">Idea Developing</h3>
            <p className="plank__text id__text">There are many variations of passages<br /> of Lorem Ipsum available, but the ma-<br />orityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default IdeaDeveloping;