"use client"

import { useState } from "react"
import { X, Pencil, Trash2 } from "lucide-react"

interface Solicitud {
  id: number
  nombre: string
  status: string
  fechaSolicitud: string
  numeroReferencia: string
  emisor: string
  monto: number
}

interface Documento {
  id: number
  nombre: string
  precio: number
}

export default function SolicitudesPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [solicitudSeleccionada, setSolicitudSeleccionada] = useState<Solicitud | null>(null)

  const solicitudes: Solicitud[] = [
    {
      id: 1,
      nombre: "Solicitud de Materiales",
      status: "En proceso",
      fechaSolicitud: "2024-01-22",
      numeroReferencia: "REF-001",
      emisor: "Juan Pérez",
      monto: 1500.0,
    },
    {
      id: 2,
      nombre: "Solicitud de Equipos",
      status: "Pendiente",
      fechaSolicitud: "2024-01-21",
      numeroReferencia: "REF-002",
      emisor: "María García",
      monto: 2500.0,
    },
    {
      id: 3,
      nombre: "Solicitud de Servicios",
      status: "Listo",
      fechaSolicitud: "2024-01-20",
      numeroReferencia: "REF-003",
      emisor: "Carlos López",
      monto: 3500.0,
    },
  ]

  const documentos: Documento[] = [
    {
      id: 1,
      nombre: "Documento 1",
      precio: 1000.0,
    },
    {
      id: 2,
      nombre: "Documento 2",
      precio: 2000.0,
    },
    {
      id: 3,
      nombre: "Documento 3",
      precio: 3000.0,
    },
  ]

  const handleVerDetalle = (solicitud: Solicitud) => {
    setSolicitudSeleccionada(solicitud)
    setModalOpen(true)
  }

  const handleModificar = (id: number) => {
    // Implementar lógica de modificación
    console.log("Modificar documento:", id)
  }

  const handleEliminar = (id: number) => {
    // Implementar lógica de eliminación
    console.log("Eliminar documento:", id)
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Tabla de Solicitudes en Proceso */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Solicitudes en Proceso</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha de Solicitud
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detalle
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {solicitudes.map((solicitud) => (
                <tr key={solicitud.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{solicitud.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${
                        solicitud.status === "En proceso"
                          ? "bg-yellow-100 text-yellow-800"
                          : solicitud.status === "Pendiente"
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {solicitud.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{solicitud.fechaSolicitud}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleVerDetalle(solicitud)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla de Documentación de Solicitudes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Documentación de Solicitudes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre de la Solicitud
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Precio
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {documentos.map((documento) => (
                <tr key={documento.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{documento.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${documento.precio.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleModificar(documento.id)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      <button onClick={() => handleEliminar(documento.id)} className="text-red-600 hover:text-red-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalle de Solicitud */}
      {modalOpen && solicitudSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Detalle de la Solicitud</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Nombre de la Solicitud</p>
                  <p className="mt-1">{solicitudSeleccionada.nombre}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Estatus</p>
                  <p className="mt-1">{solicitudSeleccionada.status}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Fecha de Creación</p>
                  <p className="mt-1">{solicitudSeleccionada.fechaSolicitud}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Número de Referencia</p>
                  <p className="mt-1">{solicitudSeleccionada.numeroReferencia}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Persona que Emitió</p>
                  <p className="mt-1">{solicitudSeleccionada.emisor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Monto</p>
                  <p className="mt-1">${solicitudSeleccionada.monto.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

