import styled from "styled-components";
import Icon from "./Icon";
import {useState} from "react";

const Wrapper=styled.div`
padding: 10px 10px;
`
const List=styled.div`
    ul{
      display: flex;
      flex-wrap: wrap;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 20%;
        flex-shrink: 0;
        margin-bottom: 15px;

        > span {
          margin-top: 5px;
        }
      }
      .selected{
        color: red;
        fill: red;
      }
    }
`
type Props={
    value:{name:string,value:string},
    onChange:(tag:{name:string,value:string})=>void
}
const MainList=(props:Props)=>{
    const [tagList,setTagList]=useState([{name:'money',value:'记账'},
        {name:'tally',value:'钱'}])
    const [select,setSelect]=useState('')
    const onClick=(name:string,value:string)=>{
        setSelect(name)
        props.onChange({name,value})
    }
    return(
        <Wrapper>
            <List>
                <ul>
                    {
                        tagList.map(tag=>
                        <li key={tag.name} onClick={()=>onClick(tag.name,tag.value)} className={tag.name===select?'selected':''}>
                            <Icon name={tag.name} />
                            <span>{tag.value}</span>
                        </li>
                        )
                    }
                    <li>
                        <Icon name='add'/>
                        <span>添加</span>
                    </li>
                </ul>
            </List>
        </Wrapper>
    )
}
export default MainList