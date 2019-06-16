import React, { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
const Auth = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const { auth0 } = useContext(GlobalContext);
  const setText = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSignup = () => {
    console.log(values);
    auth0.signup(values);
  };
  const onLogin = () => {
    auth0.login(values);
  };
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSignup();
          console.log("Signed up!");
        }}
      >
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={setText}
        />
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={setText}
        />
        <button type="submit">Signup</button>
      </form>
      <br />
      <form
        onSubmit={e => {
          e.preventDefault();
          onLogin();
          console.log("Logged in!");
        }}
      >
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={setText}
        />
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={setText}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export { Auth };
