import React from "react"
import PricingTableTitle from "./PricingTableTitle";
import TableStudent from "./table/TableStudent";
import TableUnLimited from "./table/TableUnLimited";
import TableProfessional from "./table/TableProfessional";
import "../../style/PricingTable.css"

const PricingTable = () => (
    <>
        <div className="pricing__table">
            <PricingTableTitle />
            <div className="tablets">
                <TableStudent />
                <TableProfessional />
                <TableUnLimited />
            </div>
        </div>        
    </>
);

export default PricingTable;