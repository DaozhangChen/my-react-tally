import styled from "styled-components";
import Icon from "./Icon";

const Wrapper=styled.div`
padding: 10px 10px;
`
const List=styled.div`
    ul{
      display: flex;
      flex-wrap: wrap;
      
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;
        margin-bottom: 15px;
        >span{
          margin-top: 5px;
        }
      }
    }
`

const MainList=()=>{
    return(
        <Wrapper>
            <List>
                <ul>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>记账</span>
                    </li>
                    <li>
                        <Icon name='money'/>
                        <span>添加</span>
                    </li>
                </ul>
            </List>
        </Wrapper>
    )
}
export default MainList