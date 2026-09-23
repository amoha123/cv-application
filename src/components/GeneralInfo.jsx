import { useState } from "react";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      <form onSubmit={handleSubmit} className="general-info">
        <h2>Personal Info</h2>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  return (
    <div className="general-info">
      <h2>Personal Info</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Phone Number: {formData.phone}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default GeneralInfo;