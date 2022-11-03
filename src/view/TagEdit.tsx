import styled from "styled-components";
import Icon from "../components/Icon";
import {useEffect, useState} from "react";
import {Records} from "../hooks/useRecords";
import {useParams} from "react-router-dom";
import {type} from "os";
import {initData} from "./TallyPage";

const Wrapper=styled.div`
  width: 100vw;
    height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header=styled.header`
    border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  .text{
    margin-top: 10px;
  }
  .back{
    position: absolute;
    top: 25.15px;
    left: 25.15px;
  }
  
`
const Main=styled.main`
  border: 1px solid blue;  
  flex-grow: 1;
  overflow: auto;
  li{
    padding: 15px 0;
    margin: 0 10px;
    border-bottom: 1px solid gray;
    span:first-child{
      margin: 0 10px;
      color:gray;
    }
  }
`
const Footer=styled.footer`
    border: 1px solid green;
  button{
    width: 50%;
    border-top:1px solid gray;
    border-right:none ;
    border-bottom:none ;
    border-left:none ;
    background: inherit;
    padding: 12px 0;
    font-size: 18px;
  }
`
const TagEdit=()=>{
    const [allBill,setAllBill]=useState<Records[]>([])
    const [needData,setNeedData]=useState<Records>({
        category: '收入',
        tagIds: 0,
        tag: {name: '', value: ''},
        amount: '0',
        note: '',
        appendAt: ''
    })
    const params=useParams()
    useEffect(()=>{
        setAllBill( JSON.parse(localStorage.getItem('bills')!))
    },[])
    useEffect(()=>{
        setNeedData(allBill.filter(bill => bill.tagIds.toString() === params.id)[0])
    },[allBill])
    useEffect(()=>{
        console.log(needData)
    },[needData])
    const onChange=(obj:Partial<Records>)=>{
        setNeedData(()=>({
            ...needData,
            ...obj
        }))
    }
    return(
        <Wrapper>
            <Header>
                <Icon name={needData?.tag.name}/>
                <span className='text'>{needData?.tag.value}</span>
                <span className='back' onClick={()=>window.history.back()}>
                <Icon name='back'></Icon>
                </span>
            </Header>
            <Main>
                <ul>
                    <li>
                        <span>类型</span>
                        <select value={needData?.category} onChange={e=> onChange({category:(e.target.value as '收入'|'支出')})}>
                            <option value='支出'>支出</option>
                            <option value='收入'>收入</option>
                        </select>
                    </li>
                    <li>
                        <span>金额</span>
                        <input value={needData?.amount||''}
                               onChange={e=>onChange({amount:e.target.value})}/>
                    </li>
                    <li>
                        <span>日期</span>
                        <span>
                            {/*<select>*/}
                            {/*    */}
                            {/*</select>*/}
                            {/*年*/}
                            {/*<select>*/}
                            {/*    */}
                            {/*</select>*/}
                            {/*月*/}
                            {/*<select>*/}
                            {/*    */}
                            {/*</select>*/}
                            {/*日*/}
                        </span>
                    </li>
                    <li>
                        <span>备注</span>
                        <input value={needData?.note||''}
                        onChange={e=>onChange({note:e.target.value})}
                        />
                    </li>
                </ul>
            </Main>
            <Footer>
                <button>编辑完成</button>
                <button>删除</button>
            </Footer>
        </Wrapper>
    )
}
export default TagEdit