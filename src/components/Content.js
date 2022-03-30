import React from "react";
import Services from "./services/Services";
import UnlimitedCustomization from "./unlimited customization/UnlimitedCustomization";
import OtherServices from "./other services/OtherServices";

const Content = () =>(
    <>
        <div>
            <Services />
            <UnlimitedCustomization />
            <OtherServices />
        </div>
    </>    
);

export default Content;