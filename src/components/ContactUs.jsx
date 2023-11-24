import React, { useState } from "react";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <div>
        <div>
          <div>Hubungi Kami</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Nama depan" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Nama belakang" />
            </div>
            <div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subjek" />
            </div>
            <div>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Pesan" />
            </div>
            <div>
              <button type="submit">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
