import styled from 'styled-components'

import * as css from '../../lib/cssVariables'

interface Props {
  width: string
  height: string
}

export const StyledStage: any = styled.div<Props>`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid ${css.borderColor};
  width: 100%;
  max-width: 25vw;
  background-color: ${css.stageBackgroundColor};
`
