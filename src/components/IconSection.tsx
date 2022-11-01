import MainList from "./MainList";
import styled from "styled-components";

const IconListWrapper=styled.div`
    min-height: 500px;
    overflow: auto;
`
type Props={
    value:{name:string,value:string},
    onChange:(tag:{name:string,value:string})=>void
}
const IconSection=(props:Props)=>{
    return(
        <IconListWrapper>
            <MainList value={props.value}
                      onChange={props.onChange}
            />
        </IconListWrapper>
    )
}

export default IconSection