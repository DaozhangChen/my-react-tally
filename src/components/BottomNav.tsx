import {NavLink} from "react-router-dom";
import React from "react";

const BottomNav=()=>{
    return(
        <div>
            <NavLink to="/detail">Detail</NavLink>
            <NavLink to="/tallyPage">TallyPage</NavLink>
            <NavLink to="/analysis">Analysis</NavLink>
        </div>
    )
}

export default BottomNav