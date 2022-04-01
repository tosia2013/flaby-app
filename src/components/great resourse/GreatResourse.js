import React from "react";
import MockupResourse from "../../img/MockupResourse.svg"
import ResourseText from "./ResourseText";

const GreatResourse = () => (
    <>
        <div className="resourse__content">
            <ResourseText />
            <div className="resourse__img">
                <img src={MockupResourse} alt="MockupResourse" className="resourse__img__performance"/>
            </div>
        </div>        
    </>
);

export default GreatResourse;