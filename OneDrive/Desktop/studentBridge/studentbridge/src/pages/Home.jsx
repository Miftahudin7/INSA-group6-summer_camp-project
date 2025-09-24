import StudentCard from "../components/StudentCard";
import students from "../data/students";

const stats = [
  { label: "Students Supported", value: 200 },
  { label: "Donors Worldwide", value: 1000 },
  { label: "Countries Connected", value: 10 },
];

const Home = () => {
  const calculateImpact = () => {
    const amountInput = document.getElementById("donationAmount");
    const resultDiv = document.getElementById("impactResult");
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
      resultDiv.textContent = "Please enter a valid donation amount.";
      return;
    }

    // Example calculation logic:
    const costPerStudent = 50; // $50 covers school fees, books, and supplies per student
    const studentsSupported = Math.floor(amount / costPerStudent);

    resultDiv.textContent = `Your donation of $${amount.toFixed(
      2
    )} can support approximately ${studentsSupported} student${
      studentsSupported > 1 ? "s" : ""
    } with school fees, books, and supplies.`;
  };

  return (
    <div className="space-y-20">
      {/* Hero Image */}
      <section className="w-full h-[60vh]">
        <img
          src="/assets/Ethiopia-banner-image.jpg"
          alt="Ethiopia Banner"
          className="w-full h-full object-cover rounded-b-3xl shadow-lg animate-slideUp"
        />
      </section>

      {/* Hero Text Below Image */}
      <section className="max-w-4xl mx-auto text-center px-6 mt-10 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-lg">
          A Bridge of Hope for Underprivileged Students
        </h1>
        <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-800">
          StudentBridge connects compassionate donors worldwide with students in
          need of vital educational support.
        </p>
        <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-700">
          We believe education is a right, not a privilege. Through
          StudentBridge, underprivileged students gain access to school fees,
          books, and supplies — giving them the chance to pursue their dreams
          and break the cycle of poverty.
        </p>
        <p className="text-base sm:text-lg mb-10 leading-relaxed text-gray-700">
          Guided by a trusted facilitator, we ensure every donation directly
          impacts students’ lives, opening doors to brighter futures.
        </p>
        <a
          href="/donate"
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-8 py-4 rounded-xl shadow-lg font-semibold hover:scale-105 hover:from-yellow-300 hover:to-yellow-400 transition-transform duration-300"
        >
          Donate Now
        </a>
      </section>

      {/* Impact Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center px-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`animate-fadeIn delay-${index * 100}`}
            >
              <p className="text-5xl font-extrabold text-indigo-600">
                {stat.value}
              </p>
              <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Student Stories */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-600 animate-fadeIn">
          Stories of Impact Made Possible by Donors
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600 animate-fadeIn delay-100">
          Because of generous donors, some students are now thriving in their
          studies without obstacles — while others still need your support to
          achieve the same.
        </p>

        {/* Supported Students */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-green-700">
            🎓 Thriving Students
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                id: 1,
                name: "Ali Hassen",
                message:
                  "With donor support, Ali is now learning without obstacles and focusing fully on his education.",
              },
              {
                id: 2,
                name: "Almaz Kebede",
                message:
                  "Almaz is happy and motivated — she studies with confidence, thanks to the generosity of donors.",
              },
              {
                id: 3,
                name: "Chaltu Kasim",
                message:
                  "Chaltu now enjoys her education without worry and is building a brighter future through learning.",
              },
            ].map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl p-6 transform hover:scale-105 transition duration-500 hover:shadow-2xl animate-slideUp delay-100"
              >
                <div className="mb-4 font-semibold text-lg text-indigo-700">
                  {student.name}
                </div>
                <p className="text-gray-700 italic">{student.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Students Still Needing Support */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-red-700">
            🌟 Students Who Still Need Support
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {[
              {
                id: 4,
                name: "Abebe Worku",
                message:
                  "Abebe dreams of continuing his studies but needs donor support to make it possible.",
              },
              {
                id: 5,
                name: "Kemal Ibrahim",
                message:
                  "Kemal is determined to learn and succeed, but he requires funding to stay in school.",
              },
              {
                id: 6,
                name: "Sara Solomon",
                message:
                  "Sara is eager to focus on her education, and with your support, she can overcome financial barriers.",
              },
            ].map((student) => (
              <div
                key={student.id}
                className="bg-white rounded-2xl p-6 transform hover:scale-105 transition duration-500 hover:shadow-2xl animate-slideUp delay-100"
              >
                <div className="mb-4 font-semibold text-lg text-indigo-700">
                  {student.name}
                </div>
                <p className="text-gray-700 italic">{student.message}</p>
                <a
                  href="/donate"
                  className="mt-4 inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-sm font-semibold"
                >
                  Support {student.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Video */}
      <section className="max-w-5xl mx-auto text-center px-6 py-20 animate-slideUp">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-600">
          🎥 Hear from Our Facilitator
        </h2>
        <p className="mb-8 text-gray-600 text-lg">
          Discover how donor support has created opportunities for students to
          dream bigger and achieve more.
        </p>
        <video
          className="w-full rounded-3xl shadow-2xl border-4 border-indigo-100 hover:scale-[1.02] transition-transform duration-500"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/assets/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* How Donations Work */}
      <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-indigo-800 animate-fadeIn">
            How Your Donation Helps
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:translate-y-[-5px] animate-slideUp">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                You Donate
              </h3>
              <p className="text-gray-600">
                Choose to support a student, class, or the general fund.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:translate-y-[-5px] animate-slideUp delay-100">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                They Learn
              </h3>
              <p className="text-gray-600">
                Funds provide school fees, books, and essential supplies.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:translate-y-[-5px] animate-slideUp delay-200">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                Future Built
              </h3>
              <p className="text-gray-600">
                Your support creates lasting opportunities for brighter futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Campaigns */}
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14 text-indigo-800 animate-slideUp">
            Current Campaigns
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
            {/* Campaign Card 1: Support a Student */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 animate-fadeUp">
              <img
                src="/images/support-student.jpg"
                alt="Support a Student"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                  Support a Student
                </h3>
                <p className="text-gray-700 mb-4">
                  Sponsor a student’s education with tuition, books, and
                  supplies.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-indigo-600 font-semibold mb-4">
                  Raised: $3,000 of $5,000
                </p>

                <a
                  href="/donate"
                  className="inline-block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Sponsor a Student
                </a>

                <blockquote className="text-gray-700 italic mt-4 text-sm">
                  "Your support helped me continue my studies without worry!"
                </blockquote>
              </div>
            </div>

            {/* Campaign Card 2: Support a Class */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 animate-fadeUp">
              <img
                src="/images/support-class.jpg"
                alt="Support a Class"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                  Support a Class
                </h3>
                <p className="text-gray-700 mb-4">
                  Provide resources and supplies for an entire class of
                  students.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <p className="text-indigo-600 font-semibold mb-4">
                  Raised: $2,250 of $5,000
                </p>

                <a
                  href="/donate"
                  className="inline-block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Fund a Class
                </a>

                <blockquote className="text-gray-700 italic mt-4 text-sm">
                  "Our classroom now has everything we need to learn together!"
                </blockquote>
              </div>
            </div>

            {/* Campaign Card 3: Donate to General Fund */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105 animate-fadeUp">
              <img
                src="/images/general-fund.jpg"
                alt="General Fund"
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-indigo-700 mb-3">
                  Donate to General Fund
                </h3>
                <p className="text-gray-700 mb-4">
                  Flexible donations to support overall programs and
                  initiatives.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-yellow-400 h-3 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <p className="text-indigo-600 font-semibold mb-4">
                  Raised: $2,500 of $5,000
                </p>

                <a
                  href="/donate"
                  className="inline-block w-full text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Donate to Fund
                </a>

                <blockquote className="text-gray-700 italic mt-4 text-sm">
                  "I feel proud knowing my contribution supports many students!"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Trusted Partners Section */}
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 animate-slideUp">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            We collaborate with trusted organizations to make a bigger impact
            for students and communities.
          </p>

          <div
            className="flex flex-wrap justify-center items-center gap-10"
            ref={(el) => {
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    const logos = el.querySelectorAll("a");
                    logos.forEach((logo, index) => {
                      setTimeout(() => {
                        logo.classList.add("opacity-100", "translate-y-0");
                        logo.classList.remove("opacity-0", "translate-y-10");
                      }, index * 200);
                    });
                    observer.disconnect();
                  }
                },
                { threshold: 0.2 }
              );
              observer.observe(el);
            }}
          >
            {/* Partner 1 */}
            <a
              href="https://partner1.org"
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 opacity-0 translate-y-10 transition-all duration-500"
            >
              <img
                src="/images/partner1.png"
                alt="Partner 1"
                className="h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Partner 2 */}
            <a
              href="https://partner2.org"
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 opacity-0 translate-y-10 transition-all duration-500"
            >
              <img
                src="/images/partner2.png"
                alt="Partner 2"
                className="h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Partner 3 */}
            <a
              href="https://partner3.org"
              target="_blank"
              rel="noopener noreferrer"
              className="h-16 opacity-0 translate-y-10 transition-all duration-500"
            >
              <img
                src="/images/partner3.png"
                alt="Partner 3"
                className="h-16 object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-indigo-600 py-16 text-center text-white animate-slideUp">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to receive the latest stories and campaign
          updates.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-auto flex-1 shadow-md"
          />
          <button className="px-6 py-3 rounded-lg bg-yellow-400 text-indigo-900 font-semibold shadow hover:bg-yellow-300 hover:scale-105 transition duration-300">
            Subscribe
          </button>
        </form>
      </section>
      {/* Impact Calculator */}
      <section className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 py-16 animate-slideUp">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">
            See Your Impact
          </h2>
          <p className="text-gray-700 mb-8">
            Enter your donation amount to see how many students you can support
            and what it provides.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <input
              type="number"
              min="1"
              placeholder="Donation Amount ($)"
              className="px-4 py-3 rounded-lg shadow w-full sm:w-1/3 text-gray-800"
              id="donationAmount"
            />
            <button
              className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg shadow hover:bg-yellow-300 hover:scale-105 transition duration-300"
              onClick={() => calculateImpact()}
            >
              Calculate Impact
            </button>
          </div>

          <div
            id="impactResult"
            className="text-gray-800 text-lg font-semibold mt-4"
          ></div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-center text-white animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6">Your Support Builds Futures</h2>
        <a
          href="/donate"
          className="inline-block bg-yellow-400 text-indigo-900 px-8 py-4 rounded-xl shadow-md hover:bg-yellow-300 transition text-lg font-semibold"
        >
          Donate Today
        </a>
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
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
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

export default Home;
