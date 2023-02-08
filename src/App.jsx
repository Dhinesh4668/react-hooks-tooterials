import React, { useEffect, useState } from "react";
import "./App.css"





// usestate function
function CounterApp(){
  // usestate
  const [count, setCount] = useState(1)
  function countfun() {
    setCount(count + 1)
  }
return(
    <center>
      <h1>sample button</h1>
      <button onClick={countfun}>count button:{count}</button>
    </center>
)
}







const App=()=>{
  return(
    <div>
      <CounterApp />
    </div>
  )
}
export default App