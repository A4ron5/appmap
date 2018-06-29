import React from 'react'
import { InputUI } from '../../ui/atoms'

export class Input extends React.Component {
  
  handleChange = () => {
    console.log('text...')
  }

  render() {
    return (
      <InputUI
        onChange={this.handleChange}
      />
    )
  }
}