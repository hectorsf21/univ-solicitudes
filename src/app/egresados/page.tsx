"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface Solicitud {
  id: number
  nombre: string
  precio: number
}

interface PaymentFormData {
  numeroTransferencia: string
  fecha: string
  nombre: string
  cedula: string
  carrera: string
  monto: string
}

export default function PaymentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null)
  const [formData, setFormData] = useState<PaymentFormData>({
    numeroTransferencia: "",
    fecha: "",
    nombre: "",
    cedula: "",
    carrera: "",
    monto: "",
  })

  const solicitudes: Solicitud[] = [
    { id: 1, nombre: "Solicitud de Certificación", precio: 150 },
    { id: 2, nombre: "Solicitud de Constancia", precio: 75 },
    { id: 3, nombre: "Solicitud de Título", precio: 300 },
    { id: 4, nombre: "Solicitud de Notas", precio: 50 },
  ]

  const handlePagar = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud)
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    console.log("Datos del pago:", formData)
    setIsModalOpen(false)
    setFormData({
      numeroTransferencia: "",
      fecha: "",
      nombre: "",
      cedula: "",
      carrera: "",
      monto: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Lista de Solicitudes</h2>
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
                  Precio
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${solicitud.precio.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handlePagar(solicitud)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                    >
                      Pagar
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
                  <div>
                    <p className="text-sm font-medium text-gray-900">{solicitud.nombre}</p>
                    <p className="text-sm text-gray-500 mt-1">${solicitud.precio.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handlePagar(solicitud)}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  Pagar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Pago */}
      {isModalOpen && selectedSolicitud && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Información de Pago</h3>

              {/* Datos bancarios */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Número de transferencia:</span> 0108-0014-51-0100023445
                </p>
                <p className="text-sm">
                  <span className="font-medium">Nombre del banco:</span> BBVA Provincial
                </p>
                <p className="text-sm">
                  <span className="font-medium">RIF:</span> J-12345678-9
                </p>
              </div>

              {/* Formulario de registro de pago */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="numeroTransferencia" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Transferencia
                  </label>
                  <input
                    type="text"
                    id="numeroTransferencia"
                    name="numeroTransferencia"
                    required
                    value={formData.numeroTransferencia}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    value={formData.fecha}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="cedula" className="block text-sm font-medium text-gray-700 mb-1">
                    Cédula
                  </label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    required
                    value={formData.cedula}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="carrera" className="block text-sm font-medium text-gray-700 mb-1">
                    Carrera
                  </label>
                  <input
                    type="text"
                    id="carrera"
                    name="carrera"
                    required
                    value={formData.carrera}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="monto" className="block text-sm font-medium text-gray-700 mb-1">
                    Monto
                  </label>
                  <input
                    type="number"
                    id="monto"
                    name="monto"
                    required
                    value={formData.monto}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium mt-4"
                >
                  Registrar Pago
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

