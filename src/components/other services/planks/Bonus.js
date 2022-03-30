import React from "react";
import GiftIcon from "../../../img/gift__icon.svg"

const Bonus = () => (
    <div className="planks__content bonus__planks__content">
        <div className="bonus__icon">
            <img src={GiftIcon} alt="Gift" className="icon__gift" />
        </div>
        <div className="bonus__content">
            <h3 className="plank__title bonus__plank__title">Bonus Download</h3>
            <p className="plank__text bonus__plank__text">There are many variations of passages<br /> of Lorem Ipsum available, but the<br /> majorityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default Bonus;