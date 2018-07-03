import React from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: 'text',
  placeholder: 'Новая точка маршрута',
  id: 'suggest'
})`
  font-size: 24px;
  padding: 15px 20px;
  margin-bottom: 40px;
`

export const InputUI = ({ onChange }) => (
  <Input id='suggest' onChange={onChange}/>
)
