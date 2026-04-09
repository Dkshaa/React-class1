import React, { useRef } from 'react'

const concer = () => {
    const focuIn=useRef()
  return (
    <div>
      <input type='text'placeholder='Your name'/>
      <button>Focus</button>
    </div>
  )
}

export default concer
