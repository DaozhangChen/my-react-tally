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
const NoteSection=()=>{
    return(
        <Note>
            <Icon name='note'/>
            <span>备注：</span>
            <input type='text' placeholder='写点备注吧~'/>
        </Note>
    )
}
export default NoteSection