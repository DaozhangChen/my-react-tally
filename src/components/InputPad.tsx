import styled from "styled-components";
import {useState} from "react";

const Wrapper = styled.div`
  flex-grow: 1;

  .buttons {
    font-size: 25px;
    display: grid;
    grid-template: 
  "n1 n2 n3 d"
  "n4 n5 n6 d"
  "n7 n8 n9 s"
  "n0 n0 p s";
    height: 100%;
    background: white;
    border-top: 1px solid #ddd;
    grid-auto-rows: 48px;
    grid-auto-columns: 1fr;
    gap: 1px;

    > button {
      border: none;
      background: white;

      &:nth-child(1) {
        grid-area: n1;
      }

      &:nth-child(2) {
        grid-area: n2;
      }

      &:nth-child(3) {
        grid-area: n3;
      }

      &:nth-child(4) {
        grid-area: n4;
      }

      &:nth-child(5) {
        grid-area: n5;
      }

      &:nth-child(6) {
        grid-area: n6;
      }

      &:nth-child(7) {
        grid-area: n7;
      }

      &:nth-child(8) {
        grid-area: n8;
      }

      &:nth-child(9) {
        grid-area: n9;
      }

      &:nth-child(10) {
        grid-area: n0;
      }

      &:nth-child(11) {
        grid-area: p;
      }

      &:nth-child(12) {
        grid-area: d;
      }

      &:nth-child(13) {
        grid-area: s;
        background: #5C33BE;
        color: white;
      }
    }
  }
`

const InputPad = () => {
    const [amountNumber, setAmountNumber] = useState('')
    const inputNumberList = [
        {text: '1', onClick: () => setAmountNumber(amountNumber + '1')},
        {text: '2', onClick: () => setAmountNumber(amountNumber + '2')},
        {text: '3', onClick: () => setAmountNumber(amountNumber + '3')},
        {text: '4', onClick: () => setAmountNumber(amountNumber + '4')},
        {text: '5', onClick: () => setAmountNumber(amountNumber + '5')},
        {text: '6', onClick: () => setAmountNumber(amountNumber + '6')},
        {text: '7', onClick: () => setAmountNumber(amountNumber + '7')},
        {text: '8', onClick: () => setAmountNumber(amountNumber + '8')},
        {text: '9', onClick: () => setAmountNumber(amountNumber + '9')},
        {text: '0', onClick: () => setAmountNumber(amountNumber + '0')},
        {text: '.', onClick: () => setAmountNumber(amountNumber + '.')},
        {text: '清空', onClick: () => setAmountNumber('')},
        {text: '提交', onClick: () => setAmountNumber(amountNumber + 'ok')},
    ]
    return (
        <Wrapper>
            <div className='buttons'>
                {inputNumberList.map(button =>
                    <button key={button.text}
                            onClick={button.onClick}>
                        {button.text}
                    </button>
                )}
            </div>
        </Wrapper>
    )
}
export default InputPad