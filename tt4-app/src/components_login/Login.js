import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Login.css'
async function loginUser(credentials) {
    return fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/login', {
      method: 'POST',
      headers: {
        "x-api-key": "4fLNtutUxi797l5cazMtm4z6FEEwCWm57NjjCvxP",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [userPass, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            userPass
        });
        setToken(token);
    }
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" placeholder="username" value={userName} onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" placeholder="password" value={userPass} onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
