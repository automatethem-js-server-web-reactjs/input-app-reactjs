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
