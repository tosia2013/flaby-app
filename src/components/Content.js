import React from "react";
import Services from "./services/Services";
import UnlimitedCustomization from "./unlimited customization/UnlimitedCustomization";
import OtherServices from "./other services/OtherServices";
import CustomeComments from "./custome comments/CustomeComments";
import GreatResourse from "./great resourse/GreatResourse";
import PricingTable from "./pricing table/PricingTable";

const Content = () =>(
    <>
        <div>
            <Services />
            <UnlimitedCustomization />
            <OtherServices />
            <CustomeComments />
            <GreatResourse />
            <PricingTable />
        </div>
    </>    
);

export default Content;