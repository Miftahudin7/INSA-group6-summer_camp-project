import StudentCard from "../components/StudentCard";
import studentsData from "../data/students";

const Students = () => {
  // Separate students into two groups
  const thrivingStudents = studentsData.filter((s) =>
    ["Ali Hassen", "Almaz Kebede", "Chaltu Kasim"].includes(s.name)
  );

  const needingSupport = studentsData.filter((s) =>
    ["Abebe Worku", "Kemal Ibrahim", "Sara Solomon"].includes(s.name)
  );

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center text-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 opacity-80 rounded-b-3xl"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            Meet Our Students
          </h1>
          <p className="mt-4 text-gray-100 text-lg sm:text-xl max-w-2xl mx-auto animate-fadeIn delay-100">
            Thanks to your generosity, some students are thriving in their
            studies, while others still need your support to reach their full
            potential.
          </p>
        </div>
      </section>

      {/* Thriving Students */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center animate-fadeIn">
          🎓 Thriving Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {thrivingStudents.map((student, index) => (
            <div
              key={student.id || index}
              className="bg-white rounded-2xl p-5 transform hover:scale-105 transition duration-500 hover:shadow-2xl animate-slideUp delay-[${index * 100}ms]"
            >
              <StudentCard student={student} />
              <p className="mt-4 text-gray-700 italic text-base whitespace-normal break-words leading-relaxed">
                {/* {student.name} is now learning without obstacles, happy, and
                fully focused on education — made possible by donors like you. */}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Students Needing Support */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-red-700 mb-10 text-center animate-fadeIn">
          🌟 Students Who Still Need Support
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {needingSupport.map((student, index) => (
            <div
              key={student.id || index}
              className="bg-white rounded-2xl p-5 transform hover:scale-105 transition duration-500 hover:shadow-2xl animate-slideUp delay-[${index * 100}ms]"
            >
              <StudentCard student={student} />
              <p className="mt-4 text-gray-700 italic text-base whitespace-normal break-words leading-relaxed">
                {/* {student.name} is eager to continue learning but needs financial
                support to stay in school. */}
              </p>
             
            </div>
          ))}
        </div>
      </section>

      {/* General Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-center text-white animate-fadeIn rounded-2xl shadow-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">
          Be the Reason for Another Student’s Success
        </h2>
        <p className="mb-6 max-w-xl mx-auto">
          Your donation can provide tuition, books, and supplies to students in
          need. Every contribution makes a difference and creates a brighter
          future.
        </p>
        <a
          href="/donate"
          className="inline-block bg-yellow-400 text-indigo-900 px-8 py-4 rounded-xl shadow-md hover:bg-yellow-300 transition text-lg font-semibold"
        >
          Donate Now
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

export default Students;
