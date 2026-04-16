import React, { useReducer } from "react";

const carInfo = {
  model: "",
  color: "",
  year: "",
};
const reducerFun = (state, action) => {
    return {...state,[action.type]:action.val};
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFun, carInfo);
  return (
    <div>
      <h1>Reducer</h1>
      <input
        type="text"
        placeholder="Enter Model...."
        onChange={(e) => dispatch({val:e.target.value,type:"model"})}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Color...."
        onChange={(e) => dispatch({val:e.target.value,type:"color"})}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Year...."
        onChange={(e) => dispatch({val:e.target.value,type:"year"})}
      />
      <br></br>
      <h2>Model:{state.model} </h2>
      <h2>Color: {state.color}</h2>
      <h2>Year: {state.year}</h2>
    </div>
  )
}

export default Reducer;
