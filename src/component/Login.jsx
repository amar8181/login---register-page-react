import React from "react";
import { useState } from "react";
import './style.css';


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password)
    }

    return (

        < div className="container  login">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    Email: <input type="email" placeholder=" youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                    Password : <input type="password" placeholder=" password" value={password} onChange={(e) => setPassword(e.target.value)} required/><br /><br />

                    <button type="submit">Log In</button>
                </form><br />
                Don't have an account ? <br /><br />
                <button onClick={()=>props.onFormSwitch('register')}> Register Here</button>
            </div>
        </div>
    )
}

export default Login;