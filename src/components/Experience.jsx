import { useState } from "react";

function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="experience">
        <h2>Experience</h2>
        <label>
          Company Name:
          <input name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Title of Position:
          <input name="position" value={formData.position} onChange={handleChange} />
        </label>
        <label>
          Responsibilities:
          <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={3} />
        </label>
        <label>
          From:
          <input name="from" placeholder="e.g. Jan 2022" value={formData.from} onChange={handleChange} />
        </label>
        <label>
          Until:
          <input name="until" placeholder="e.g. Present" value={formData.until} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div className="experience">
      <h2>Experience</h2>
      <p>Company Name: {formData.company}</p>
      <p>Title of Position: {formData.position}</p>
      <p>Responsibilities: {formData.responsibilities}</p>
      <p>Date of Work: {formData.from} - {formData.until}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Experience;