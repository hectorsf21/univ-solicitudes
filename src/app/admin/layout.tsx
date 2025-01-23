import { ReactNode } from "react";
import Link from "next/link";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-white text-2xl">Admin Panel</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/fundeurg" className="text-white hover:underline">
                Fundeurg
              </Link>
            </li>
            <li>
              <Link href="/egresados" className="text-white hover:underline">
                Egresados
              </Link>
            </li>
            <li>
              <Link href="/control-de-estudio" className="text-white hover:underline">
                Control de Estudio
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-white hover:underline">
                Admin
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-white">
          <p className="text-center">
            &copy; Todos los derechos reservados, Universidad Rómulo Gallegos.
          </p>
        </div>
      </footer>
    </div>
  );
}
