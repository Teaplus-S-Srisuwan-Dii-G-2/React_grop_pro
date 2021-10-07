import React, { useEffect, useState ,useContext} from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Component/Auth";

import firebaseConfig from "../../config";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  Axios.defaults.withCredentials = true;
  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const { email, password } = e.target.elements;

  //     try {

  //         firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);

  //     } catch(error) {
  //         alert(error);
  //     }
  // }
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        return <Redirect to="/" />;
      }
    });
  }, []);

//   const { currentUser } = useContext(AuthContext);
//   if (currentUser) {
//     return <Redirect to="/" />;
//   }

  return (
    <>
      <div className="container mt-5">
        <h1>Log In</h1>
        <form onSubmit={login}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Username with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h4>{loginStatus}</h4>
    </>
  );
};

export default LogIn;
