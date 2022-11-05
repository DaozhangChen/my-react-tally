import styled from "styled-components";
import Icon from "../components/Icon";

const Wrapper=styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header=styled.header`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  .titleText{
    display: flex;
    align-items: center;
    font-size: 20px;
    .icon{
      margin-right: 10px;
    }
  }
  button{
    background: inherit;
    border: none;
    margin-right: 10px;
  }
`
const Nav=styled.nav`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid gray;
  .navIcon{
    display: flex;
    align-items: center;
  }
`
const Main=styled.main`
  flex-grow: 1;
  overflow: auto;
`
const ListSection=styled.section`
    div{
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
    }
  
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 6px 0;
    li{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 20%;
      flex-shrink: 0;
      margin: 5px 0;
      
    }
  }
`
const TagAdd=()=>{
    return(
        <Wrapper>
            <Header>
                <span className='titleText'>
                    <Icon name='back' />
                    <span>添加支出类别</span>
                </span>
                <button>完成</button>
            </Header>
            <Nav>
                <span className='navIcon'>
                    <span>选中标签：</span>
                    <Icon name='money' />
                </span>
                <span>零食</span>
            </Nav>
            <Main>
                <ListSection>
                <div>餐饮</div>
                <ul>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                    <li>
                        <Icon name='money' />
                        <span>钱</span>
                    </li>
                </ul>
                </ListSection>
            </Main>
        </Wrapper>
    )
}

export default TagAdd