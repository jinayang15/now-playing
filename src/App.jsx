import { useState } from "react";
import AddShowForm from "./components/AddShowForm";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    status: "watching",
    epsWatched: 0,
    score: 0,
    startMonth: "",
    startDay: "",
    startYear: "",
    endMonth: "",
    endDay: "",
    endYear: "",
  });

  function handleFormSubmit() {
    
  }

  return (
    <>
      {showForm && (
        <AddShowForm
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

export default App;
