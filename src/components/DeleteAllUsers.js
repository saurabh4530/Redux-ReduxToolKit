//@ts-nocheck 
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteAllUsers } from '../action/DeleteAllUsers'


function DeleteAllUsers() {
  const data=useSelector((state)=>state.users)
  const dispatch=useDispatch()
  return (<Wrapper>
  <button className='btn clear-btn'
  onClick={()=>{dispatch(deleteAllUsers())  }}>Clear Users</button>
  
  </Wrapper>
   
  )
}
const Wrapper=styled.section`
.clear-btn{
text-tranform:capitalize;
background-color:#db338a}
`

export default DeleteAllUsers