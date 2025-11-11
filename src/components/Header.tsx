const Header = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">TheaSeat 🎭</h1>

      <div className="space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-500 transition">
          Home
        </a>
        <a href="/about" className="hover:text-blue-500 transition">
          About
        </a>
        <a href="/contact" className="hover:text-blue-500 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
