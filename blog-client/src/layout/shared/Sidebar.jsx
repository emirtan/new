import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="w-1/5 bg-white shadow-md">
      <div className="text-center p-6 mt-10">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Yönetim Paneli</h2>
        <nav className="space-y-2">
          <Link
            to="ekle"
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Post Ekle
          </Link>
          <Link
            to=""
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Postları Görüntüle
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
          >
            Siteyi Görüntüle
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
