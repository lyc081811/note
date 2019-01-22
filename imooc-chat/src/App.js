import React, { Component } from 'react'

import {BrowserRouter, Route} from 'react-router-dom'

import Login from './views/login/login'
import Register from './views/register/register'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
