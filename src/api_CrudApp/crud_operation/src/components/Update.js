//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router'
import { deleteUser, updateUser } from '../featuresCRUD/UserDetailsSlice';



function Update() {
    const {id}=useParams()
    const [updateData,setUpdateData]=useState()
    const {users,loading}=useSelector((state)=>state.appCrud);
    const navigate=useNavigate()

    const dispatch=useDispatch()
  useEffect(()=>{
   if (id) {
    const singleUser=users.filter((ele)=>ele.id===id)
    setUpdateData(singleUser[0])
   }
  },[])
  const newData=(e)=>{
    setUpdateData({...updateData,[e.target.name]:e.target.value})

  }
  const handleUpdate=(e)=>{
    e.preventDefault()
dispatch(updateUser(updateData))
navigate("/read")

  }

  return (
    <div>
    <br />
    <h2 className="text-center">edit the form:</h2>
    <br />
    <form className="center" onSubmit={handleUpdate}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={updateData && updateData.name} onChange={newData} />
      </div>
      <br />  
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={updateData && updateData.email} onChange={newData} />
      </div>
      <br />
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={updateData && updateData.age} onChange={newData} />
      </div>
      <br />
      <div>
        <label>Gender:</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={updateData && updateData.gender==="male"}
              onChange={newData}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={updateData && updateData.gender==="female"}
              onChange={newData}
            />{" "}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={updateData && updateData.gender==="other"}
              onChange={newData}
            />{" "}
            Other
          </label>
        </div>
      </div>
      <br />
      <button className="btn btn-success" type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Update