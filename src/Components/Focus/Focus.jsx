import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef()

    const focusInput =()=>{
        console.log("Focused on Input")
        inputRef.current.focus()
    }
  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter Your Name'/>
      <button onClick={focusInput}>Focused Input</button>
    </div>
  )
}

export default Focus
