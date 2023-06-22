import {
  BsFillEnvelopeFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
} from 'react-icons/bs';

export default function ClientTableInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Client Info</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <BsFillPersonFill className="me-2" /> {client.name}
        </li>
        <li className="list-group-item">
          <BsFillEnvelopeFill className="me-2" /> {client.email}
        </li>
        <li className="list-group-item">
          <BsFillTelephoneFill className="me-2" /> {client.phone}
        </li>
      </ul>
    </>
  );
}
