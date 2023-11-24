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
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="sm:w-full md:w-[600px] lg:w-[800px] bg-white p-8 rounded-lg shadow-md">
        <div className="text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Hubungi Kami</div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Nama depan" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded-md" placeholder="Nama belakang" />
          </div>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2 mt-4 border rounded-md" placeholder="Subjek" />
          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 mt-4 border rounded-md" placeholder="Pesan" />
          <div className="mt-4">
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
