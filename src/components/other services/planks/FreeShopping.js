import React from "react";
import CartIcon from "../../../img/Cart__icon.svg"

const FreeShopping = () => (
    <div className="planks__content shopping__content">
        <div className="shopping__icon planks__icon">
            <img src={CartIcon} alt="Cart" className="icon__card" />
        </div>
        <div className="shopping__content planks__entrails">
            <h3 className="plank__title shopping__plank__title">Free Shopping</h3>
            <p className="plank__text shopping__plank__text">There are many variations of passages<br /> of Lorem Ipsum available, but the ma-<br />jorityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default FreeShopping;