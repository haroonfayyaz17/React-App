import React, { Component } from 'react'

class Counter extends Component {
 
  constructor (props) {
    super(props)
    this.state = {
      count: this.props.value
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement = product => {
    console.log(product)
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    console.log('props', this.props)
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
       
      </div>
    )
  }
  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  }

  formateCount () {
    const { count } = this.state
    return count === 0 ? <span>Zero</span> : count
  }
  
}

export default Counter
