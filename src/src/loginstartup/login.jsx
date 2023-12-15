import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        <h1>Welcome</h1>
	<div id="loginControls" style="display: none">
	  <p>Login to view websites</p>
	  <div>
	    <label>Username</label>
	    <input type="text" id="username" placeholder="username" />
	  </div>
	  <div>
	    <label>Password</label>
	    <input type="password" id="password" placeholder="password" />
	  </div>
	  <div>
	    <button type="submit" onClick="login()">Login</button>
	    <button type="submit" onClick="register()">Register</button>
	  </div>
	</div>
	<div id="logoutControls" style="display: none">
	  <div id="playerName"></div>
	  <button type="submit" onClick="viewWebsites()">View Websites</button>
	  <button type="submit" onClick="logout()">Log Out</button>
	</div>
      </div>
    </main>
  );
}

(async () => {
  const username = localStorage.getItem('username');
  if(username) {
    setDisplay('loginControls', 'none');
    setDisplay('logoutControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('logoutControls', 'none');
  }
})();

async function login() {
  loginOrRegister('/api/auth/login');
}

async function register() {
  loginOrRegister('/api/auth/register');  
}

async function loginOrRegister(endpoint) {
  const username = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;

  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({username: username, password: password}),
    headers: {'Content-type': 'application/json; charset=UTF-8'},
  });

  if(response.ok) {
    localStorage.setItem('username', username);
    window.location.href = 'websites.html';

  } else {
    console.log('unauthorized');
  }
}

function setDisplay(controlID, display) {
  const controlEl = document.querySelector(`#${controlID}`);
  if(controlEl) {
    controlEl.style.display = display;
  }
}

function viewWebsites() {
   window.location.href = 'websites.html';
}

function logout() {
  localStorage.removeItem('username');

  fetch(`/api/auth/logout`, {
    method: 'delete'
  }).then(() => (window.location.href = '/'));
}
