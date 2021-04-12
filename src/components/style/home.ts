import styled from 'styled-components'

export const ContentWrap = styled.div<{bgColor?: string;}>`
min-height: 48rem;
background-color: ${({bgColor = 'rgba(0, 0, 0, .0)'}) => bgColor};
display: flex;
justify-content: center;
align-items: center;
`
