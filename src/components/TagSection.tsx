import styled from "styled-components";

const HeadNav = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  ul {
    display: flex;
    li {
      font-size: 23px;
      padding: 15px 20px;
    }
    .selected{
      border-bottom: 1px solid black;
    }
  }

  button {
    position: absolute;
    right: 20px;
    background: inherit;
    border: none;
    padding: 15px 0;
  }
`
type Props = {
    value: '收入' | '支出',
    onChange: (category: '收入' | '支出') => void
}

const TagSection = (props: Props) => {
    const categoryMap: ('支出' | '收入')[] = ['支出', '收入']
    return (
        <HeadNav>
            <ul>
                {
                    categoryMap.map(
                        tag => <li key={tag}
                                   onClick={() => {
                                       props.onChange(tag)
                                   }}
                                   className={props.value===tag?'selected':''}
                        >
                            {tag}
                        </li>
                    )
                }
            </ul>
            <button>取消</button>
        </HeadNav>
    )
}

export default TagSection