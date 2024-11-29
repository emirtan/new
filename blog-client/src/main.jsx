import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from './layout/BaseLayout';
import PostLayout from './layout/PostLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import CreatePost from './pages/CreatePost';
import SinglePost from './pages/SinglePost';

import { Provider } from 'react-redux';
import { store } from "@/store";
import { ThemeProvider } from "@/providers/ThemeProvider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route index element={<Home />} />
              <Route path='iletisim' element={<Contact />} />
              <Route path='hakkimizda' element={<About />} />
              <Route path='giris-yap' element={<Login />} />
              <Route path='uye-ol' element={<Signup />} />
              <Route path='profile' element={(<PrivateRoute>
                <Profile />
              </PrivateRoute>)} />
            </Route>
            <Route path='postlar' element={<PostLayout />}>
              <Route index element={<PrivateRoute>
                <Posts />
              </PrivateRoute>} />
              <Route path="ekle" element={<PrivateRoute><CreatePost/></PrivateRoute>}/>
              <Route path=":id" element={<PrivateRoute><SinglePost/></PrivateRoute>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
