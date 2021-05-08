import React, { Component } from 'react'

class Counter extends Component {
  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  }

  constructor (props) {
    super(props)
    this.state = {
      count: this.props.value
      // tags: ['tag1', 'tag2', 'tag3']
    }
    console.log(this.props.value)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  renderTags () {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
  }

  handleIncrement = product => {
    console.log(product)
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    console.log('props', this.props)
    return (
      <div>
        {this.props.children}
        {/* <h4>{this.props.id}</h4> */}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        {/* {this.state.tags.length===0 && 'Please create a new tag!'}
        {this.renderTags()} */}
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
  incrementCount () {
    //   this.setState({
    //       this.state.count=this.state.count+1;
    //   });
  }
}

export default Counter
