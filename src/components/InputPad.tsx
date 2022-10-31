import styled from "styled-components";

const Wrapper=styled.div`
  flex-grow: 1;
  .buttons{
    font-size: 25px;
    display: grid;
    grid-template: 
  "n1 n2 n3 d"
  "n4 n5 n6 d"
  "n7 n8 n9 s"
  "n0 n0 p s";
          height: 100%;
    background:white;
    border-top:1px solid #ddd;
    grid-auto-rows: 48px;
    grid-auto-columns: 1fr;
    gap: 1px;
    >button{
      border: none;
      background: white;
      &:nth-child(1){
        grid-area: n1;
      }
      &:nth-child(2){
        grid-area: n2;
      }
      &:nth-child(3){
        grid-area: n3;
      }
      &:nth-child(4){
        grid-area: n4;
      }
      &:nth-child(5){
        grid-area: n5;
      }
      &:nth-child(6){
        grid-area: n6;
      }
      &:nth-child(7){
        grid-area: n7;
      }
      &:nth-child(8){
        grid-area: n8;
      }
      &:nth-child(9){
        grid-area: n9;
      }
      &:nth-child(10){
        grid-area: n0;
      }
      &:nth-child(11){
        grid-area: p;
      }
      &:nth-child(12){
        grid-area: d;
      }
      &:nth-child(13){
        grid-area: s;
        background: #5C33BE;
        color: white;
      }
    }
  }
`

const InputPad=()=>{
    return(
        <Wrapper >
            <div className='buttons'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
            <button>.</button>
            <button>清空</button>
            <button>提交</button>
            </div>
        </Wrapper>
    )
}
export default InputPad