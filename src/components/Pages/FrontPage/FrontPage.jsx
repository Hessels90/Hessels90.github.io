import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const FrontPage = () => {
    return (
        <div style={{ width: "100vw", margin: "25px"}}>
            <FontAwesomeIcon icon={faFutbol} className="fa-primary" style={{ color: "black", justifyContent: "center", alignItems: "center", display: "flex", width: "100vw", height: "20%"}} />
            <h2>
                Velkommen til null-spretten. Jeg tar gjerne imot input for ideer og funksjonalitet som jeg kan legge til.
        </h2>
        </div>
    )
}

export default FrontPage;
