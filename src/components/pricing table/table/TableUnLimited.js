import React from "react"
import ShoppingBag from "../../../img/shopping__bag.svg"
import ButtonSignUp from "../ButtonSignUp";

const TableUnLimited = () => (
    <div className="table__student pricing__table__all">
        <div className="icon__table__wrapper">
            <img src={ShoppingBag} alt="ShoppingBag" className="shopping__bag__icon" />
        </div>
        <div className="table__content__price unlimited__content">
            <h3 className="table__content__h3 unlimited__content__h3">UnLimited</h3>
            <div className="content__price unlimited__price">
                <h5 className="table__content__h5 currency">$</h5>
                <h4 className="table__content__h4">99</h4>
                <h5 className="table__content__h5 period">/mo</h5>
            </div>
            <p className="table__content__text unlimited__content__text">
                6 GB storage<br /> Fast Brandwidht<br /> Responsive<br /> Customization
            </p>
            <ButtonSignUp />
        </div>
    </div>   
);

export default TableUnLimited;