//@ts-nocheck
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../featuresCRUD/UserDetailsSlice";
import { useNavigate } from "react-router";

function Create() {
    const [users, setUsers] = useState({
      name: "",
      email: "",
      age:"",
      gender:""
      

    });
   const navigate=useNavigate()
    const dispatch = useDispatch();
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    navigate("/read")
  };
  return (
    <div>
      <br />
      <h2 className="text-center">fill the form:</h2>
      <br />
      <form className="center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={getUserData} />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={getUserData} />
        </div>
        <br />
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" onChange={getUserData} />
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
                onChange={getUserData}
              />{" "}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={getUserData}
              />{" "}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={getUserData}
              />{" "}
              Other
            </label>
          </div>
        </div>
        <br />
        <button className="btn btn-success" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
