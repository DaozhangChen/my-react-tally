import BottomNav from "../components/BottomNav";
import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import TallyList from "../components/TallyList";

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
const Header=styled.header`
`
const TallyListWrapper=styled.main`
  flex-grow: 1;
  overflow: auto;
`

const Detail=()=>{
    return(
        <Wrapper>
            <Header>
                <Logo />
            </Header>
            <TallyListWrapper>
             <TallyList />
            </TallyListWrapper>
            <BottomNav />
        </Wrapper>
    )
}

export default Detail