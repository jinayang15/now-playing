function Delete({ onClick }) {
  return (
    <div className="absolute right-4" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>
  );  
}

function AddShowForm({ formData, setFormData, onClose }) {
  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  return (
    <form
      className="relative flex flex-col rounded border-sky-200 border-4 p-5 ring-sky-300 ring-2 font-sora"
      noValidate
    >
      <h2 className="text-2xl font-manrope font-bold py-1 mb-4 border-b-sky-200 border-b-1">
        Add a Show
      </h2>
      <Delete onClick={onClose} />
      <table className="border-separate border-spacing-x-4 border-spacing-y-2 [&_td]:m-2">
        <tr>
          <td>
            <label htmlFor="title" className="col-span-1">
              Title
            </label>
          </td>
          <td>
            <input
              name="title"
              id="title"
              type="text"
              value={formData.title}
              onChange={handleFormChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <label for="status">Status</label>
          </td>
          <td>
            <select name="status" className="">
              {[
                "Watching",
                "Completed",
                "On-Hold",
                "Dropped",
                "Plan to Watch",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="epsWatched">Episodes Watched</label>
          </td>
          <td>
            <input
              name="epsWatched"
              id="epsWatched"
              type="number"
              value={formData.epsWatched}
              onChange={handleFormChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="score">Score</label>
          </td>
          <td>
            <input
              name="score"
              id="score"
              type="number"
              value={formData.score}
              onChange={handleFormChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Start Date</td>
          <td>
            <label htmlFor="startMonth">Month</label>
            <input
              name="startMonth"
              id="startMonth"
              type="number"
              value={formData.startMonth}
              onChange={handleFormChange}
            ></input>
            <label htmlFor="startDay">Day</label>
            <input
              name="startDay"
              id="startDay"
              type="number"
              value={formData.startDay}
              onChange={handleFormChange}
            ></input>
            <label htmlFor="startYear">Year</label>
            <input
              name="startYear"
              id="startYear"
              type="number"
              value={formData.startYear}
              onChange={handleFormChange}
            ></input>
          </td>
        </tr>
        <tr>
          <td>End Date</td>
          <td>
            <label htmlFor="endMonth">Month</label>
            <input
              name="endMonth"
              id="endMonth"
              type="number"
              value={formData.endMonth}
              onChange={handleFormChange}
            ></input>
            <label htmlFor="endDay">Day</label>
            <input
              name="endDay"
              id="endDay"
              type="number"
              value={formData.endDay}
              onChange={handleFormChange}
            ></input>
            <label htmlFor="endYear">Year</label>
            <input
              name="endYear"
              id="endYear"
              type="number"
              value={formData.endYear}
              onChange={handleFormChange}
            ></input>
          </td>
        </tr>
      </table>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddShowForm;
