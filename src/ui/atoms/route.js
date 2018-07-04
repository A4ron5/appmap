import React from 'react'
import styled from 'styled-components'

export const RouteRaw = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px black solid;
  &:not(:nth-child(1)) {
    border-top: none;
  }
`

const Button = styled.div`
  margin-left: auto;
  width: 20px;
  height: 20px;
  background-color: black;
`

export const RouteUI = ({ text, onClick }) => (
  <RouteRaw>
    {text}
    <Button onClick={onClick}></Button>
  </RouteRaw>
)