//@ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './CakeSlice'

function CakeUI() {
    const numOfCakes=useSelector((state)=>state.cake.numOfCakes)
    const disptach=useDispatch()
  return (

    <>

<h1>This is Cake UI</h1>
<h2>Available cakes are:{numOfCakes}</h2>
    <button onClick={()=>{disptach(ordered())}}>ORDERED</button><span>   </span>
    <button onClick={()=>{disptach(restocked(2))}}>RESTOCKED</button> <br /><br />
   
    
    <hr />
    </>
    
  )
}

export default CakeUI