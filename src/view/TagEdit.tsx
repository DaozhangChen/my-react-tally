import styled from "styled-components";
import Icon from "../components/Icon";
import {useEffect, useState} from "react";
import {Records} from "../hooks/useRecords";
import {useParams} from "react-router-dom";
import computationTime from "../helper/computationTime";

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

  li {
    padding: 15px 0;
    margin: 0 10px;
    border-bottom: 1px solid gray;

    span:first-child {
      margin: 0 10px;
      color: gray;
    }
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
type timeArray = {
    yearArray: number[] | [],
    dateArray: number[] | []
}
const TagEdit = () => {
    const params = useParams()
    const [allBill, setAllBill] = useState<Records[]>([])
    const monthArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [timeArray, setTimeArray] = useState<timeArray>()
    const [needData, setNeedData] = useState<Records>()
    useEffect(() => {
        setAllBill(JSON.parse(localStorage.getItem('bills')!))
    }, [])
    useEffect(() => {
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
        setNeedData(() => ({
            ...needData,
            ...obj
        }))
    }
    const onChangTime = (timeType: string, value: string, state: { appendAt: string | undefined }) => {
        if (!state.appendAt) {
            return {appendAt: new Date().toISOString()}
        }
        switch (timeType) {
            case 'year':
                return {appendAt: state.appendAt.replace(/\d{4}/g, value)}
            case 'month':

                return {
                    appendAt: state.appendAt.replace(
                        /(\d{4})-(\d{2})-(\d{2})/g, `$1\-${value}\-$3`)
                }
            case 'date':
                return {
                    appendAt: state.appendAt.replace(
                        /(\d{4})-(\d{2})-(\d{2})/g, `$1\-$2\-${value}`)
                }
            default:
                throw new Error()
        }
    }
    return (
        <Wrapper>
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
                                onChange={e => onChange({category: (e.target.value as '收入' | '支出')})}>
                            <option value='支出'>支出</option>
                            <option value='收入'>收入</option>
                        </select>
                    </li>
                    <li>
                        <span>金额</span>
                        <input value={needData?.amount || ''}
                               onChange={e => onChange({amount: e.target.value})}/>
                    </li>
                    <li>
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
        <option key={month} value={month}>
            {month}
        </option>)
}
                            </select>
                            月
                            <select value={needData?.appendAt.substring(8, 10)} onChange={(e) =>
                                onChange(onChangTime('date', (e.target.value).padStart(2, '0'), {appendAt: needData?.appendAt}))}>
{
    timeArray?.dateArray.map(date =>
        <option key={date} value={date}>
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