import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [username, setUsername] = React.useState(props.username);
  const [password, setPassword] = React.useState('');

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
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
    if (response?.status === 200) {
      localStorage.setItem('username', username);
      props.onLogin(userName);
    } else {
      const body = await response.json();
    }
  }

  return (
    <>
      <div>
	<p>Login to view websites</p>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
          />
        </div>
        <div className='input-group mb-3'>
          <label className='input-group-text'>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />
        </div>
        <Button variant='primary' onClick={() => loginUser()}>
          Login
        </Button>
        <Button variant='secondary' onClick={() => createUser()}>
          Register
        </Button>
      </div>
    </>
  );
}
