import styled from "styled-components";
import Icon from "./Icon";
import {Records} from "../hooks/useRecords";
import {BetterDate, Selected} from "../view/Detail";
import {useNavigate} from "react-router-dom";


const Wrapper = styled.div`
  padding: 0 10px;
`
const DateBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .isOut{
    color: #F84FA3;
  }
  .isIn{
    color: var(--green-deep);
  }
`
const List = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    div {
      display: flex;
      align-items: center;

      .text {
        flex-shrink: 0;
        min-width: 4em;
        margin-left: 10px;
      }
    }
    
    .note {
      max-width: 12em;
      flex-shrink: 1;
      color: gray;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 22px;
      margin-right: 30px;
    }
  }
`
type Props = {
    dateAndBalance: BetterDate[],
    bills: Records[],
    selectValue: Selected
}
const TallyList = (props: Props) => {
    const betterBalance = props.dateAndBalance
    const bills = props.bills
    const navigate = useNavigate()
    const onEditTag = (id: number) => {
        navigate(`/tagEdit/${id}`)
    }
    return (
        <Wrapper>
            {
                betterBalance.filter(date =>
                    date.date.substring(0, 4) === props.selectValue.year.toString()
                    && date.date.substring(5, 7) === props.selectValue.month.toString())
                    .map(bar => {
                            return <div key={bar.date}>
                                <DateBar>
                                    <span>{bar.date}</span>
                                    <span className={bar.balance>=0?'isIn':'isOut'}>总支出：{bar.balance}</span>
                                </DateBar>
                                {
                                    bills.filter(bill =>
                                        bill.appendAt.substring(0, 10) === bar.date
                                    )
                                        .map(newBill =>
                                            <List key={newBill.tagIds}
                                                  onClick={
                                                      () => onEditTag(newBill.tagIds)
                                                  }>
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <Icon name={newBill.tag.name}/>
                                                            <span className='text'>{newBill.tag.value}</span>
                                                        </div>
                                                        <span className='note'>{newBill.note}</span>

                                                        <span>{newBill.category === '支出'
                                                            ? `-${newBill.amount}`
                                                            : `+${newBill.amount}`}
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