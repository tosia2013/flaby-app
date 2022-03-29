import React from "react";
import Development from "./development";
import Photography from "./photography";
import VectorArtist from "./vector";
import ServisecTitle from "./servises__titel";
import "../../style/services/services.css"

const Services = () => (
    <>
    <div className="servisec__all">
        <ServisecTitle />
            <div className="servisec__content">
                <Development />
                <Photography />
                <VectorArtist />
            </div>
    </div>        
    </>
)

export default Services;