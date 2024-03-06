import React from "react";
import {PresHeader} from "./PresHeader";
import {PresAbout} from "./PresAbout";
import {PresHome} from "./PresHome";
const Presentation = () => {
    return (
        <div className="presentation">
            <PresHeader/>
            <PresHome/>
            <PresAbout/>
        </div>
    )
}

export default Presentation