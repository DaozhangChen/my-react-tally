import styled from "styled-components";
import Icon from "../components/Icon";

const Wrapper=styled.div`
height: 100vh;
`
const Header=styled.header`
    display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
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
`
const Main=styled.main`
`
const ListSection=styled.section`
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
                <span>选中标签：{<Icon name='money' />}</span>
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
                </ul>
                </ListSection>
            </Main>
        </Wrapper>
    )
}

export default TagAdd