import React from "react"
import Book from "../../../img/Book.svg"
import ButtonSignUp from "../ButtonSignUp";

const TableStudent = () => (
    <div className="table__student pricing__table__all">
        <div className="icon__table__wrapper">
            <img src={Book} alt="Book" className="book__icon" />
        </div>
        <div className="table__content__price">
            <h3 className="table__content__h3">Student</h3>
            <div className="content__price">
                <h5 className="table__content__h5 currency">$</h5>
                <h4 className="table__content__h4">39</h4>
                <h5 className="table__content__h5 period">/mo</h5>
            </div>
            <p className="table__content__text">
                6 GB storage<br /> Fast Brandwidht
            </p>
            <p className="table__content__text inactive__features">
                Responsive<br /> Customization
            </p>
            <ButtonSignUp />
        </div>
    </div>    
);

export default TableStudent;