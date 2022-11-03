import styled from "styled-components";
import Icon from "./Icon";
import {useEffect, useState} from "react";
import {Records} from "../hooks/useRecords";
import {BetterDate} from "../view/Detail";

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
type Props={
    dateAndBalance:BetterDate[],
    bills:Records[]
}
const TallyList = (props:Props) => {
    const betterBalance=props.dateAndBalance
    const bills=props.bills
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