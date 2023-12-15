import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('username');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'></div>
      <button type="submit" onClick={() => navigate('/websites')}>
        View Websites
      </button>
      <button type="submit" onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
}
