"use client"

import { FaUsers, FaChartBar } from "react-icons/fa"
import Link from "next/link"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Control</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel de Usuarios */}
          <Link href="/fundeurg/panel-usuarios">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Panel de Usuarios</h2>
                  <p className="text-gray-600">Gestiona usuarios y permisos</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-full">
                  <FaUsers className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                </div>
              </div>
            </div>
          </Link>

          {/* Panel de Reportes */}
          <Link href="/fundeurg/panel-reportes">
            <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 cursor-pointer border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Panel de Reportes</h2>
                  <p className="text-gray-600">Visualiza estadísticas y análisis</p>
                </div>
                <div className="bg-green-50 p-4 rounded-full">
                  <FaChartBar className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}