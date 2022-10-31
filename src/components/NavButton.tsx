import Icon from "./Icon";
import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

type Props={
    text:string,
    iconName:string
    to:string
}
const NavButton=(props:Props)=>{
    return(
        <NavLink to={props.to}>
            <Wrapper>
            <Icon name={props.iconName}/>
            <p>{props.text}</p>
            </Wrapper>
        </NavLink>
    )
}

export default NavButton