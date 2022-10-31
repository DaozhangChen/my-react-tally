import styled from "styled-components";

const HeadNav=styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
    ul{
      display: flex;
      li{
        font-size: 23px;
        padding: 15px 20px;
        border-bottom:1px solid black;
      }
    }
    button{
      position: absolute;
      right: 20px;
      background: inherit;
      border: none;
      padding: 15px 0;
    }
`
const TagSection=()=>{
    return(
        <HeadNav>
            <ul onClick={(e)=>console.log(e.target)}>
                <li>支出</li>
                <li>收入</li>
            </ul>
            <button>取消</button>
        </HeadNav>
    )
}

export default TagSection