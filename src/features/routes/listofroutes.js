import React from 'react'
import { connect } from 'react-redux'
import { RoutesUI } from '../../ui/atoms'
import { RouteUI } from '../../ui/atoms'
import { removeRoute } from '../input/action'

class ListRaw extends React.Component {

  handleClick = (item) => {
    this.props.removeRoute(item)
  }

  render() {
    const list = this.props.routes.map(item => {
      return <RouteUI onClick={(e) => this.handleClick(item)} key={item} text={item}/> 
    })
    return (
      <RoutesUI>
        {list}
      </RoutesUI>
    )
  }
}

const mapStateToProps = state => ({ routes: state.input.routes })

export const List = connect(mapStateToProps, { removeRoute })(ListRaw);