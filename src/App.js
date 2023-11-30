/*
//방식1
//var { username, password } = document.forms[0]; 
import React, { useState } from "react";
import { useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  //const navigate = useNavigate();
  
  useEffect(() => {
      if (localStorage.getItem("username")) {
          setLoggedin(true)
      }
  }, []);
  
  const login = (event) => {
      //Prevent page reload
      event.preventDefault();

      var { username, password } = document.forms[0];
      console.log(username);
      console.log(password);
  };

  const logout = () => {
      localStorage.removeItem("username");
      setLoggedin(false);
  }
  
  const loginForm = (
      <div>
              <div>
                  <label>Username </label>
                  <input type="text" name="username" required />
              </div>
              <div>
                  <label>Password </label>
                  <input type="password" name="password" required />
              </div>
              <div>
                  <input type="submit" value="로그인" onClick={(event) => {login(event);}} />
              </div>
      </div>
  );

  return (
    <div>
        {localStorage.getItem("username") ? <div>Logged in <input type="button" value={"Log out"} onClick={() => {logout();}} /></div> : loginForm}
    </div>
  );
}

export default App;
*/
/*
//방식2
//<input ref
*/
///*
//방식3
//const [name, setName] = useState("");
//<input value={name} onChange
import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState("message");
  const [result, setResult] = React.useState();

  const calculateResult = async () => {
      setResult("hello "+ message);
      console.log("hello "+ message); 
  }; 
  
  return <>
    <input value={message} onChange={(e) => { setMessage(e.target.value); }} />
    <button onClick={(e) => { calculateResult(); }}>Click</button>
    {result} 
  </>;
};

export default App;
//*/
