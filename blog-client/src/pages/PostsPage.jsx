const PostsPage = () => {
  const posts = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Post Başlık 1",
      content: "Bu, post içerik özetidir. Daha fazlasını öğrenmek için tıklayın.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Post Başlık 2",
      content: "Bu, post içerik özetidir. Daha fazlasını öğrenmek için tıklayın.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Post Başlık 3",
      content: "Bu, post içerik özetidir. Daha fazlasını öğrenmek için tıklayın.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Post Başlık 4",
      content: "Bu, post içerik özetidir. Daha fazlasını öğrenmek için tıklayın.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Paylaşılan Postlarım</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Görsel */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            {/* İçerik */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{post.content}</p>
              {/* Aksiyon Butonları */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                  Düzenle
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  export default PostsPage