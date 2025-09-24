import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">StudentBridge</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/students" className="text-white">
              Students
            </Link>
          </li>
          <li>
            <Link to="/donate" className="text-white">
              Donate
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
