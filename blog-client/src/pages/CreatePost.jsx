import { useState, useEffect } from "react"
import { authService } from "@/service/auth"
import { postService } from "@/service/post"

const CreatePost = () => {
  
  const [form, setForm] = useState({
    title: '',
    content: '',
    main_image: '',
    image: '',
    author: {
      name: "Emirhan",
      surname: "Sönmez",
      image: "https://via.placeholder.com/150"
    },
    categories: [
      { title: "Teknoloji", color: "pink" }
    ]
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    setForm({
      ...form,
      main_image: file,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    console.log('e', e.target.title.value)

    formData.append('title', JSON.stringify(form.title));
    formData.append('content', JSON.stringify(form.content))

    if (form.main_image) {
      formData.append('main_image', form.main_image);
    }

    postService.addPost(formData)
      .then((response) => {
        console.log("response", response);
      })
      .catch((err) => {
        console.log("err", err);
      });

      // try {
      //   const response = await fetch("http://127.0.0.1:8000/api/postAdd", {
      //     body: formData,
      //     method: "POST",
      //     headers: {
      //       'Accept': "multipart/form-data",
      //       'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzMyOTIyMTkxLCJleHAiOjE3MzI5MjU3OTEsIm5iZiI6MTczMjkyMjE5MSwianRpIjoid3AyTFNubW1KaDY3WWFCVCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.icwZTUWuUD_lDVSYTLTvw2Hhwd-q6Q5YuGvLGNKKrsQ`
      //     }
      //   })
      //   const result = await response.json();
      //   console.log("result", result);
      // } catch (error) {
      //  console.log("err", error) 
      // }
  };

  useEffect(() => {
    authService.getUser().then((response) => setForm({...form, name: response.user.name || 'emirhan' }))
  }, [])
  

  return (
    <div className="flex-1 p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Yeni Blog Postu Oluştur</h1>
        <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data" >

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
              value={form.title}
              onChange={handleChange}
              placeholder="Başlık girin"
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
              value={form.content}
              onChange={handleChange}
              rows="6"
              placeholder="Blog içeriğini buraya girin"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>


          <div>
            <label
              htmlFor="categories"
              className="block text-sm font-medium text-gray-700"
            >
              Etiketler
            </label>
            <input
              type="text"
              id="categories"
              name="categories"
              value={form.categories}
              onChange={handleChange}
              placeholder="Kategoriler virgülle ayırarak girin"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>


          <div>
            <label
              htmlFor="main_image"
              className="block text-sm font-medium text-gray-700"
            >
              Resim
            </label>
            <input
              type="file"
              id="main_image"
              name="main_image"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              placeholder="Başlık girin"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
