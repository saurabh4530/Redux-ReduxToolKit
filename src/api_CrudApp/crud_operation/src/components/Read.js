//@ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../featuresCRUD/UserDetailsSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

function Read() {
  const [id, setId] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const { users, loading, searchData } = useSelector((state) => state.appCrud);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {showPopup && <CustomModel id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}
      <h2>All Data</h2>
      <div>
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name.toLowerCase().includes(searchData.toLowerCase());
              }
            })
            .map((ele) => (
              <div key={ele.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{ele.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                  <p className="card-text">{ele.age}</p>
                  <p className="card-text">{ele.gender}</p>
                  <button className="card-link btn btn-primary" onClick={() => { setId(ele.id); setShowPopup(true); }}>
                    View
                  </button> <span>   </span>
                 <button className="btn btn-warning">
                 <Link to={`/edit/${ele.id}`} className="card-link">
                    Edit
                  </Link>
                 </button><span>   </span>
                  <button onClick={() => dispatch(deleteUser(ele.id))} className="card-link btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Read;
