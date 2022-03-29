import React from "react";
import logo__photo from "../../img/Layer 73.png"
import "../../style/services/photography.css"

const Photography = () => (
    <div className="servisec__wraper servisec__wraper__photography">
        <img src={logo__photo} alt="Photography" className="logo__servisec__photography" />
        <div>
            <h2 className="servisec__wraper__title title__photography">Photography</h2>
            <p className="servisec__wraper__text">There are many variations of passages of<br />  Lorem Ipsum available,  the majorityalteration<br /> make difficult</p>
        </div>
    </div>
)

export default Photography;