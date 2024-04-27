import React from "react";
import '../App.css';

const Message = ({ type, text }) => {
    if (!type || !text) return null;
    return (
        <div id={`message-${type}`} className={`message ${type}`}>
            <span>{text}</span>
        </div>
    );
};

export default Message;