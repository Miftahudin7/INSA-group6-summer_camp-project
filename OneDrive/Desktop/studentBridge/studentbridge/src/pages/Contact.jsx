const Contact = () => {
  return (
    <div className="space-y-16 py-16 bg-gray-50">
      {/* Page Header */}
      <section className="text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-lg animate-fadeIn">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeIn delay-100">
          Have questions or want to support our cause? Send us a message and
          we’ll get back to you promptly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto px-6 animate-slideUp">
        <form className="flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-2xl">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 py-3 rounded-xl shadow-lg hover:scale-105 hover:from-yellow-300 hover:to-yellow-400 transition-transform duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info & Social Links */}
      <section className="max-w-3xl mx-auto px-6 text-center space-y-4 animate-fadeIn delay-100">
        <h2 className="text-2xl font-bold mb-2 text-indigo-800">Reach Us</h2>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:facilitator@example.com"
            className="text-indigo-600 hover:underline"
          >
            keroabdurehman@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          Phone:{" "}
          <a href="tel:+1234567890" className="text-indigo-600 hover:underline">
            +251982310974
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-800 transition"
          >
            Facebook
          </a>
        </div>
      </section>

      {/* Optional Impact Quote */}
      <section className="max-w-3xl mx-auto px-6 bg-indigo-600 text-white rounded-2xl shadow-lg p-8 text-center animate-slideUp">
        <p className="text-lg sm:text-xl italic">
          "Your questions and support help us provide education and hope to
          countless students. Every message matters."
        </p>
        <p className="mt-4 font-semibold">— StudentBridge Team</p>
      </section>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Contact;
