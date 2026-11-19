import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 flex flex-row">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};
