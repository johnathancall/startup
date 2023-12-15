import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';

import {Login} from './login/login';
import {Websites} from './websites/websites';
import {About} from './about/about';
import {AuthState} from './login/authState';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [username, setUsername] = React.useState(localStorage.getItem('username') || '');
  const currentAuthState = username ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  console.log(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Bookmarker++<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
	      {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='Websites'>
                    Websites
                  </NavLink>
                </li>
	      )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='About'>
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

	<Routes>
	  <Route path='/' element={
	    <Login 
	      username = {username} 
	      authState = {authState} 
	      onAuthChange = {(username, authState) => {
		setAuthState(authState);
		setUsername(username);
	      }}
	    />
	  } exact />
	  <Route path='/websites' element={<Websites />} />
  	  <Route path='/about' element={<About />} />
  	  <Route path='*' element={<NotFound />} /> 
	</Routes>


        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Johnathan Call</span>
            <a className='text-reset' href='https://github.com/johnathancall/startup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
