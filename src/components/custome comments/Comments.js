import React from "react";
import AuthorImage from "../../img/author image.svg"

const Comments = () => (
    <div className="comments">
        <div className="autor">
            <div className="autor__icon">
                <img src={AuthorImage} alt="AuthorImage" className="utor__img" />
            </div>
            <div className="comments__name">
                <h1 className="comments__title_h1">Sourabh B.</h1>
                <h2 className="comments__title_h2">Co Founder of Mew</h2>
            </div>
        </div>
        <div className="comments__contetn">
            <p className="comments__text">Great Team with great experience, i would reguler recommended to<br />
             all that you will get better support by working with this awesome<br />
              team and their expert members :)</p>
        </div>
    </div>
);

export default Comments;