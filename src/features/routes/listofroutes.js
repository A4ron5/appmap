import React from 'react'
import { connect } from 'react-redux'
import { RoutesUI } from '../../ui/atoms'
import { RouteUI } from '../../ui/atoms'

const ListRaw = (props) => {
  const list = props.routes.map(item => {
    return <RouteUI key={item}>{item}</RouteUI>
  })
  return (
    <RoutesUI>
     {list}
    </RoutesUI>
  )
}

const mapStateToProps = state => ({ routes: state.routes.routes})

export const List = connect(mapStateToProps)(ListRaw);