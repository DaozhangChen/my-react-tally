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

  .selectYear {
    font-size: 15px;
    border: none;
    outline: none;
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
type Props = {
    selected: Selected
    setSelected: (obj: Selected) => void
}
const BalanceSheet = (props: Props) => {
    const [allYear, setAllYear] = useState<number[]>([])
    const allMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const {selected, setSelected} = props
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
        console.log(allYear)
    }, [allYear])
    return (
        <Wrapper>
            <DateWrapper>
                <select name='selectYear'
                        className='selectYear'
                        value={selected.year}
                        onChange={e => setSelected({
                            ...selected,
                            year: parseInt(e.target.value)
                        })}
                >
                    {
                        allYear.map(year =>
                            <option key={year}
                                    value={year}
                            >
                                {year + '年'}
                            </option>)
                    }
                </select>
                <select name='selectMonth'
                        value={selected.month}
                        onChange={e => setSelected({
                            ...selected,
                            month: parseInt(e.target.value)
                        })}>
                    {
                        allMonth.map(month =>
                            <option key={month}
                                    value={month}
                            >
                                {month + '月'}
                            </option>
                        )
                    }
                </select>
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