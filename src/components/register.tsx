import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ADD_USER } from "../qlOperation.tsx/mutations";
import { GET_ALL_USERS } from "../qlOperation.tsx/queries";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // const [formData, setFormData] = useState({});
  // const handleChange = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const [user] = useMutation(ADD_USER);
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   user(formData);
  // };
  const [addUser] = useMutation(ADD_USER, {
    variables: { name, email, contactNumber, password },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      contactNumber === ""
    ) {
      return alert("Please fill in all fields");
    }

    addUser(name, email, contactNumber, password);

    setName("");
    setEmail("");
    setPassword("");
    setContactNumber("");
  };

  return (
    <div className="col-sm-3 offset-sm-3 mt-4" style={{ textAlign: "center" }}>
      <h1>Register Page</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="form-control mt-5"
        required
      />
      <br />
      <input
        type="text"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        className="form-control"
        required
      />
      <br />
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="form-control"
        required
      />
      <br />
      <input
        type="text"
        name="contactNumber"
        id="contactNumber"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Enter contactNumber"
        className="form-control"
        required
      />
      <br />

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-dark btn-lg btn-block"
        style={{ padding: "7px", margin: "7px" }}
      >
        Sign Up
      </button>

      <br />
      <br />
      <p className="card-text">
        Already have an account?{" "}
        <Link style={{ textDecoration: "none" }} to={"/Login"}>
          Sign In
        </Link>
      </p>
    </div>
  );
}
