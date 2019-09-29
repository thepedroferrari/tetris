import styled from 'styled-components'

interface Props {
  type: number
  color: string
}

export const StyledCell: any = styled.div<Props>`
  width: auto;
  background-color: rgba(${props => props.color}, 0.8);
  border-style: solid;
  border-width: (${props => (props.type === 0 ? '0' : '4px')});
  border-top-color: rgba(${props => props.color}, 1);
  border-right-color: rgba(${props => props.color}, 1);
  border-bottom-color: rgba(${props => props.color}, 0.25);
  border-left-color: rgba(${props => props.color}, 0.4);
`
