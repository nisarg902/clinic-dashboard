import React, { useState } from "react";
import PatientForm from "./components/PatientForm";
import TestForm from "./components/TestForm";
import TestTable from "./components/TestTable";

function App() {
   const [search,setSearch] = useState("")
   const filteredTests = tests.filter((t)=>
t.patientName.toLowerCase().includes(search.toLowerCase())
)
  const [patients, setPatients] = useState([]);
  const [tests, setTests] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const addTest = (test) => {
    setTests([...tests, test]);
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Clinic Dashboard</h2>

      <PatientForm addPatient={addPatient} />

      <TestForm patients={patients} addTest={addTest} />

      <TestTable tests={tests} />

    </div>
  );
}

export default App;