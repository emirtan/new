const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Büyük 404 Yazısı */}
        <h1 className="text-9xl font-extrabold text-indigo-600">404</h1>
        
        {/* Başlık ve Açıklama */}
        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mt-2">
          Aradığınız sayfa mevcut değil veya başka bir yere taşınmış olabilir.
        </p>
        
        {/* Geri Dön Butonu */}
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
