import React from 'react'
import styled from 'styled-components'
import { Container } from '../../ui/atoms'
import { Input } from '../input'
import { Mapka } from '../map'
import { List } from '../routes'

const LeftSide = styled.div`
`
const RightSide = styled.div`
`

export const App = (props) => (
  <Container>
    <LeftSide>
      <Input/>
      <List/>
    </LeftSide>
    <RightSide>
      <Mapka/>
    </RightSide>
  </Container>
)

