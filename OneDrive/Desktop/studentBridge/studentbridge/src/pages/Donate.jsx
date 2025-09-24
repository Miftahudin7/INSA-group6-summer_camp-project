const Donate = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center">
        {/* <img
          src="/assets/donateBanner.jpg"
          alt="Donate Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-b-3xl shadow-lg"
        /> */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-lg animate-fadeIn">
            Support Our Cause
          </h1>
          <p className="mt-4 text-gray-100 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeIn delay-100">
            Your contribution can change lives. Help students access education,
            books, and supplies.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 className="text-3xl font-bold text-indigo-800 animate-fadeIn">
          Choose How You Want to Help
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Support a Student
          </button>
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Support a Class
          </button>
          <button className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            Donate to General Fund
          </button>
        </div>
      </section>

      {/* Donation Form */}
      <section className="max-w-2xl mx-auto px-6 animate-slideUp">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          Make a Donation
        </h2>
        <form className="flex flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="number"
            placeholder="Donation Amount ($)"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Suggested Amounts */}
          <div className="flex justify-between mt-2">
            {[25, 50, 100, 200].map((amt) => (
              <button
                key={amt}
                type="button"
                className="px-4 py-2 bg-indigo-200 text-indigo-900 rounded-lg hover:bg-indigo-300 transition"
                onClick={() => {
                  const input = document.querySelector('input[type="number"]');
                  input.value = amt;
                }}
              >
                ${amt}
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-indigo-900 py-3 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform duration-300 font-semibold mt-4"
          >
            Donate Now
          </button>
        </form>
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

export default Donate;
