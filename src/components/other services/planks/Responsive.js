import React from "react";
import ResizeDownIcon from "../../../img/ResizeDown__icon.svg"

const Responsive = () => (
    <div className="planks__content responsive__content">
        <div className="responsive__icon">
            <img src={ResizeDownIcon} alt="ResizeDown" className="icon__responsive" />
        </div>
        <div className="responsive__content">
            <h3 className="plank__title responsive__plank__title">Responsive Design</h3>
            <p className="plank__text responsive__plank__text">There are many variations of passages<br /> of Lorem Ipsum available, but the<br /> majorityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default Responsive;