// src/layout/SidebarLayout.jsx
import { Link, Outlet } from "react-router-dom";

export default function SidebarLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">J-Sentinel</h2>
        <nav className="space-y-2">
          <Link to="/" className="block hover:text-blue-400">Projects</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <Outlet />
      </main>
    </div>
  );
}
