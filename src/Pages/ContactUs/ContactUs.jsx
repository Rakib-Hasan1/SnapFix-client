import React from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const message = form.message.value;

    console.log({ email, message });

    Swal.fire({
      title: "Message Sent!",
      text: "We have received your message. We'll contact you soon.",
      icon: "success",
      confirmButtonColor: "#2563eb",
    });

    form.reset();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 lg:p-12 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-colors duration-300">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@email.com"
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold mb-1 text-gray-800 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <h3 className="text-xl font-semibold dark:text-white">Reach Us At</h3>
          <p>
            📍 <strong>Address:</strong> 123 Main Street, Dhaka, Bangladesh
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:support@yourcompany.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              support@yourcompany.com
            </a>
          </p>
          <p>
            📞 <strong>Phone:</strong> +880 1234-567890
          </p>
          <p>
            ⏰ <strong>Working Hours:</strong> Sun – Thu, 10 AM – 6 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
