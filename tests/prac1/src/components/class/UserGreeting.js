import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    if (this.state.isLoggedIn) {
        return <div><p>Welcome Quan</p></div>
    } else {
        return <div><p>Welcome guest</p></div>
    }
  }
}

export default UserGreeting