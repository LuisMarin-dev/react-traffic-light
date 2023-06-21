import React, { useState } from "react";

const Light = () => {
    const [state_r, setState_r] = useState("off");
    const [state_y, setState_y] = useState("off");
    const [state_g, setState_g] = useState("off");

    const redClicked = () => {
        if (state_r == "off"){
            setState_r("lit");
            setState_y("off");
            setState_g("off");
        } else {
            setState_r("off")
        }
    };
    const yellowClicked = () => {
        if (state_y == "off"){
            setState_r("off");
            setState_y("lit");
            setState_g("off");
        } else {
            setState_y("off")
        }
    };
    const greenClicked = () => {
        if (state_g == "off"){
            setState_r("off");
            setState_y("off");
            setState_g("lit");
        } else {
            setState_g("off")
        }
    };

    return(
        <div className="container-fluid">
            <div className="traffic-light">
                <div className={`red light, ${state_r}`} onClick={redClicked}></div>
                <div className={`yellow light, ${state_y}`} onClick={yellowClicked}></div>
                <div className={`green light, ${state_g}`} onClick={greenClicked}></div>
            </div>
        </div>
    )
}

export default Light;
