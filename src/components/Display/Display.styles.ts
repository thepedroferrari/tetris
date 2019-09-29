import styled from 'styled-components'
import * as css from 'lib/cssVariables'

interface Props {
  gameOver: Boolean
}

export const StyledDisplay: any = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: ${css.defaultMargin};
  padding: 20px;
  border: 4px solid ${css.borderColor};
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  color: ${props => (props.gameOver ? css.errorColor : css.buttonDefaultColor)};
  background-color: ${css.displayBackgroundColor};
  font-family: ${css.fontFamily};
  font-size: 0.8rem;
`
