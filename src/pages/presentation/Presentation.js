import React from "react";
import PresFooter from "./PresFooter";
import {PresHeader} from "./PresHeader";
import {PresAbout} from "./PresAbout";

const Presentation = () => {
    return (
        <>
            <PresHeader/>
            <PresAbout/>
          <PresFooter/>
        </>
    )
}

export default Presentation