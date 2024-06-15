//@ts-nocheck
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData,deleteGitUsers } from './GitUserSlice'

function  Index() {
    const dispatch=useDispatch()
   const data=useSelector((state)=>{
    console.log(state.app);
    return state.app})
     if(data.loading){
        return <h2>loading</h2>
     }
     if(data.error!=null){
        return <h2>{data.error}</h2>
     }


  return (
    <>
    <h1>hello</h1>
    <button onClick={()=>{dispatch(getAllData())}}>ADD github Users</button> <p>          </p>
    <button onClick={()=>{dispatch(deleteGitUsers())}}>deleteGitUsers </button> 
    <ul>
        {
            data.users.map((user,id)=>{
                return <li key={id}>{user.login}</li>
            })
        }
    </ul>
    
    
    
    </>
  )
}

export default Index