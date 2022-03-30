import React from "react";
import OSTitle from "./OSTitle";
import IdeaDeveloping from "./planks/IdeaDeveloping";
import Coding from "./planks/Coding";
import Game from "./planks/Game";
import Responsive from "./planks/Responsive";
import FreeShopping from "./planks/FreeShopping";
import Bonus from "./planks/Bonus";
import "../../style/OtherServices.css";

const OtherServices = () => (
    <>
        <div className="OS__content">
            <OSTitle />
                <div className="OS__planks__top both__planks">
                    <IdeaDeveloping />
                    <Coding />
                    <Game />
                </div>
                <div className="OS__planks__bottom both__planks">
                    <Responsive />
                    <FreeShopping />
                    <Bonus />
                </div>
        </div> 
    </>
);

export default OtherServices;