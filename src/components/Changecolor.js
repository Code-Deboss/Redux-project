import { useState } from "react"
import React from 'react'

function Changecolor() {
    const [color, setColor] = useState("")
  return (
    <div>
        <input type="text" onChange={(event) => {
            setColor(event.target.value);
        }}/>
      <button>Change Color</button>
    </div>
  )
}

export default Changecolor
