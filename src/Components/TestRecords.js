import React, { useState } from 'react';

function TestRecords({ tests = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = tests.filter(t => 
    t.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.testName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="card-header bg-white py-4 border-0">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h4 className="mb-0 fw-bold">
              <i className="bi bi-journal-text text-primary me-2"></i> 
              Vynetic Test Logs
            </h4>
          </div>
          <div className="col-md-6 mt-3 mt-md-0 text-end">
            <div className="input-group shadow-sm border rounded-pill overflow-hidden">
              <span className="input-group-text bg-white border-0 px-3">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input 
                type="text" 
                className="form-control border-0 px-2 shadow-none" 
                placeholder="Search by Patient or Test..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-light text-uppercase small fw-bold">
            <tr>
              <th className="ps-4 py-3 text-muted">Patient Name</th>
              <th className="text-muted">Diagnostic Test</th>
              <th className="text-center text-muted">Status</th>
              <th className="text-end pe-4 text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-5 text-muted">
                  <i className="bi bi-search fs-1 d-block mb-2 opacity-25"></i>
                  No matching records found for "{searchTerm}"
                </td>
              </tr>
            ) : (
              filteredTests.map((t, index) => (
                <tr key={index}>
                  <td className="ps-4 fw-bold text-dark">{t.patientName}</td>
                  <td className="text-muted">{t.testName}</td>
                  <td className="text-center">
                    <span className={`badge rounded-pill p-2 px-3 ${
                      t.status === 'Pending' ? 'bg-warning text-dark' : 'bg-success'
                    }`}>
                      <i className={`bi ${t.status === 'Pending' ? 'bi-clock-history' : 'bi-check-circle'} me-1`}></i>
                      {t.status}
                    </span>
                  </td>
                  <td className="text-end pe-4">
                    <button className="btn btn-sm btn-light border shadow-sm me-2 rounded-3">
                      <i className="bi bi-pencil text-primary"></i>
                    </button>
                    <button className="btn btn-sm btn-light border shadow-sm rounded-3">
                      <i className="bi bi-trash text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TestRecords;