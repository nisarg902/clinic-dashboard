import React, { useState } from 'react';

function RegisterPatient({ addPatient }) {
  const [formData, setFormData] = useState({ name: '', phone: '', age: '', gender: 'Male' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(formData);
    setFormData({ name: '', phone: '', age: '', gender: 'Male' });
    alert("✅ Patient Record Saved Successfully!");
  };

  return (
    <div className="container py-4">
      <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
        <div className="row g-0">
          {/* Left Side: Info Section */}
          <div className="col-md-4 bg-primary text-white p-5 d-flex flex-column justify-content-center align-items-center text-center">
            <i className="bi bi-person-bounding-box mb-4" style={{ fontSize: '5rem' }}></i>
            <h3 className="fw-bold">Patient Admission</h3>
            <p className="opacity-75">Naye patient ki basic info yahan enter karein taaki records maintain rahein.</p>
          </div>

          {/* Right Side: Form Section */}
          <div className="col-md-8 bg-white p-5">
            <h4 className="mb-4 fw-bold text-dark border-bottom pb-2">Registration Form</h4>
            
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Full Name */}
                <div className="col-md-12 mb-4">
                  <label className="form-label small fw-bold text-muted">FULL NAME</label>
                  <div className="input-group border rounded-3 p-1">
                    <span className="input-group-text bg-transparent border-0"><i className="bi bi-person text-primary"></i></span>
                    <input type="text" className="form-control border-0 shadow-none" placeholder="Enter full name"
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="col-md-6 mb-4">
                  <label className="form-label small fw-bold text-muted">CONTACT NUMBER</label>
                  <div className="input-group border rounded-3 p-1">
                    <span className="input-group-text bg-transparent border-0"><i className="bi bi-telephone text-primary"></i></span>
                    <input type="number" className="form-control border-0 shadow-none" placeholder="10-digit mobile number"
                      value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                  </div>
                </div>

                {/* Age & Gender */}
                <div className="col-md-3 mb-4">
                  <label className="form-label small fw-bold text-muted">AGE</label>
                  <input type="number" className="form-control border rounded-3 p-2 py-2" placeholder="Age"
                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} required />
                </div>

                <div className="col-md-3 mb-4">
                  <label className="form-label small fw-bold text-muted">GENDER</label>
                  <select className="form-select border rounded-3 p-2" value={formData.gender} 
                    onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-primary btn-lg w-100 shadow fw-bold py-3" style={{ borderRadius: '12px' }}>
                  <i className="bi bi-cloud-arrow-up-fill me-2"></i> REGISTER PATIENT
                </button>
                <p className="text-center text-muted small mt-3">All data is encrypted and saved in Nisarg Medical database.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;