import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Welcome Quan</div>

    // 1st approach
    // return (
    //   this.state.isLoggedIn?
    //   <div>Welcome Quan</div> :
    //   <div>Welcome guest</div>
    // )

    // 2nd approach
    // let message
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Quan</div>
    // } else {
    //   message = <div>Welcome guest</div>
    // }

    // return <div>{message}</div>

    // 3rd approach
    // if (this.state.isLoggedIn) {
    //     return <div><p>Welcome Quan</p></div>
    // } else {
    //     return <div><p>Welcome guest</p></div>
    // }
  }
}

export default UserGreeting