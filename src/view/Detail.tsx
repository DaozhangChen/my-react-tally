import BottomNav from "../components/BottomNav";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import LogoAndSheet from "../components/LogoAndSheet";
import TallyList from "../components/TallyList";
import {Records} from "../hooks/useRecords";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
const Header = styled.header`
`
const TallyListWrapper = styled.main`
  flex-grow: 1;
  overflow: auto;
`

export type DateAndBalance = {
    date: string,
    amount: number,
    category: "收入" | "支出"
}
export type BetterDate = {
    date: string,
    balance: number
}
export type Selected = {
    year: number,
    month: number
}

const Detail = () => {
    const [bills, setBills] = useState<Records[]>([])
    const [times, setTimes] = useState<DateAndBalance[]>([])
    const [betterBalance, setBetterBalance] = useState<BetterDate[]>([])
    const [selected, setSelected] = useState<Selected>({
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth() + 1
    })
    useEffect(() => {
        setBills(JSON.parse(localStorage.getItem('bills') || '[]'))
    }, [])
    useEffect(() => {
        bills?.forEach(item => {
                let betterTime = item.appendAt.substring(0, 10)
                let betterAmount = parseFloat(item.amount)
                let dateAndAmount = {date: betterTime, amount: betterAmount, category: item.category}
                setTimes((value) => {
                    return [...value, dateAndAmount]
                })
            }
        )
    }, [bills])
    useEffect(() => {
        const lastData = times.reduce((oldValue: BetterDate[], newValue: DateAndBalance) => {
            const findData = oldValue.find((arr) => arr.date === newValue.date)
            if (findData) {
                if (newValue.category === '支出') {
                    findData.balance -= newValue.amount
                    return oldValue
                } else {
                    findData.balance += newValue.amount
                    return oldValue
                }
            } else {
                return [...oldValue, {balance: newValue.amount, date: newValue.date}]
            }
        }, [] as BetterDate[])
        setBetterBalance(lastData)
    }, [times])
    useEffect(() => {
        console.log(selected)
    }, [selected])
    return (
        <Wrapper>
            <Header>
                <LogoAndSheet selected={selected}
                              setSelected={setSelected}
                              bills={bills}
                />
            </Header>
            <TallyListWrapper>
                <TallyList
                    dateAndBalance={betterBalance}
                    bills={bills}
                    selectValue={selected}
                />
            </TallyListWrapper>
            <BottomNav/>
        </Wrapper>
    )
}

export default Detail