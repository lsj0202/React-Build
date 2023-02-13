/* eslint-disable */
import React, {useState} from 'react'

function LoginPage() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Email', Email);
    console.log('Password', Password);
  }

  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'}}>
      <form style={{display:'flex', flexDirection:'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}></input>
        <label>Password</label>
        <input type="password" valu={Password} onChange={onPasswordHandler}></input>
        <br/>
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;