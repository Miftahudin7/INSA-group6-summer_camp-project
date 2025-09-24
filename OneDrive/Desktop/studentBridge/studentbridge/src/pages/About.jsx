const About = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center">
        {/* <img
          src="/assets/about-hero.jpg"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover rounded-b-3xl shadow-lg"
        /> */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-500 drop-shadow-lg animate-fadeIn">
            About StudentBridge
          </h1>
          <p className="mt-4 text-gray-100 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeIn delay-100">
            Empowering underprivileged students through education and global
            support.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="max-w-6xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-3xl font-bold text-indigo-800 animate-fadeIn">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed animate-fadeIn delay-100">
          At StudentBridge, we believe education is a right, not a privilege.
          Our mission is to connect compassionate donors worldwide with students
          in need, providing school fees, books, and supplies that open doors to
          brighter futures.
        </p>
        <h2 className="text-3xl font-bold text-indigo-800 animate-fadeIn delay-200">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed animate-fadeIn delay-300">
          Founded by a passionate facilitator, StudentBridge started with the
          goal of creating a bridge of hope for underprivileged students. Our
          facilitator’s journey from community volunteer to global connector has
          inspired countless donors and students alike.
        </p>
      </section>

      {/* Facilitator Profile */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6 animate-slideUp">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">
            Meet Our Facilitator
          </h2>
          <img
            src="/assets/facilitator.jpg"
            alt="Facilitator"
            className="w-40 h-40 mx-auto rounded-full shadow-lg mb-4"
          />
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            Renumi Solomon has dedicated her life to supporting students in
            need. With years of experience in education and community
            development, she ensures every donation directly impacts students’
            lives and builds brighter futures.
          </p>
          <div className="flex justify-center mt-4 gap-4">
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

      {/* Testimonial / Impact Quote */}
      <section className="bg-indigo-600 py-16 text-center text-white px-6 animate-slideUp">
        <h2 className="text-3xl font-bold mb-4">What Donors Say</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto italic">
          "Supporting StudentBridge has been one of the most rewarding
          experiences of my life. Seeing students thrive because of our
          donations is truly inspiring."
        </p>
        <p className="mt-4 font-semibold">— Abdu Kr, Donor</p>
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

export default About;
