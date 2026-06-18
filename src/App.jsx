import { useState } from "react"

export default function App() {

  const [Count, setCount] = useState(0);

  const [decrease, setDecrease] = useState(0);

  return (
    <>
      <div style={{margin:20, backgroundColor:'darkseagreen', textAlign:'center'}}>
        <h2> Count is: {Count}</h2>
        <button onClick={() => setCount(Count + 1)}>
          Increase Me
        </button>
        <hr /><br /><br />

         <h2> Count is: {decrease}</h2>
        <button onClick={() => setDecrease(decrease - 1)}>
          Decrease Me
        </button>
      </div>
    </>
  )
}