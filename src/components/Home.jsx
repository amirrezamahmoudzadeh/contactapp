import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./Home.scss";

function Home() {
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const deleteHandler = (id)=>{
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully !");
  }


  return (
    <div className="container">
      <div className="home-container">
        <div className="add-btn">
          <Link to="/add">Add New Contact</Link>
        </div>
        <div className="contacts">
          <table className="table-latitude">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th> Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>
                    <Link to={`/edit/${contact.id}`}>
                      Edit
                    </Link>
                    <button type="button" onClick={()=>deleteHandler(contact.id)} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
