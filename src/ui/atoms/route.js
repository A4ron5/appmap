import styled from 'styled-components'

export const RouteUI = styled.li`
  padding: 5px;
  border: 1px black solid;
  &:not(:nth-child(1)) {
    border-top: none;
  }
`