import React from 'react';

function Dashboard({ patients = [], tests = [] }) {
  const stats = [
    { title: "TOTAL PATIENTS", value: patients.length, icon: "bi-people", color: "primary" },
    { title: "LAB TESTS", value: tests.length, icon: "bi-flask", color: "info" },
    { title: "PENDING", value: tests.filter(t => t.status === 'Pending').length, icon: "bi-hourglass-split", color: "warning" },
    { title: "COMPLETED", value: tests.filter(t => t.status === 'Completed').length, icon: "bi-check-all", color: "success" }
  ];

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
        <h2 className="fw-bold m-0 text-dark">Vynetic Analytics</h2>
        <span className="badge bg-white text-dark border p-2 px-3 shadow-sm rounded-pill">
          <i className="bi bi-calendar3 me-2 text-primary"></i> 
          {new Date().toLocaleDateString('en-GB')}
        </span>
      </div>

      <div className="row mb-4">
        {stats.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card border-0 shadow-sm p-4 h-100 border-start border-4" style={{ borderColor: `var(--bs-${item.color})` }}>
              <div className="d-flex align-items-center">
                <div className={`bg-${item.color} bg-opacity-10 p-3 rounded-circle me-3`}>
                  <i className={`bi ${item.icon} text-${item.color} fs-3`}></i>
                </div>
                <div>
                  <p className="text-muted mb-0 small fw-bold text-uppercase">{item.title}</p>
                  <h2 className="fw-bold mb-0">{item.value}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary text-white p-5 rounded-4 shadow-sm position-relative overflow-hidden">
        <div className="position-relative z-index-1">
          <h1 className="display-6 fw-bold">Vynetic Labs Portal</h1>
          <p className="lead mb-0">Streamlined management of clinical diagnostics and patient data records.</p>
        </div>
        <i className="bi bi-activity position-absolute end-0 bottom-0 m-n3 opacity-25" style={{fontSize: '150px'}}></i>
      </div>
    </div>
  );
}

export default Dashboard;