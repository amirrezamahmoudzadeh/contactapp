import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./Edit.scss";

function Edit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setEmail(currentContact.email);
      setName(currentContact.name);
      setPhone(currentContact.phone);
    }
  }, [currentContact]);

  const submitHandler = (event) => {
    event.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkName = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.name === name
    );
    const checkPhone = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.phone === parseInt(phone)
    );

    if (!name || !email || !phone) {
      return toast.warning("Please fill in all fields!");
    }
    if (checkEmail) {
      return toast.error("The emil already exist!");
    }
    if (checkName) {
      return toast.error("The name already exist!");
    }
    if (checkPhone) {
      return toast.error("The phone number already exist!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      phone,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully !");
    navigate("/");
  };

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <div className="edit-container">
            <h1>Edit Contact {parseInt(id)}</h1>
            <form action="" onSubmit={submitHandler}>
              <input
                type="text"
                name="text-part"
                id="text-part"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="email"
                name="email-part"
                id="email-part"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="tel"
                name="tel-part"
                id="tel-part"
                placeholder="Phone Number"
              />
              <div className="edit-btns">
                <button type="submit">Update Contact</button>
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h1>Contact with id {parseInt(id)} doesn't exists </h1>
      )}
    </div>
  );
}

export default Edit;
