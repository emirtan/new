import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { postService } from "@/service/post"

const SinglePost = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    postService.getDetailPost(id)
    .then((response) => {
      console.log("response", response)
      setProduct(response)
    }).catch((err) => {
      console.loh("err", err)
    })
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    postService.updatePost(product)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  


  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Postu Düzenle
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Başlık
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={product?.title}
              onChange={handleChange}
              placeholder="Başlığı düzenleyin"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              İçerik
            </label>
            <textarea
              id="content"
              name="content"
              value={product?.content}
              onChange={handleChange}
              rows="6"
              placeholder="Post içeriğini düzenleyin"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between space-x-4">
            {/* <button
              type="button"
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              Sil
            </button> */}
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;
