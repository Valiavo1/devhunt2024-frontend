import React from "react";
import {PresHeader} from "./PresHeader";
import {PresAbout} from "./PresAbout";
const Presentation = () => {
    return (
        <div className="presentation">
            <PresHeader/>
            <PresHome/>
            <PresAbout/>
          <PresFooter/>
        </div>
    )
}

export default Presentation