import styled from 'styled-components'

import bgImage from 'img/bg.png'

interface Props {
  width: string
  background: string
  type: number
  color: string
  border: string
}

export const StyledTetrisWrapper: any = styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`
export const StyledTetris: any = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`
