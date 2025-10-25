import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_vqjmxsu", "template_jy4nucc", form.current, {
        publicKey: "6g0rq8vN720O74Ji5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-gray-50 py-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-900"
        >
          Get in Touch
        </h2>

        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-center text-lg text-gray-700">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            aria-label="Contact form"
            ref={form}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                aria-required="true"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-colors hover:cursor-pointer hover:bg-gray-800"
                aria-label="Send message"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              Or connect with me directly:
            </p>
            <div className="mt-4 space-x-4">
              <a
                href="mailto:alstrand.travis@gmail.com"
                className="inline-block rounded-lg border-2 border-gray-900 bg-white px-6 py-2 text-gray-900 transition-colors hover:bg-gray-50"
                aria-label="Send me an email"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/travis-alstrand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-gray-900 bg-white px-6 py-2 text-gray-900 transition-colors hover:bg-gray-50"
                aria-label="Visit my LinkedIn profile"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
