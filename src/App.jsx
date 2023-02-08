import React, { useEffect, useState } from "react";

const App =()=> {


  const [count ,setCount] = useState(1)


  function countfun() {
    setCount(count + 1)
  }
  return(
    <div className="App" style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
      <h1>sample button</h1>
<button  onClick={countfun}>count button:{count}</button>
    </div>
  )
}

export default App