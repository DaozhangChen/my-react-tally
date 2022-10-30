import tally from '../icons/tally.svg'
import styled from "styled-components";

const Icon=styled.div`
svg{
  fill: blue;
  height: 100px;
}
`
const Detail=()=>{
    return(
        <div>
            <Icon>
            <svg>
                <use xlinkHref='#tally' />
            </svg>
            </Icon>
        </div>
    )
}

export default Detail