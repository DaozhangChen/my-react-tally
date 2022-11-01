import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {InputNumber} from "../view/TallyPage";

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
    const [amountNumber, _setAmountNumber] = useState('0')
    const setAmountNumber=(n:string)=>{
        const dotIndex = amountNumber.indexOf('.')
        if(n==='清空'){
            _setAmountNumber('0')
            return;
        }
        if (amountNumber.length >= 13) {
            return
        }
        if (dotIndex >= 0 && amountNumber.length - dotIndex > 2) {
            return
        }
        if (n==='.'){
            if (dotIndex>=0){
                return;
            }
        }else if (n==='0'){
            if (dotIndex===-1){
                if (amountNumber==='0'){
                    return;
                }
            }
        }
        if (n!=='0' && amountNumber==='0'){
            if (n==='.'){
                return;
            }
            _setAmountNumber(n)
            return;
        }
        _setAmountNumber(amountNumber + n)
    }
    const {onChange,onSubmit}=useContext(InputNumber)
    useEffect(()=>{
        onChange(amountNumber)
    },[amountNumber])
    const inputNumberList = [
        {text: '1', onClick: () => setAmountNumber('1')},
        {text: '2', onClick: () => setAmountNumber('2')},
        {text: '3', onClick: () => setAmountNumber('3')},
        {text: '4', onClick: () => setAmountNumber('4')},
        {text: '5', onClick: () => setAmountNumber('5')},
        {text: '6', onClick: () => setAmountNumber('6')},
        {text: '7', onClick: () => setAmountNumber('7')},
        {text: '8', onClick: () => setAmountNumber('8')},
        {text: '9', onClick: () => setAmountNumber('9')},
        {text: '0', onClick: () => setAmountNumber('0')},
        {text: '.', onClick: () => setAmountNumber('.')},
        {text: '清空', onClick: () => setAmountNumber('清空')},
        {text: '提交', onClick: () => onSubmit()},
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