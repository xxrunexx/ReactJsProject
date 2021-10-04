import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <a className="nav-link" onClick={() => logout()}>
        <strong>
        Keluar
        </strong>
      </a>
    )
  )
}

export default LogoutButton;