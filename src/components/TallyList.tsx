import styled from "styled-components";
import Icon from "./Icon";

const Wrapper=styled.div`
padding: 0 10px;
`
const DateBar=styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
const List=styled.div`
  li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .text{
      flex-grow: 1;
      margin-left:10px ;
    }
  }
`

const TallyList=()=>{
    return(
        <Wrapper>
          <DateBar>
              <span>时间 星期一</span>
              <span>支出：￥7000</span>
          </DateBar>
          <List>
              <ul>
                  <li>
                      <Icon name='tally'/>
                      <span className='text'>餐饮</span>
                      <span>-66</span>
                  </li>
              </ul>
          </List>
        </Wrapper>
    )
}

export default TallyList