import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'
import CoursesList from './components/CoursesList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CoursesList />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));