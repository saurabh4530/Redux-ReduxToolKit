//@ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked ,reset} from './IceCreamSlice'

function IceCreamUI() {
    const numOfIceCreams=useSelector((state)=>state.iceCream.numOfIceCreams)
const disptach=useDispatch()
  return (
  <>
  <h1>This is IceCream UI</h1>
  <h2>number of IceCreams Available:{numOfIceCreams}</h2>
  <button onClick={()=>{disptach(ordered())}}>ORDERED</button><span>   </span>
  <button onClick={()=>{disptach(restocked(1))}}>RESTOCKED</button><br /><br />
  <button onClick={()=>{disptach(reset())}}>RESET</button>
  <hr />

  
  </>
  )
}

export default IceCreamUI