import { useState } from "react";

function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    school: "",
    title: "",
    date: "",
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
      <form onSubmit={handleSubmit} className="education">
        <h2>Education</h2>
        <label>
          School Name:
          <input name="school" value={formData.school} onChange={handleChange} />
        </label>
        <label>
          Title of Study:
          <input name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Date of Study:
          <input name="date" value={formData.date} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div className="education">
      <h2>Education</h2>
      <p>School Name: {formData.school}</p>
      <p>Title of Study: {formData.title}</p>
      <p>Date of Study: {formData.date}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default Education;