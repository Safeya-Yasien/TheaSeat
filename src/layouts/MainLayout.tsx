import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">كرسيّك 🎭</h1>

        <div className="space-x-6">
          <a href="/" className="hover:text-blue-500 transition">
            الصفحة الرئيسية
          </a>
          <a href="/about" className="hover:text-blue-500 transition">
            عنّا
          </a>
          <a href="/contact" className="hover:text-blue-500 transition">
            تواصل معنا
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-start p-8">
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} كرسيّك - كل الحقوق محفوظة
      </footer>
    </div>
  );
};

export default MainLayout;
