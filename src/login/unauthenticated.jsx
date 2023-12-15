import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [username, setUsername] = React.useState(props.username);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function login() {
    loginOrCreate(`/api/auth/login`);
  }

  async function register() {
    loginOrCreate(`/api/auth/register`);
  }

  async function loginOrCreate(endpoint) {

    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    console.log(response);

    if (response?.status === 200) {
      localStorage.setItem('username', username);
      props.onLogin(username);
    } else {
      const body = await response.json();
    }
  }

  return (
    <>
      <div>
	<p>Login to view websites</p>
	  <div>
	    <label>Username</label>
	    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
	  </div>
	  <div>
	    <label>Password</label>
	    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
	  </div>
	  <div>
	    <button type="submit" onClick={() => login()}>Login</button>
	    <button type="submit" onClick={() => register()}>Register</button>
	  </div>
      </div>
    </>
  );
}
