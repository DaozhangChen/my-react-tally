import MainList from "./MainList";
import styled from "styled-components";

const IconListWrapper = styled.div`
  @media(max-height: 750px){
    height: 350px;
    overflow: auto;
  }
  height: 450px;
    overflow: auto;
`
type Props = {
    value: { name: string, value: string },
    onChange: (tag: { name: string, value: string }) => void
    category: '收入' | '支出'
}
const IconSection = (props: Props) => {
    return (
        <IconListWrapper>
            <MainList value={props.value}
                onChange={props.onChange}
                category={props.category}
            />
        </IconListWrapper>
    )
}

export default IconSection