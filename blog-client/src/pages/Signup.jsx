import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import siteActions from "@/store/site/actions"
import authActions from "@/store/auth/actions"
import { authService } from "@/service/auth"

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    siteActions.hideFooterAndNavbar();
      
    return () => {
        siteActions.showFooterAndNavbar();
    }
  }, []);

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authService.register({
        email: form.email,
        password: form.password
    }).then((response) => {
        authActions.setToken(response.token)
        if(response?.user) {
            authActions.setUser(response.user)
        }
    }).catch((err) => {
        console.log("err", err)
    })
    .finally(() => {
        navigate("/")
    })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-posta adresinizi girin"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Şifrenizi oluşturun"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-medium py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Kayıt Ol
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-4">
          Zaten hesabınız var mı?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Giriş Yapın
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup