import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_edg9rfd",
        "template_9ihmnpo",
        form.current,
        "BiHkl6IYqAK-p35rK"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-12 text-white bg-[#232325] h-auto" id="contact">
      <div className="py-6 max-w-[1200px] mx-auto text-gray-900 m-10">
        <div className="mx-auto px-6 md:px-9">
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-3xl text-white">
                Let's <span>Connect</span>
              </h2>
              <p className="text-gray-500">Hey There! Nice to Meet You!</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="max-w-6xl p-5 md:p-12">
          <input
            type="text"
            name="name"
            placeholder="Your Name ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
            required
          />

          <button
            type="submit"
            className={`w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color flex justify-center items-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>

          {success && (
            <p className="mt-3 text-green-500 font-medium text-center">{success}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
