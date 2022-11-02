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
    amount: number,
    category: "收入" | "支出"
}
type BetterDate={
    date:string,
    balance:number
}
const TallyList = () => {
    const [bills, setBills] = useState<Records[]>([])
    const [times, setTimes] = useState<DateAndBalance[]>([])
    const [betterBalance, setBetterBalance] = useState<BetterDate[]>([])
    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('bills') || '[]'))
    }, [])
    useEffect(() => {
        bills?.forEach(item => {
                let betterTime = item.appendAt.substring(0, 10)
                let betterAmount=parseFloat(item.amount)
                let dateAndAmount={date:betterTime,amount:betterAmount,category:item.category}
                setTimes((value) => {
                    return [...value, dateAndAmount]
                })
            }
        )
    }, [bills])
    useEffect(() => {
        const lastData=times.reduce((oldValue:BetterDate[],newValue:DateAndBalance)=>{
            const findData=oldValue.find((arr)=>arr.date===newValue.date)
            if (findData){
                if (newValue.category==='支出'){
                    findData.balance=findData.balance - newValue.amount
                    return oldValue
                }else{
                    findData.balance=findData.balance + newValue.amount
                    return oldValue
                }
            }else{
                return [...oldValue,{balance:newValue.amount,date:newValue.date}]
            }
        },[] as BetterDate[])
        setBetterBalance(lastData)
    }, [times])


    return (
        <Wrapper>
            {
                betterBalance.map(bar => {
                        return <div key={bar.date}>
                            <DateBar>
                                <span>{bar.date}</span>
                                <span>总支出：{bar.balance}</span>
                            </DateBar>
                            {
                                bills.filter(bill => bill.appendAt.substring(0, 10) === bar.date)
                                    .map(newBill =>
                                        <List key={newBill.tagIds}>
                                            <ul>
                                                <li>
                                                    <Icon name={newBill.tag.name}/>
                                                    <span className='text'>{newBill.tag.value}</span>
                                                    <span>{newBill.category==='支出'
                                                        ? `-${newBill.amount}`
                                                        :`+${newBill.amount}`}
                                                    </span>
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