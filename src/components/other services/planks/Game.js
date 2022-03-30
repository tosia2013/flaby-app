import React from "react";
import СontrollerIcon from "../../../img/controller__icon.svg"

const Game = () => (
    <div className="planks__content game__content">
        <div className="game__icon">
            <img src={СontrollerIcon} alt="Сontroller" className="icon__controller" />
        </div>
        <div className="game__content">
            <h3 className="plank__title game__title">Game Design</h3>
            <p className="plank__text">There are many variations of passages<br /> of Lorem Ipsum available, but the<br /> majorityalteration in some form with<br /> design</p>
        </div>
    </div>
);

export default Game;