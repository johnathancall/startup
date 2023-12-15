import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ username, authState, onAuthChange }) {
  console.log(authState);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated username={username} onLogout={() => onAuthChange(username, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            username={username}
            onLogin={(loginUsername) => {
              onAuthChange(loginUsername, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}
