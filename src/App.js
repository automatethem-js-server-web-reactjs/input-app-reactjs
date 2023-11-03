import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState("메시지");

  const handleSubmit = async (e) => {
      console.log(message); 
  }; 
  
  return <>
    <input value={message} onChange={(e) => { setMessage(e.target.value); }} />
    <button onClick={(e) => { handleSubmit(e); }}>Click</button>
  </>;
};

export default App;
