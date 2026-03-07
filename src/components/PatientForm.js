import React, { useState } from "react";

function PatientForm({ addPatient }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    gender: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(form);

    setForm({
      name: "",
      phone: "",
      age: "",
      gender: ""
    });
  };

  return (
    <div className="card p-3 mb-3">

      <h4>Register Patient</h4>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <button className="btn btn-primary">
          Add Patient
        </button>

      </form>
    </div>
  );
}

export default PatientForm;