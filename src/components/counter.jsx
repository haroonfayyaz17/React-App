import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  }

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  }

  render () {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        <ul>
            {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
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
