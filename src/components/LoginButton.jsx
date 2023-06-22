import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primary m-1" onClick={() => loginWithRedirect()}>
      Log in
    </button>
  );
};

export default LoginButton;
