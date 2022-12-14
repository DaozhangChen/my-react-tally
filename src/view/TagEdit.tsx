import styled from "styled-components";
import Icon from "../components/Icon";
import { useEffect, useRef, useState } from "react";
import { Records } from "../hooks/useRecords";
import { useNavigate, useParams } from "react-router-dom";
import computationTime from "../helper/computationTime";
import { onChangTime } from "../helper/onChangeTime";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Header = styled.header`
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
    width: 75vw;
  }
`
const Footer = styled.footer`
  button:first-child{
    border-right: 1px solid gray;
  }
  button:nth-child(2){
    border-right:none ;
  }
  button {
    width: 50%;
    border-top: 1px solid gray;
    
    border-bottom: none;
    border-left: none;
    background: inherit;
    padding: 12px 0;
    font-size: 18px;
    
  }
`
const NoTagPage = styled.div`
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
  const navigate = useNavigate()
  const [allBill, setAllBill] = useState<Records[]>([])
  const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [timeArray, setTimeArray] = useState<timeArray>()
  const [needData, setNeedData] = useState<Records>()
  const hasError = useRef(false)
  const isItExist = useRef(true)
  const isOnce = useRef(true)

  useEffect(() => {
    setAllBill(JSON.parse(localStorage.getItem('bills')!))
  }, [])

  useEffect(() => {
    if (isOnce.current) {
      isOnce.current = false
      return
    }
    if (allBill.filter(bill => bill.tagIds.toString() === params.id)[0] === undefined) {
      isItExist.current = false
    }
    setNeedData(allBill.filter(bill => bill.tagIds.toString() === params.id)[0])
  }, [allBill])

  useEffect(() => {
    const { yearArray, dateArray }: timeArray = computationTime(needData?.appendAt?.substring(0, 10))
    setTimeArray({ yearArray, dateArray })
  }, [needData])

  const onChange = (obj: Partial<Records>) => {
    if (!needData) {
      return
    }
    if (obj.amount) {
      if (obj.amount.indexOf('.') !== -1 && obj.amount !== '.' && obj.amount.indexOf('.') === obj.amount.lastIndexOf('.')) {
        obj = { amount: obj.amount }
        if (obj.amount!.length >= obj.amount!.indexOf('.') + 2 && obj.amount!.length < obj.amount!.indexOf('.') + 3) {
          obj = { amount: parseFloat(obj.amount!).toString() }
        } else if (obj.amount!.length > obj.amount!.indexOf('.') + 3) {
          window.alert('????????????????????????')
          obj = { amount: obj.amount!.substring(0, obj.amount!.indexOf('.') + 3) }
        }
      } else if (obj.amount === '.') {
        window.alert('??????????????????????????????')
        obj = { amount: '0' }
      } else {
        obj = { amount: parseInt(obj.amount).toString() }
      }
      if (obj.amount!.length > 13) {
        window.alert('????????????????????????13???')
        obj = { amount: '0' }
      }
      if (isNaN(parseFloat(obj.amount!))) {
        window.alert('????????????????????????')
        obj = { amount: '0' }
      }
    }
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
    if (needData.amount === '0' || needData.amount === '') {
      window.alert('???????????????????????????')
      hasError.current = true
      return;
    }
    if (!hasError.current) {
      const otherBills = allBill.filter(bill => bill.tagIds.toString() !== params.id)
      setAllBill([...otherBills, needData])
      window.alert('????????????')
      //????????????????????????allBill??????????????????
      setTimeout(() => navigate('/detail', { replace: true }), 0)

    }
  }

  const onDelete = () => {
    if (needData === undefined) {
      return
    }
    if (window.confirm('????????????????????????')) {
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

  const clickBack = () => {
    navigate('/detail', { replace: true })
  }
  return (
    <Wrapper>
      {isItExist.current ?
        <>
          <Header>
            <Icon name={needData?.tag.name} />
            <span className='text'>{needData?.tag.value}</span>
            <span className='back' onClick={() => window.history.back()}>
              <Icon name='back'></Icon>
            </span>
          </Header>
          <Main>
            <ul>
              <li>
                <span>??????</span>
                <select value={needData?.category}
                  onChange={e => onChange({ category: (e.target.value as '??????' | '??????') })}
                  className='categorySelect'
                >
                  <option value='??????'>??????</option>
                  <option value='??????'>??????</option>
                </select>
              </li>
              <li>
                <span>??????</span>
                <input value={needData?.amount || ''}
                  onChange={e => onChange({ amount: e.target.value })}
                  className='setAmount'
                />
              </li>
              <li className='setTime'>
                <span>??????</span>
                <span>
                  <select value={needData?.appendAt.substring(0, 4)} onChange={(e) =>
                    onChange(onChangTime('year', e.target.value, { appendAt: needData?.appendAt }))}>
                    {
                      timeArray?.yearArray.map(year =>
                        <option key={year} value={year}>
                          {year}
                        </option>)
                    }
                  </select>
                  ???
                  <select value={needData?.appendAt.substring(5, 7)} onChange={(e) =>
                    onChange(onChangTime('month', (e.target.value).padStart(2, '0'), { appendAt: needData?.appendAt }))}>
                    {
                      monthArray.map(month =>
                        <option key={month} value={month.toString().padStart(2, '0')}>
                          {month}
                        </option>)
                    }
                  </select>
                  ???
                  <select size={1} value={needData?.appendAt.substring(8, 10)} onChange={(e) =>
                    onChange(onChangTime('date', (e.target.value).padStart(2, '0'), { appendAt: needData?.appendAt }))}>
                    {
                      timeArray?.dateArray.map(date =>
                        <option key={date} value={date.toString().padStart(2, '0')}>
                          {date}
                        </option>)
                    }
                  </select>
                  ???
                </span>
              </li>
              <li>
                <span>??????</span>
                <input value={needData?.note || ''}
                  onChange={e => onChange({ note: e.target.value })}
                  className='setNote'
                />
              </li>
            </ul>
          </Main>
          <Footer>
            <button onClick={onSubmit}>????????????</button>
            <button onClick={onDelete}>??????</button>
          </Footer>
        </>
        : <NoTagPage>
          <h1>??????????????????</h1>
          <button onClick={clickBack}>????????????</button>
        </NoTagPage>
      }

    </Wrapper>
  )
}
export default TagEdit