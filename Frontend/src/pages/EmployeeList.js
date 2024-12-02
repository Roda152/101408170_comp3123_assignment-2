import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const employees = [
    { id: 1, name: 'John Doe', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', department: 'HR' },
  ];

  return (
    <div>
      <h1>Employee List</h1>
      <Link to="/employees/add"><button>Add Employee</button></Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>
                <Link to={`/employees/${employee.id}`}><button>View</button></Link>
                <Link to={`/employees/update/${employee.id}`}><button>Edit</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
