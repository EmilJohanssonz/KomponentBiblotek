import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Skicka formulärdata här
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
