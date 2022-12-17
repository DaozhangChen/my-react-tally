import styled from "styled-components";
import Icon from "../components/Icon";
import { addIcon } from "../base_icon_value/addIcon";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
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
const Nav = styled.nav`
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
const Main = styled.main`
  flex-grow: 1;
  overflow: auto;
`
const ListSection = styled.section`
    div{
      text-align: center;
      padding: 10px 0;
      font-size: 16px;
      color: gray
    }
  
  ul{
    display: flex;
    flex-wrap: wrap;
    padding: 6px 0;
    .selected{
      color: var(--green-deep);
      fill: var(--green-deep);
    }
    li{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 20%;
      flex-shrink: 0;
      margin: 5px 0;
      span{
        margin: 5px;
      }
    }
  }
`
type addBill = {
  name: string,
  value: string,
  category: '支出'
}

const TagAdd = () => {
  const navigate = useNavigate()
  const billType = ['餐饮', '购物', '娱乐', '交通', '医疗']
  const [select, setSelect] = useState({
    name: '',
    value: '',
    category: '支出'
  })
  const [addBills, setAddBills] = useState<addBill[]>([])
  useEffect(() => {
    if (!localStorage.getItem('addBills')) {
      return
    } else {
      const allAddBills: addBill[] = JSON.parse(localStorage.getItem('addBills')!)
      setAddBills(allAddBills)
    }
  }, [])
  const onSubmit = () => {
    if (addBills.find(item => item.name === select.name)) {
      window.alert('该标签已经存在，无需再次添加')
    } else if (select.name === '' || select.value === '') {
      window.alert('该标签为空')
    } else {
      localStorage.setItem('addBills', JSON.stringify([...addBills, select]))
      setAddBills(JSON.parse(localStorage.getItem('addBills')!))
      window.alert('添加成功')
      navigate('/tallyPage',{replace:true})
    }
  }
  return (
    <Wrapper>
      <Header>
        <span className='titleText'>
          <span onClick={() => navigate('/tallyPage', { replace: true })}>
            <Icon name='back' />
          </span>
          <span>添加支出类别</span>
        </span>
        <button onClick={onSubmit}>完成</button>
      </Header>
      <Nav>
        <span className='navIcon'>
          <span>选中标签：</span>
          <Icon name={select.name} />
        </span>
        <span>{select.value}</span>
      </Nav>
      <Main>
        {
          billType.map(topType =>
            <ListSection key={topType}>
              <div>{topType}</div>
              <ul>
                {
                  addIcon.filter(tag => tag.type === topType)
                    .map(item =>
                      <li key={item.name}
                        className={select.name === item.name ? 'selected' : ''}
                        onClick={() => setSelect({
                          name: item.name,
                          value: item.value,
                          category: '支出'
                        }
                        )
                        }
                      >
                        <Icon name={item.name} />
                        <span>{item.value}</span>
                      </li>
                    )
                }
              </ul>
            </ListSection>
          )
        }
      </Main>
    </Wrapper>
  )
}

export default TagAdd