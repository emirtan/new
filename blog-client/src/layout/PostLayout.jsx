import { Outlet } from "react-router-dom"
import Sidebar from "./shared/Sidebar"

const PostLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="w-full"><Outlet /></main>
    </div>
  )
}

export default PostLayout