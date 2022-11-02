import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useState} from "react";
import {Records} from "../hooks/useRecords";

const Wrapper = styled.div`
  padding: 0 10px;
`
const DateBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
const List = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .text {
      flex-grow: 1;
      margin-left: 10px;
    }
  }
`
type DateAndBalance = {
    date: string,
    balance: number
}
const TallyList = () => {
    const [bills, setBills] = useState<Records[]>([])
    const [times, setTimes] = useState<string[]>([])
    const [oneDate, setOneDate] = useState<string[]>([])
    const [balance, setBalance] = useState<DateAndBalance[]>([])
    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('bills') || '[]'))
    }, [])
    useEffect(() => {
        bills?.forEach(item => {
                let betterTime = item.appendAt.substring(0, 10)
                setTimes((time) => {
                    return [...time, betterTime]
                })
            }
        )
    }, [bills])
    useEffect(() => {
        console.log(times)
        const noRepeatArray = Array.from(new Set(times))
        setOneDate(noRepeatArray)
    }, [times])
    useEffect(() => {
        // const balanceValue=oneDate.map(date =>
        //     bills.filter(bill => bill.appendAt.substring(0, 10) === date)?.
        //     reduce((previousValue, currentValue:Records)=>{
        //             if (previousValue===undefined){return }
        //             if (currentValue.category==='支出'){
        //                return  previousValue - parseFloat(currentValue.amount)
        //             }else if (currentValue.category==='收入'){
        //                 return  previousValue + parseFloat(currentValue.amount)
        //             }
        //         },0 as number|undefined)
        // )
        // setBalance(balanceValue)
    }, [oneDate])


    return (
        <Wrapper>
            {
                oneDate.map(date => {
                        return <div key={date}>
                            <DateBar>
                                <span>{date}</span>
                                <span>支出：￥7000</span>
                            </DateBar>
                            {
                                bills.filter(bill => bill.appendAt.substring(0, 10) === date)
                                    .map(newBill =>
                                        <List key={newBill.tagIds}>
                                            <ul>
                                                <li>
                                                    <Icon name={newBill.tag.name}/>
                                                    <span className='text'>{newBill.tag.value}</span>
                                                    <span>{newBill.amount}</span>
                                                </li>
                                            </ul>
                                        </List>
                                    )
                            }
                        </div>
                    }
                )
            }
        </Wrapper>
    )
}

export default TallyList