import React from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = { id, name: 'John Doe', department: 'Engineering' }; 

  return (
    <div>
      <h1>Employee Details</h1>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
};

export default EmployeeDetails;
