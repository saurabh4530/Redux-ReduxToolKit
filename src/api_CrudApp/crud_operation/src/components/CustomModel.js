//@ts-nocheck
import React from 'react';
import './CustomModel.css';
import { useSelector } from 'react-redux';

function CustomModel({ showPopup, setShowPopup, id }) {
  const allUsers = useSelector((state) => state.appCrud.users);

  const singleUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div className="modalBackground d-flex justify-content-center align-items-center">
      <div className="modalContainer bg-white p-4 rounded shadow-lg">
        <button className="btn btn-danger mb-3" onClick={() => setShowPopup(false)}>Close</button>
        <div className="userInfo">
          <h3 className="mb-3">{singleUser[0].name}</h3>
          <p><strong>Email:</strong> {singleUser[0].email}</p>
          <p><strong>Age:</strong> {singleUser[0].age}</p>
          <p><strong>Gender:</strong> {singleUser[0].gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CustomModel;
