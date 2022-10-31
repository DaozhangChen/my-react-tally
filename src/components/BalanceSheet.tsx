import styled from "styled-components";

const Wrapper=styled.div`
 width: 100vw;
  display: flex;
  padding: 8px 0;
`
const Date=styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  h3{
    font-size: 15px;
  }
  span{
    font-size: 20px;
  }
`
const Income=styled.div`
  flex-grow:1;
  padding: 0 15px;
  h3{
    font-size: 15px;
  }
  span{
    font-size: 20px;
  }
`
const Expend=styled.div`
flex-grow:1;
  h3{
    font-size: 15px;
  }
  span{
    font-size: 20px;
  }
`

const BalanceSheet=()=>{
    return(
        <Wrapper>
            <Date>
                <h3>2022年</h3>
                <span>10月</span>
            </Date>
            <Income>
                <h3>收入</h3>
                <span>66</span>
            </Income>
            <Expend >
                <h3>支出</h3>
                <span>80</span>
            </Expend>
        </Wrapper>
    )
}

export default BalanceSheet