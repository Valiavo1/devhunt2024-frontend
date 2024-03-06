import React from "react";
import {PresHeader} from "./PresHeader";
import {PresAbout} from "./PresAbout";
import PresFooter from "./PresFooter";
import {PresHome} from "./PresHome";
const Presentation = () => {
    return (
        <div className="presentation">
            <PresHeader className="fixed"/>
            <PresHome/>
            <PresAbout/>
            <PresFooter/>
        </div>
    )
}

export default Presentation