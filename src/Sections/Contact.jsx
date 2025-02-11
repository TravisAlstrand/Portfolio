import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
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
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
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
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
                aria-required="true"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="rounded-lg bg-gray-900 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-gray-800"
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
                href="mailto:your.email@example.com"
                className="inline-block rounded-lg border-2 border-gray-900 px-6 py-2 text-gray-900 transition-colors hover:bg-gray-50"
                aria-label="Send me an email"
              >
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg border-2 border-gray-900 px-6 py-2 text-gray-900 transition-colors hover:bg-gray-50"
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
