import React, { useState, useEffect } from "react";
import Icon from "../icon/Icon";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../icon/IconeFile";

const FlashMessage = ({ message, type }) => {
    const [colorClass, setColorClass] = useState("");
    const [textClass, setTextClass] = useState("");
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        // Update the state based on the type prop
        switch (type) {
            case "success":
                setColorClass("green");
                setTextClass("green-t");
                setIcon(<Icon icon={SuccessIcon} />);
                break;
            case "info":
                setColorClass("blue");
                setTextClass("blue-t");
                setIcon(<Icon icon={InfoIcon} />);
                break;
            case "warning":
                setColorClass("orange");
                setTextClass("orange-t");
                setIcon(<Icon icon={WarningIcon} />);
                break;
            case "error":
                setColorClass("red");
                setTextClass("red-t");
                setIcon(<Icon icon={ErrorIcon} />);
                break;
            default:
                break;
        }
    }, [type])

    return (
        <div className={`flash-message-container`}>
            <div className={`flash-message flex items-center justify-center shadow-2xl flex-col`}>
                <div className={`flex items-center justify-center space-x-1 px-5 ${textClass}`}>
                    {icon && <div>{icon}</div>}
                    <p>{message}</p>
                </div>
                <div className={`${colorClass} color-under-flash`}></div>
            </div>
        </div>
    );
};

export default FlashMessage;
