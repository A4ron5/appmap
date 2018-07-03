import React from 'react'
import { connect } from 'react-redux'
import { InputUI } from '../../ui/atoms'
import { addRouteToList } from './action'

export class InputRaw extends React.Component {
  
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRouteToList(this.state.text)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputUI onChange={this.handleChange} />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

export const Input = connect(mapStateToProps, { addRouteToList })(InputRaw)