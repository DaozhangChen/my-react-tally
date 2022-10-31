import BottomNav from "../components/BottomNav";
import React from "react";
import styled from "styled-components";

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
const Title=styled.header`
height: 50px;
  border: 1px solid red;
`
const TallyList=styled.main`
  flex-grow: 1;
  border: 1px solid blue;
  overflow: auto;
`

const Detail=()=>{
    return(
        <Wrapper>
            <Title >写点东西</Title>
            <TallyList >哈</TallyList>
            <BottomNav />
        </Wrapper>
    )
}

export default Detail