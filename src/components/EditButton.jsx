import { useState } from 'react';
import { AiFillFileAdd } from 'react-icons/ai';
import { GET_PROJECTS } from '../queries/projectQuery';

export default function EditButton({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState('');
  return (
    <>
      <div className="mt-5">
        <h3>Edit Project</h3>
        <form>
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label className="form-label">Description</label>
          <textarea
            type="email"
            className="form-control"
            id="email"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <label className="form-label">Status</label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="NotStarted">Not Started</option>
            <option value="InProgress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </form>
      </div>
    </>
  );
}
