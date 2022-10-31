import styled from "styled-components";
import MainList from "../components/MainList";
import Icon from "../components/Icon";
import Calculator from "../components/Calculator";

const Wrapper=styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
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
const IconListWrapper=styled.div`
    min-height: 500px;
    overflow: auto;
`
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
const CalculatorWrapper=styled.div`
  flex-grow: 1;
  
`
const TallyPage=()=>{
    return(
        <Wrapper>
            <HeadNav>
                <ul>
                    <li>支出</li>
                    <li>收入</li>
                </ul>
                <button>取消</button>
            </HeadNav>
            <IconListWrapper>
                <MainList />
            </IconListWrapper>
            <Note>
                <Icon name='note'/>
                <span>备注：</span>
                <input type='text' placeholder='写点备注吧~'/>
            </Note>
            <CalculatorWrapper>
            <Calculator />
            </CalculatorWrapper>
        </Wrapper>
    )
}

export default TallyPage