import Icon from "./Icon";
import styled from "styled-components";
const Note=styled.div`
    display: flex;
  justify-content: start;
  align-items: center;
  height: 30px;
  .icon{
    margin: 0 5px;
  }
  input{
    height: 100%;
    border: none;
    flex-grow: 1;
    outline: none;
  }
`
type Props={
    value:string,
    onChange:(note:string)=>void
}
const NoteSection=(props:Props)=>{
    return(
        <Note>
            <Icon name='note'/>
            <span>备注：</span>
            <input type='text' placeholder='写点备注吧~' onChange={(e)=>props.onChange(e.target.value)}/>
        </Note>
    )
}
export default NoteSection