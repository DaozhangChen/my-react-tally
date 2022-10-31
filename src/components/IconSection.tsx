import MainList from "./MainList";
import styled from "styled-components";

const IconListWrapper=styled.div`
    min-height: 500px;
    overflow: auto;
`
const IconSection=()=>{
    return(
        <IconListWrapper>
            <MainList />
        </IconListWrapper>
    )
}

export default IconSection