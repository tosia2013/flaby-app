import React from "react";
import Comments from "./Comments"
import PreviousNextButton from "./PreviousNextButton";
import "../../style/CustomeComments.css"

const CustomeComments = () => (
    <>
        <div className="CustomeComments">
            <div className="comments__title">
                <h2 className="comments__title__h2">Get know About</h2>
                <h1 className="comments__title__h1">what customer say</h1>
                <div className="comments__title__dividor"></div>
            </div>
            <Comments />
            <PreviousNextButton />  
        </div>              
    </>
);

export default CustomeComments;