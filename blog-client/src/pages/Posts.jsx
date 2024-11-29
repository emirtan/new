import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "@/service/post"

const Posts = () => {
    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    useEffect(() => {
        postService.getSinglePost().then((response) => setPost(response.data))
    }, [])
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Paylaşılan Postlarım</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Görsel */}
            <img
              src={item.main_image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            {/* İçerik */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{item.content}</p>
              {/* Aksiyon Butonları */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                onClick={() => navigate(`/postlar/${item.id}`)}
                >
                    Düzenle
                </button>
                <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700" onClick={() => postService.deletePost(item.id)}>
                  Sil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts