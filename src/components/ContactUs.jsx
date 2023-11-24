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
    <div className="w-[1512px] h-[686px] px-20 py-16 bg-slate-50 flex-col justify-start items-start gap-16 inline-flex">
      <div className="w-[1280px] h-[558px] px-8 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch pb-10 justify-center items-center inline-flex">
          <div className="text-black text-[40px] font-bold leading-[60px]">Hubungi Kami</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="self-stretch h-[388px] p-8 bg-slate-100 rounded-lg flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="grow shrink basis-0 self-stretch bg-gray-200 rounded-xl shadow justify-start items-start flex" placeholder="Nama depan" />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="grow shrink basis-0 self-stretch bg-gray-200 rounded-xl shadow justify-start items-start flex" placeholder="Nama belakang" />
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="grow shrink basis-0 self-stretch bg-gray-200 rounded-xl shadow justify-start items-start flex" placeholder="Subjek" />
            </div>
            <div className="self-stretch h-[116px] flex-col justify-start items-start gap-2 flex">
              <textarea name="message" value={formData.message} onChange={handleChange} className="w-[1152px] h-[116px] bg-gray-200 rounded-xl shadow justify-start items-start inline-flex" placeholder="Pesan" />
            </div>
            <div className="self-stretch justify-start items-start gap-2 inline-flex">
              <button type="submit" className="w-[124px] h-11 px-[86px] py-[18px] bg-green-500 rounded-xl justify-center items-center gap-2.5 flex">
                <div className="text-white text-[14px] font-bold leading-none">Kirim</div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
