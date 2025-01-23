'use client';

import { useState } from "react";
import { X } from "lucide-react";

interface Solicitud {
  id: number;
  nombre: string;
  precio: number;
}

interface PaymentFormData {
  numeroTransferencia: string;
  fecha: string;
  nombre: string;
  cedula: string;
  carrera: string;
  monto: string;
  papel: string;
}

export default function PaymentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);
  const [formData, setFormData] = useState<PaymentFormData>({
    numeroTransferencia: "",
    fecha: "",
    nombre: "",
    cedula: "",
    carrera: "",
    monto: "",
    papel: "Papel Blanco", // Valor inicial para el select
  });

  const solicitudes: Solicitud[] = [
    { id: 1, nombre: "Solicitud de Certificación", precio: 150 },
    { id: 2, nombre: "Solicitud de Constancia", precio: 75 },
    { id: 3, nombre: "Solicitud de Título", precio: 300 },
    { id: 4, nombre: "Solicitud de Notas", precio: 50 },
  ];

  const handlePagar = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del pago:", formData);
    setIsModalOpen(false);
    setFormData({
      numeroTransferencia: "",
      fecha: "",
      nombre: "",
      cedula: "",
      carrera: "",
      monto: "",
      papel: "Papel Blanco",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Lista de Solicitudes</h2>
        </div>

        {/* Tabla */}
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
      </div>

      {/* Modal */}
      {isModalOpen && selectedSolicitud && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-screen overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Información de Pago</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Número de Transferencia */}
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

                {/* Fecha */}
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

                {/* Nombre */}
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

                {/* Cédula */}
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

                {/* Carrera */}
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

                {/* Monto */}
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

                {/* Papel */}
                <div>
                  <label htmlFor="papel" className="block text-sm font-medium text-gray-700 mb-1">
                    Papel
                  </label>
                  <select
                    id="papel"
                    name="papel"
                    value={formData.papel}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="Papel Blanco">Papel Blanco</option>
                    <option value="Papel de Seguridad">Papel de Seguridad</option>
                  </select>
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
  );
}
