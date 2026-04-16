import React, { useState } from "react";

const ControlledIp = () => {
  const [inputValue,setInputValue] =useState("")
  const [showPassword,setShowPassword] = useState(false)
  const clickUpdate=()=>{
    setShowPassword(!showPassword)
  }
  return (
    <div>
      <input 
        type="password"
        onChange={(e)=>setInputValue(e.target.value)}
        value={inputValue}
      />
      <button onClick={clickUpdate}>{showPassword? "Hide password":"Show password"}</button>
     {showPassword? inputValue: null}
    </div>
  );
};

export default ControlledIp;
