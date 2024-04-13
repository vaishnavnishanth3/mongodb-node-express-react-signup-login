import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password})
        .then(result=> console.log(result))
        .catch(error=>(console.log(error)))
    }
    return ( 
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className='bg-white p-3 w-25'>
                <h2>Register Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder='Email'
                            autoComplete='off'
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e) => {setEmail(e.target.value)}}
                            />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Password"
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e) => {setPassword(e.target.value)}}
                            />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Register</button>
                    </form>
            </div>

        </div>
     );
}

export default Login;
