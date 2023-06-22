import logo from './assets/logo.svg';

import LogoutButton from './LogoutButton';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container ">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </a>
        <div className="d-flex">
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}
