import React, { Component } from 'react'

// change mesage on click
class BindEventHandlers extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      // binding in class constructor
      // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this);
    // }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default BindEventHandlers