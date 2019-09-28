import styled from 'styled-components'

interface Props {
  width: string
  background: string
  type: string
  color: string
}

export const StyledCell: any = styled.div<Props>`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
`
