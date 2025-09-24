const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 StudentBridge. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          {/* Replace with actual links */}
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
