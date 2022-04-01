import React from "react";
import PreviousArrowIcon from "../../img/previous__arrow__icon.svg";
import NextArrowIcon from "../../img/next__arrow__icon.svg";

const PreviousNextButton = () => (
    <div className="comments__btn">
        <div className="wrapper__previous">
            <button name="button" type="button" className="comments__btn__both btn__previous">
                <img src={PreviousArrowIcon} alt="PreviousArrowIcon" className="comments__icon"/>
                <p className="btn__text__previous">Previous</p>
            </button>
        </div>
        <div className="wrapper__next">
            <button name="button" type="button" className="comments__btn__both btn__next">
                <p className="btn__text__next">Next</p>
                <img src={NextArrowIcon} alt="PreviousArrowIcon"  className="comments__icon"/>
            </button>
        </div>
    </div>
);

export default PreviousNextButton;