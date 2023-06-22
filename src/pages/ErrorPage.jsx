import notFound from '../components/assets/notFound.png';
import { Link } from 'react-router-dom';
export default function ErrorPage() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img src={notFound} alt="not found" className="notfound-img" />
        <h1 className="display-1 mt-5">404</h1>
        <h2 className="display-2">Page Not Found</h2>
        <Link to="/" className="btn btn-primary ">
          Back to Home
        </Link>
      </div>
    </>
  );
}
