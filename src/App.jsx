import React, { Component } from 'react'
import NavBar from './components/navbar'
import Counters from './components/counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  constructor () {
    super()
    console.log('App-Constructor')
  }

  //When Componenet is removed
  componentWillUnmount () {
    console.log('Counter - Unmount')
  }

  //When component is updated
  componentDidUpdate (prevProps, prevState) {
    // console.log('prevProps',prevProps)
    // console.log('prevState',prevState)
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleIncrement = counter => {
    //clone the array
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0
      return c
    })
    this.setState({ counters })
  }

  render () {
    console.log('App-rendered')
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>{' '}
      </React.Fragment>
    )
  }
}

export default App
