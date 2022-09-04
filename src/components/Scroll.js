import React from "react";

const Scroll = (props) => {
    // you can resize the robot scroll here, change height
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '850px'}}> 
        {props.children}
        </div>
    );
};

export default Scroll;
