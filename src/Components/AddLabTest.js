import React, { useState, useEffect } from 'react';

function AddLabTest({ patients, setTests }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testData, setTestData] = useState({ patientName: '', testName: '', status: 'Pending' });

  useEffect(() => {
    fetch("/MENU58.json")
      .then(res => {
        if (!res.ok) throw new Error("Catalog fetch failed");
        return res.json();
      })
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary shadow-sm" role="status"></div>
      <p className="mt-3 fw-bold text-muted">Accessing Vynetic Catalog...</p>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setTests(prev => [...prev, testData]);
    alert("Record Updated: Test Assigned.");
  };

  return (
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
      <div className="row g-0">
        <div className="col-md-4 bg-primary text-white p-5 d-flex flex-column justify-content-center align-items-center text-center">
          <i className="bi bi-clipboard-pulse mb-4" style={{ fontSize: '5rem' }}></i>
          <h3 className="fw-bold text-uppercase">Lab Portal</h3>
          <p className="opacity-75 small">Assign diagnostic protocols from the Vynetic Labs internal menu.</p>
        </div>
        <div className="col-md-8 bg-white p-5">
          <h4 className="mb-4 fw-bold text-dark border-bottom pb-2">Assign Lab Test</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label small fw-bold text-muted">PATIENT SELECTION</label>
              <select className="form-select p-3 bg-light border-0 shadow-none" onChange={(e) => setTestData({...testData, patientName: e.target.value})} required>
                <option value="">-- Choose Patient --</option>
                {patients.map((p, i) => <option key={i} value={p.name}>{p.name}</option>)}
              </select>
            </div>
            <div className="mb-4">
              <label className="form-label small fw-bold text-muted">DIAGNOSTIC TEST</label>
              <select className="form-select p-3 bg-light border-0 shadow-none" onChange={(e) => setTestData({...testData, testName: e.target.value})} required>
                <option value="">-- Choose Test --</option>
                {categories.map((cat, i) => (
                  <optgroup key={i} label={cat.category}>
                    {cat.products.map((p, j) => <option key={j} value={p}>{p}</option>)}
                  </optgroup>
                ))}
              </select>
            </div>
            <button className="btn btn-primary btn-lg w-100 shadow fw-bold py-3 mt-2" style={{borderRadius: '12px'}}>
              <i className="bi bi-plus-square me-2"></i> AUTHORIZE TEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddLabTest;