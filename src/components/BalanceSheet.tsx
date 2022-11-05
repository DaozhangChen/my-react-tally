import styled from "styled-components";
import {useEffect, useState} from "react";
import {BetterDate, Selected} from "../view/Detail";
import SelectTime from "./SelectTime";
import {Records} from "../hooks/useRecords";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  padding: 8px 0;
`
const DateWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  select{
    border: none;
    outline: none;
    background: inherit;
  }
  .selectYear {
    font-size: 15px;
   
  }
  .selectMonth {
    font-size: 20px;
    appearance:none;
  }
`
const Balance=styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-shrink: 1;
`
const Income = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  h3 {
    font-size: 15px;
  }

  span{
    width: 31vw;
    font-size: 20px;
    display: inline-block;
    overflow: scroll;
  }
`
const Expend = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  h3 {
    font-size: 15px;
  }
  span {
    width: 31vw;
    font-size: 20px;
    overflow: scroll;
  }
`
type Props = {
    selected: Selected
    setSelected: (obj: Selected) => void
    bills:Records[],
}
type IncomeAndExpend={
    income:number
    expend:number
}
const BalanceSheet = (props: Props) => {
    const [allYear, setAllYear] = useState<number[]>([])
    const allMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [balance,setBalance]=useState<IncomeAndExpend>({
        income:0,
        expend:0
    })
    const {selected, setSelected,bills} = props
    useEffect(() => {
        let beforeFiveYear = selected.year - 5
        for (let i = 0; i < 10; i++) {
            let cycleYear = beforeFiveYear++
            setAllYear(allYears =>
                [...allYears, cycleYear]
            )
        }
    }, [])

    useEffect(() => {
      setBalance(
        bills.filter(item=>
            item.appendAt.substring(0,4)===selected.year.toString()
            &&item.appendAt.substring(5,7)===selected.month.toString())
            .reduce((init:IncomeAndExpend,newValue:Records)=>{
                if (newValue.category==='收入'){
                    init.income+=parseFloat(newValue.amount)
                    return init
                }else{
                    init.expend+=parseFloat(newValue.amount)
                    return init
                }
            },({income:0,expend:0}))
        )
    }, [selected,bills])
    return (
        <Wrapper>
            <DateWrapper>
                <SelectTime name='selectYear'
                            value={selected.year}
                            onChange={e=>setSelected({
                                ...selected,
                                year: parseInt(e.target.value)
                            })}
                            array={allYear} />
                <SelectTime name='selectMonth'
                            value={selected.month}
                            onChange={e=>setSelected({
                                ...selected,
                                month: parseInt(e.target.value)
                            })}
                            array={allMonth} />
            </DateWrapper>
            <Balance >
            <Income>
                <h3>收入</h3>
                <span >{balance.income}</span>
            </Income>
            <Expend>
                <h3>支出</h3>
                <span>{balance.expend}</span>
            </Expend>
            </Balance>
        </Wrapper>
    )
}

export default BalanceSheet