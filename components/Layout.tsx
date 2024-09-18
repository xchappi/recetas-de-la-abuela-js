import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">Recetario de la Abuela</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Inicio</Link>
              <Link href="/recipe/new" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Nueva Receta</Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        {children}
      </main>
      <footer className="bg-white shadow-lg mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          © 2024 Recetario de la Abuela. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Layout;