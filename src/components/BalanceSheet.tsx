import styled from "styled-components";
import {useEffect, useState} from "react";
import {Selected} from "../view/Detail";

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
  border-right: 1px solid black;

  h3 {
    font-size: 15px;
  }

  span {
    font-size: 20px;
  }
`
const Income = styled.div`
  flex-grow: 1;
  padding: 0 15px;

  h3 {
    font-size: 15px;
  }

  span {
    font-size: 20px;
  }
`
const Expend = styled.div`
  flex-grow: 1;

  h3 {
    font-size: 15px;
  }

  span {
    font-size: 20px;
  }
`
type Props={
    selected:Selected
    setSelected:(obj:Selected)=>void
}
const BalanceSheet = (props:Props) => {
    const [allYear, setAllYear] = useState<number[]>([])
    const {selected,setSelected}=props
    const currentYear = new Date().getFullYear()
    useEffect(() => {
        let beforeFiveYear = currentYear - 5
        for (let i = 0; i < 10; i++) {
           let cycleYear=beforeFiveYear++
            setAllYear(allYears =>
                [...allYears, cycleYear]
            )
        }
    }, [])
    useEffect(()=>{
        console.log(allYear)
    },[allYear])
    return (
        <Wrapper>
            <DateWrapper>
                <h3>
                    <select name='selectYear'
                            value={selected.year}
                            onChange={e=>setSelected({
                                ...selected,
                                year:parseInt(e.target.value)
                            })}
                    >
                        {
                            allYear.map(year=><option key={year}
                                                      value={year}
                            >
                                {year+'年'}
                            </option>)
                        }
                    </select>
                </h3>
                <span>10月</span>
            </DateWrapper>
            <Income>
                <h3>收入</h3>
                <span>66</span>
            </Income>
            <Expend>
                <h3>支出</h3>
                <span>80</span>
            </Expend>
        </Wrapper>
    )
}

export default BalanceSheet