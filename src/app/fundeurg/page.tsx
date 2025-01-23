"use client"

import { useState } from "react"

interface Solicitud {
  id: number
  nombre: string
  status: "Pendiente" | "En revisión" | "Urgente" | "En proceso"
}

export default function SolicitudesPendientes() {
  const [solicitudes] = useState<Solicitud[]>([
    { id: 1, nombre: "Solicitud de Materiales", status: "Pendiente" },
    { id: 2, nombre: "Solicitud de Equipos", status: "Pendiente" },
    { id: 3, nombre: "Solicitud de Servicios", status: "Pendiente" },
    { id: 4, nombre: "Solicitud de Mantenimiento", status: "Pendiente" },
    { id: 5, nombre: "Solicitud de Capacitación", status: "Pendiente" },
  ])

  const procesarSolicitud = (id: number) => {
    // Aquí iría la lógica para procesar la solicitud individual
    console.log("Procesando solicitud:", id)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Lista de Solicitudes Pendientes</h2>
        </div>

        {/* Tabla para pantallas medianas y grandes */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {solicitudes.map((solicitud) => (
                <tr key={solicitud.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{solicitud.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${
                        solicitud.status === "Pendiente"
                          ? "bg-red-100 text-red-800"
                          : solicitud.status === "Urgente"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {solicitud.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => procesarSolicitud(solicitud.id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                    >
                      Procesar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Vista de cards para móvil */}
        <div className="md:hidden">
          {solicitudes.map((solicitud) => (
            <div
              key={solicitud.id}
              className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">{solicitud.nombre}</p>
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${
                        solicitud.status === "Pendiente"
                          ? "bg-red-100 text-red-800"
                          : solicitud.status === "Urgente"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {solicitud.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => procesarSolicitud(solicitud.id)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Procesar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

