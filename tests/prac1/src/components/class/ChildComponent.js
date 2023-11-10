import React from 'react'
// Parent child communication
// Method as prop
function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
