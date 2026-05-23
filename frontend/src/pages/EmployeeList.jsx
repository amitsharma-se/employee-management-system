import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList() {
  // Static array of employees to view on our screen for now
  const [employees] = useState([
    { id: 1, name: "Amit Sharma", email: "amit@company.com", department: "IT", designation: "Software Engineer" },
    { id: 2, name: "Saniya Patel", email: "saniya@company.com", department: "HR", designation: "HR Manager" },
    { id: 3, name: "Rahul Verma", email: "rahul@company.com", department: "Sales", designation: "Sales Executive" }
  ]);

  return (
    <div className="ems-container">
      <div className="header-section">
        <h2>Employee Directory</h2>
        <button className="add-btn">+ Add Employee</button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td><strong>{emp.name}</strong></td>
              <td>{emp.email}</td>
              <td><span className="badge dept-badge">{emp.department}</span></td>
              <td>{emp.designation}</td>
              <td>
                <button className="action-btn edit-btn">Edit</button>
                <button className="action-btn delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;