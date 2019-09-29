import styled from 'styled-components'

import * as css from 'lib/cssVariables'

interface Props {
  onclick: Boolean
}

export const StyledStartButton: any = styled.button<Props>`
  box-sizing: border-box;
  margin: ${css.defaultMargin};
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background-color: ${css.backgroundColor};
  font-family: ${css.fontFamily};
  font-size: 1rem;
  cursor: pointer;
`
