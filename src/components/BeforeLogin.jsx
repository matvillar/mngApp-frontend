import React from 'react';
import LoginButton from './LoginButton';

const BeforeLogin = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="border rounded p-4 my-4">
            <h1 className="display-4">Welcome to Project Management Tracker</h1>
            <p className="lead">
              This is a simple application to track the status of projects.
            </p>
            <p className="lead">
              <LoginButton />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeLogin;
