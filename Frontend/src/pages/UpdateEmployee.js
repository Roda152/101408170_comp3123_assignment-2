import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee updated:', { id, name, department });
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
