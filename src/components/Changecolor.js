import { useState } from "react"
import React from 'react'
import { useDispatch }  from 'react-redux'
import { changeColor } from '../features/theme'
import '../styles/chagecolor.css'

function Changecolor() {
    const [color, setColor] = useState("")
    const dispatch = useDispatch()
  return (
    <div className="color">
        <input type="text" onChange={(event) => {
            setColor(event.target.value);
        }}/>
      <button onClick={() => {
        dispatch(changeColor(color))
      }}>Change Color</button>
    </div>
  )
}

export default Changecolor
