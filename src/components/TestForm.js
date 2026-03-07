import React, { useState } from "react";

function TestForm({ patients, addTest }) {

  const [form, setForm] = useState({
    patientName: "",
    testName: "",
    status: "pending"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTest(form);

    setForm({
      patientName: "",
      testName: "",
      status: "pending"
    });
  };

  return (
    <div className="card p-3 mb-3">

      <h4>Add Lab Test</h4>

      <form onSubmit={handleSubmit}>

        <select
          className="form-control mb-2"
          name="patientName"
          value={form.patientName}
          onChange={handleChange}
        >
          <option>Select Patient</option>

          {patients.map((p, index) => (
            <option key={index}>{p.name}</option>
          ))}

        </select>

        <input
          className="form-control mb-2"
          name="testName"
          placeholder="Test Name"
          value={form.testName}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

        <button className="btn btn-success">
          Add Test
        </button>

      </form>
    </div>
  );
}

export default TestForm;