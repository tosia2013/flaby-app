import React from "react"
import Bag from "../../../img/bag__icon.svg"
import ButtonSignUp from "../ButtonSignUp";

const TableProfessional = () => (
    <div className="table__professional pricing__table__all">
        <div className="icon__table__wrapper">
            <img src={Bag} alt="Bag" className="bag__icon" />
        </div>
        <div className="table__content__price">
            <h3 className="table__content__h3">Professional</h3>
            <div className="content__price">
                <h5 className="table__content__h5 currency">$</h5>
                <h4 className="table__content__h4">59</h4>
                <h5 className="table__content__h5 period">/mo</h5>
            </div>
            <p className="table__content__text">
                6 GB storage<br /> Fast Brandwidht<br /> Responsive
            </p>
            <p className="table__content__text inactive__features">Customization</p>
            <ButtonSignUp />
        </div>
    </div>    
);

export default TableProfessional;