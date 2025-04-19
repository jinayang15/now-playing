import { useState } from "react";

function AddShowForm() {
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

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <form
      className="flex flex-col rounded border-sky-200 border-4 p-5 ring-sky-300 ring-2 font-sora mx-auto"
      noValidate
    >
      <h2 className="text-2xl font-manrope font-bold py-1 mb-4 border-b-sky-200 border-b-1">
        Add a Show
      </h2>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={formData.title}
        onChange={handleFormChange}
      ></input>
      <label htmlFor="status">Status</label>
      <select id="status">
        <option defaultValue={""} disabled hidden>
          Select a status...
        </option>
        <option value="watching">Watching</option>
        <option value="completed">Completed</option>
        <option value="plan-to-watch">Plan To Watch</option>
        <option value="dropped">Dropped</option>
      </select>
      <label htmlFor="epsWatched">Episodes Watched</label>
      <input
        id="epsWatched"
        type="number"
        value={formData.epsWatched}
        onChange={handleFormChange}
      ></input>
      <label htmlFor="score">Score</label>
      <input
        id="score"
        type="number"
        value={formData.score}
        onChange={handleFormChange}
      ></input>
      <fieldset>
        <legend>Start Date</legend>
        <label htmlFor="startMonth">Month</label>
        <input
          id="startMonth"
          type="number"
          value={formData.startMonth}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="startDay">Day</label>
        <input
          id="startDay"
          type="number"
          value={formData.startDay}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="startYear">Year</label>
        <input
          id="startYear"
          type="number"
          value={formData.startYear}
          onChange={handleFormChange}
        ></input>
      </fieldset>
      <fieldset>
        <legend>End Date</legend>
        <label htmlFor="endMonth">Month</label>
        <input
          id="endMonth"
          type="number"
          value={formData.endMonth}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="endDay">Day</label>
        <input
          id="endDay"
          type="number"
          value={formData.endDay}
          onChange={handleFormChange}
        ></input>
        <label htmlFor="endYear">Year</label>
        <input
          id="endYear"
          type="number"
          value={formData.endYear}
          onChange={handleFormChange}
        ></input>
      </fieldset>
    </form>
  );
}

export default AddShowForm;
