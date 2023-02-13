import React,{useState} from 'react'

function RegisterPage() {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
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

        <label>Name</label>
        <input type="text" valu={Name} onChange={onNameHandler}></input>

        <label>password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}></input>

        <label>Confirm Password</label>
        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>
        <br/>
        <button>
          Login
        </button>
      </form>
    </div>
  )
}

export default RegisterPage;