import React, { useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'

import "./Add.scss";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkName = contacts.find((contact) => contact.name === name && name);
    const checkPhone = contacts.find(
      (contact) => contact.phone === parseInt(phone)
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
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully !");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="add-container">
        <h1>Add Contact</h1>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="text-part"
            id="text-part"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            name="email-part"
            id="email-part"
            placeholder="Email"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            name="tel-part"
            id="tel-part"
            placeholder="Phone Number"
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    </div>
  );
}

export default Add;
