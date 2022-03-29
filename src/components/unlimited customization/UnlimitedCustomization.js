import React from "react";
import UCUlText from "./UC__ul__text";
import UCTitleText from "./UC__title__text";
import UCButton from "./UC__button";
import "../../style/UnlimitedCustomization.css"
const UnlimitedCustomization = () => (
    <>
        <div className="UC__content">
            <UCTitleText />
            <div className="wrap__uc">
                <UCUlText />
                <UCButton />
            </div>            
        </div>
    </>
)

export default UnlimitedCustomization;