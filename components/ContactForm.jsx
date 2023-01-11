import axios from "axios";
import { useState } from "react";
import Error from "./Error";
import Success from "./Success";

const ContactForm = () => {
  const [data, setData] = useState({ email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ state: false, message: "" });
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.email === "" || data.message === "") {
      setError({ state: true, message: `Error! Don't leave empty inputs` });
      return;
    }
    setError(false);
    const res = await fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        subject: "New message from BuscaTuTorrent",
        message: data.message,
      }),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setError(true);
      return;
    }
    setError(false);
    setSuccess(true);
    setData({ email: "", message: "" });
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <div className="flex flex-col md:w-1/4 w-3/4">
        <label htmlFor="email" className="mt-3 mb-1 text-left">
          Email
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          className="mb-2 rounded"
          value={data.email}
        />
      </div>
      <div className="flex flex-col md:w-1/4 w-3/4">
        <label htmlFor="message" className="mt-3 mb-1 text-left">
          Message
        </label>
        <textarea
          onChange={handleChange}
          name="message"
          id="message"
          cols="30"
          value={data.message}
          rows="10"
          className="rounded mb-5"
          placeholder="Write your message here..."
        />
      </div>
      <div className="md:w-1/4 w-3/4 flex flex-col">
        <button
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </div>
      {success && <Success />}
      {error.state && <Error message={error.message} />}
    </form>
  );
};

export default ContactForm;
