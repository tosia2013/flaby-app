import React from "react";
import Services from "./services/Services";
import UnlimitedCustomization from "./unlimited customization/UnlimitedCustomization";
import OtherServices from "./other services/OtherServices";
import CustomeComments from "./custome comments/CustomeComments";
import GreatResourse from "./great resourse/GreatResourse";

const Content = () =>(
    <>
        <div>
            <Services />
            <UnlimitedCustomization />
            <OtherServices />
            <CustomeComments />
            <GreatResourse />
        </div>
    </>    
);

export default Content;