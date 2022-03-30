import React from "react";
import BrowserIcon from "../../../img/browser__icon.png"

const Coding = () => (
    <div className="planks__content coding__content">
        <div className="coding__icon">
            <img src={BrowserIcon} alt="Browser" className="icon__browser" />
        </div>
        <div className="coding__content">
            <h3 className="plank__title coding__title">Best Coding</h3>
            <p className="plank__text coding__text">There are many variations of passages<br /> of Lorem Ipsum available, but the ma-<br />jorityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default Coding;