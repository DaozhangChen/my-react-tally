import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useState} from "react";
import { incomeIcon } from "../base_icon_value/incomeIcon";
import { expendIcon } from "../base_icon_value/expendIcon";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
padding: 10px 10px;
`
const List = styled.div`
    ul{
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;
        margin-bottom: 15px;

        > span {
          margin-top: 5px;
        }
      }
      .selected{
        color: red;
        fill: red;
      }
    }
`
type Props = {
    value: { name: string, value: string },
    onChange: (tag: { name: string, value: string }) => void
    category: '收入' | '支出'
}
const MainList = (props: Props) => {
    const navigate = useNavigate()
    const [addBills,setAddBills]=useState([])
    useEffect(()=>{
        if (localStorage.getItem('addBills')){
            setAddBills( JSON.parse(localStorage.getItem('addBills')!))
        }else{
            setAddBills([])
        }
    },[])
    useEffect(()=>{
        setTagList([...tagList,...addBills])
    },[addBills])
    const [tagList,setTagList] = useState([...incomeIcon, ...expendIcon, ...addBills])
    const [select, setSelect] = useState('')
    const onClick = (name: string, value: string) => {
        setSelect(name)
        props.onChange({ name, value })
    }
    return (
        <Wrapper>
            <List>
                <ul>
                    {tagList.filter(item => item.category === props.category)
                        .map(tag =>
                            <li key={tag.name} onClick={() => onClick(tag.name, tag.value)} className={tag.name === select ? 'selected' : ''}>
                                <Icon name={tag.name} />
                                <span>{tag.value}</span>
                            </li>
                        )
                    }
                    {
                        props.category === '支出'
                            ?
                            <li onClick={() => navigate('/tagAdd')}>
                                <Icon name='add' />
                                <span>添加</span>
                            </li>
                            : null
                    }
                </ul>
            </List>
        </Wrapper>
    )
}
export default MainList