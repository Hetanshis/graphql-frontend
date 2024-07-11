import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_USER } from "../qlOperation.tsx/mutations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const [Login, data] = useMutation(LOGIN_USER, {
    variables: { email, password },
    onCompleted(data) {
      localStorage.setItem("auth", data.login.token);
      console.log(data.login.token);
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return alert("Please fill in all fields");
    }

    Login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="col-sm-3 offset-sm-3 mt-4" style={{ textAlign: "center" }}>
      <h1>Login Page</h1>

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

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-dark btn-lg btn-block"
        style={{ padding: "7px", margin: "7px" }}
      >
        Sign In
      </button>
      <br />
      <br />

      <p className="card-text">
        Don`t have an account?{" "}
        <Link style={{ textDecoration: "none" }} to={"/Register"}>
          Sign UP
        </Link>
      </p>
    </div>
  );
}
