import styled from "styled-components";
import Icon from "../components/Icon";
import {useEffect, useRef, useState} from "react";
import {Records} from "../hooks/useRecords";
import {useNavigate, useParams} from "react-router-dom";
import computationTime from "../helper/computationTime";
import {onChangTime} from "../helper/onChangeTime";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header = styled.header`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  .text {
    margin-top: 10px;
  }

  .back {
    position: absolute;
    top: 25.15px;
    left: 25.15px;
  }

`
const Main = styled.main`
  border: 1px solid blue;
  flex-grow: 1;
  overflow: auto;

  .categorySelect {
    border: none;
    font-size: 16px;
    outline: none;
    background: inherit;
  }

  .setAmount {
    border: none;
    outline: none;
  }

  .setTime {
    select {
      border: none;
      appearance: none;
      font-size: 16px;
      width: auto;
      text-align: center;
      background: inherit;
      outline: none;

      &::-webkit-scrollbar {
        width: 5px;
      }

      option {
        padding-top: 50px;
      }
    }
  }

  li {
    padding: 15px 0;
    margin: 0 10px;
    border-bottom: 1px solid gray;

    span:first-child {
      margin: 0 10px;
      color: gray;
    }
  }

  .setNote {
    border: none;
    outline: none;
  }
`
const Footer = styled.footer`
  border: 1px solid green;

  button {
    width: 50%;
    border-top: 1px solid gray;
    border-right: none;
    border-bottom: none;
    border-left: none;
    background: inherit;
    padding: 12px 0;
    font-size: 18px;
  }
`
const NoTagPage=styled.div`
  flex-grow: 1;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    margin: 15px 15px;
  }
  button{
    padding: 15px 30px;
    font-size: 25px;
    border: none;
    background: none;
    color: gray;
  }
`

type timeArray = {
    yearArray: number[] | [],
    dateArray: number[] | []
}
const TagEdit = () => {
    const params = useParams()
    const navigate=useNavigate()
    const [allBill, setAllBill] = useState<Records[]>([])
    const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [timeArray, setTimeArray] = useState<timeArray>()
    const [needData, setNeedData] = useState<Records>()
    const hasError = useRef(false)
    const isItExist=useRef(true)

    useEffect(() => {
        setAllBill(JSON.parse(localStorage.getItem('bills')!))
    }, [])

    useEffect(() => {
        if (allBill.filter(bill => bill.tagIds.toString() === params.id)[0]===undefined){
            isItExist.current=false
        }
        setNeedData(allBill.filter(bill => bill.tagIds.toString() === params.id)[0])
    }, [allBill])

    useEffect(() => {
        const {yearArray, dateArray}: timeArray = computationTime(needData?.appendAt?.substring(0, 10))
        setTimeArray({yearArray, dateArray})
        console.log(needData)
    }, [needData])

    const onChange = (obj: Partial<Records>) => {
        if (!needData) {
            return
        }
        if (obj.amount) {
            console.log(obj.amount)
            if (obj.amount.indexOf('.') !== -1 && obj.amount!=='.' && obj.amount.indexOf('.')===obj.amount.lastIndexOf('.')) {
                obj = {amount: obj.amount}
                if (obj.amount!.length >= obj.amount!.indexOf('.') + 2 &&obj.amount!.length < obj.amount!.indexOf('.') + 3) {
                    obj = {amount: parseFloat(obj.amount!).toString()}
                }else if (obj.amount!.length > obj.amount!.indexOf('.') + 3){
                    window.alert('只能输入两位小数')
                    obj={amount:obj.amount!.substring(0,obj.amount!.indexOf('.') + 3)}
                }
            }else if (obj.amount==='.'){
                window.alert('不能以小数点作为开头')
                obj={amount:'0'}
            }else{
                obj = {amount: parseInt(obj.amount).toString()}
            }
            if (isNaN(parseFloat(obj.amount!))){
                window.alert('输入数字格式错误')
                obj={amount:'0'}
            }
        }
        console.log(obj.appendAt)
        setNeedData(() => ({
            ...needData,
            ...obj
        }))
    }

    const onSubmit = () => {
        hasError.current = false
        if (needData === undefined) {
            return
        }
        if (needData.amount==='0'||needData.amount==='') {
            window.alert('金额不能为零或为空')
            hasError.current = true
            return;
        }
        if (!hasError.current) {
            console.log('执行')
            const otherBills = allBill.filter(bill => bill.tagIds.toString() !== params.id)
            setAllBill([...otherBills, needData])
            window.alert('编辑成功')
            console.log(otherBills)
        }
    }

    const onDelete=()=>{
        if (needData === undefined) {
            return
        }
        if (window.confirm('你确定要删除吗？')){
            const otherBills = allBill.filter(bill => bill.tagIds.toString() !== params.id)
            setAllBill([...otherBills])
            window.location.reload()
        }
    }

    useEffect(() => {
        if (allBill === undefined || allBill.length === 0) {
            return
        }
        localStorage.setItem('bills', JSON.stringify(allBill))
    }, [allBill])

    const clickBack=()=>{
        navigate('/detail',{replace:true})
    }
    return (
        <Wrapper>
            { isItExist.current ?
            <>
            <Header>
                <Icon name={needData?.tag.name}/>
                <span className='text'>{needData?.tag.value}</span>
                <span className='back' onClick={() => window.history.back()}>
                <Icon name='back'></Icon>
                </span>
            </Header>
            <Main>
            <ul>
            <li>
            <span>类型</span>
            <select value={needData?.category}
            onChange={e => onChange({category: (e.target.value as '收入' | '支出')})}
            className='categorySelect'
            >
            <option value='支出'>支出</option>
            <option value='收入'>收入</option>
            </select>
            </li>
            <li>
            <span>金额</span>
            <input value={needData?.amount || ''}
            onChange={e => onChange({amount: e.target.value})}
            className='setAmount'
            />
            </li>
            <li className='setTime'>
            <span>日期</span>
            <span>
            <select value={needData?.appendAt.substring(0, 4)} onChange={(e) =>
            onChange(onChangTime('year', e.target.value, {appendAt: needData?.appendAt}))}>
        {
            timeArray?.yearArray.map(year =>
            <option key={year} value={year}>
        {year}
            </option>)
        }
            </select>
            年
            <select value={needData?.appendAt.substring(5, 7)} onChange={(e) =>
            onChange(onChangTime('month', (e.target.value).padStart(2, '0'), {appendAt: needData?.appendAt}))}>
        {
            monthArray.map(month =>
            <option key={month} value={month.toString().padStart(2,'0')}>
        {month}
            </option>)
        }
            </select>
            月
            <select size={1} value={needData?.appendAt.substring(8, 10)} onChange={(e) =>
            onChange(onChangTime('date', (e.target.value).padStart(2, '0'), {appendAt: needData?.appendAt}))}>
        {
            timeArray?.dateArray.map(date =>
            <option key={date} value={date.toString().padStart(2, '0')}>
        {date}
            </option>)
        }
            </select>
            日
            </span>
            </li>
            <li>
            <span>备注</span>
            <input value={needData?.note || ''}
            onChange={e => onChange({note: e.target.value})}
            className='setNote'
            />
            </li>
            </ul>
            </Main>
            <Footer>
            <button onClick={onSubmit}>编辑完成</button>
            <button onClick={onDelete}>删除</button>
            </Footer>
            </>
            :<NoTagPage>
                <h1>该标签不存在</h1>
                <button onClick={clickBack}>点击返回</button>
                </NoTagPage>
            }

        </Wrapper>
    )
}
export default TagEdit