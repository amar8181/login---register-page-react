import React from "react";
import { useState } from "react";
import './style.css';

function Register(props) {

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idproof, setIdproof] = useState('');




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password,name,birthdate,idproof)
    }

    return (
        <div>
            < div className="container register">
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        Name: <input type="text" placeholder="fullname" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
                        Birth Date: <input type="date" placeholder="birthDate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required /><br /><br />
                        Email: <input type="email" placeholder=" youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                        Password : <input type="password" placeholder="create-password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                        Confirm Password : <input type="password" placeholder=" reEnter-password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                        Id Proof : <input type="file" value={idproof} onChange={(e) => setIdproof(e.target.value)} required /> <br /><br />

                        <button type="submit">Register</button>
                    </form><br />
                    already have an account ? <br /><br />
                    <button onClick={() => props.onFormSwitch('login')}> LogIn Here</button>
                </div>
            </div>
        </div>
    )
}
export default Register;