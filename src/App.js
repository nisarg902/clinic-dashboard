import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import RegisterPatient from './Components/RegisterPatient';
import AddLabTest from './Components/AddLabTest';
import TestRecords from './Components/TestRecords';

function App() {
  const [patients, setPatients] = useState([]);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch("/patients.json")
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(err => console.log("Init Error"));
  }, []);

  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-2 p-0 border-end">
            <Sidebar />
          </div>

          <div className="col-md-10 bg-light min-vh-100">
            <div className="p-4">
              <Routes>
                <Route path="/" element={<Dashboard patients={patients} tests={tests} />} />
                <Route path="/register" element={<RegisterPatient addPatient={addPatient} />} />
                <Route path="/add-test" element={<AddLabTest patients={patients} setTests={setTests} />} />
                <Route path="/records" element={<TestRecords tests={tests} />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;