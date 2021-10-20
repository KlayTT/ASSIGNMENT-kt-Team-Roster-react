import React from 'react';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
import { signOutUser } from '../auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <div className="text-center mb-3">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          onClick={() => history.push('/team')}
          type="button"
          className="btn btn-primary"
        >
          Team
        </button>
        <button
          onClick={() => history.push('/new')}
          type="button"
          className="btn btn-success"
        >
          New Player
        </button>
        <button onClick={signOutUser} type="button" className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </div>
  );
}
