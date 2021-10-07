import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../config";

const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { email, password } = e.target.elements;

  //     try {
  //       firebaseConfig
  //         .auth()
  //         .createUserWithEmailAndPassword(email.value, password.value);
  //       setCurrentUser(true);
  //     } catch (error) {
  //       alert(error);
  //     }
  //   };
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="Username"
              className="form-control"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your account with anyone else.
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
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// export default function Registration() {
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const [loginStatus, setLoginStatus] = useState("");

//   Axios.defaults.withCredentials = true;

//   const register = () => {
//     Axios.post("http://localhost:3001/register", {
//       username: usernameReg,
//       password: passwordReg,
//     }).then((response) => {
//       console.log(response);
//     });
//   };

//   const login = () => {
//     Axios.post("http://localhost:3001/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (response.data.message) {
//         setLoginStatus(response.data.message);
//       } else {
//         setLoginStatus(response.data[0].username);
//       }
//     });
//   };

//   useEffect(() => {
//     Axios.get("http://localhost:3001/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setLoginStatus(response.data.user[0].username);
//       }
//     });
//   }, []);

//   return (
//     <div className="App">
//       <div className="registration">
//         <h1>Registration</h1>
//         <label>Username</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setUsernameReg(e.target.value);
//           }}
//         />
//         <label>Password</label>
//         <input
//           type="text"
//           onChange={(e) => {
//             setPasswordReg(e.target.value);
//           }}
//         />
//         <button onClick={register}> Register </button>
//       </div>

//       <div className="login">
//         <h1>Login</h1>
//         <input
//           type="text"
//           placeholder="Username..."
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password..."
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         <button onClick={login}> Login </button>
//       </div>

//       <h1>{loginStatus}</h1>
//     </div>
//   );
// }
