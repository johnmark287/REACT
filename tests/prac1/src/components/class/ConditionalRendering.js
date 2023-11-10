import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome Quan</div>

    // Ternary conditional operator
    // return (
    //   this.state.isLoggedIn?
    //   <div>Welcome Quan</div> :
    //   <div>Welcome guest</div>
    // )

    // element variable approach
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Quan</div>
    // } else {
    //   message = <div>Welcome guest</div>
    // }

    // return <div>{message}</div>

    // if/else approach
    // if (this.state.isLoggedIn) {
    //     return <div><p>Welcome Quan</p></div>
    // } else {
    //     return <div><p>Welcome guest</p></div>
    // }
  }
}

export default UserGreeting