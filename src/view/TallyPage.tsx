import styled from "styled-components";
import TagSection from "../components/TagSection";
import IconSection from "../components/IconSection";
import NoteSection from "../components/NoteSection";
import InputSection from "../components/InputSection";

const Wrapper=styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`


const TallyPage=()=>{
    return(
        <Wrapper>
            <TagSection />
            <IconSection />
            <NoteSection />
            <InputSection/>
        </Wrapper>
    )
}

export default TallyPage