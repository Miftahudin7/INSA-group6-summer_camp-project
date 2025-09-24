const StudentCard = ({ student }) => {
  return (
    <div className="border p-5 rounded-2xl shadow-lg flex flex-col h-full bg-white">
      {/* Student Photo */}
      <img
        src={student.photo || "/assets/placeholder-student.jpg"}
        alt={student.name}
        className="w-full h-40 object-cover rounded mb-4"
      />

      {/* Name */}
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{student.name}</h2>

      {/* Country & Grade */}
      <p className="text-gray-600 text-sm mb-1">
        {student.country} - {student.grade}
      </p>

      {/* Student Need */}
      {student.need && (
        <p className="text-gray-700 text-sm mb-2">Need: {student.need}</p>
      )}

      {/* Description (dynamic based on status) */}
      {student.description && (
        <p className="mt-2 text-gray-800 text-base leading-relaxed whitespace-normal break-words">
          {student.description}
        </p>
      )}

      {/* Funding Bar */}
      <div className="mt-auto mt-4">
        <div className="bg-gray-200 rounded-full h-2">
          <div
            style={{ width: `${student.fundingPercentage}%` }}
            className="bg-green-500 h-2 rounded-full"
          ></div>
        </div>
        <p className="text-sm mt-1">{student.fundingPercentage}% funded</p>
      </div>

      {/* Optional Donate Button */}
      {student.needsSupport && (
        <a
          href="/donate"
          className="mt-4 inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 text-sm font-semibold"
        >
          Support {student.name}
        </a>
      )}
    </div>
  );
};

export default StudentCard;
