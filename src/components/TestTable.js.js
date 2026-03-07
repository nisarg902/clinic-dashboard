import React from "react";

function TestTable({ tests }) {

  return (
    <div className="card p-3">

      <h4>Test Records</h4>

      <table className="table">

        <thead>
          <tr>
            <th>Patient</th>
            <th>Test</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {tests.map((test, index) => (
            <tr key={index}>
              <td>{test.patientName}</td>
              <td>{test.testName}</td>
              <td>{test.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TestTable;