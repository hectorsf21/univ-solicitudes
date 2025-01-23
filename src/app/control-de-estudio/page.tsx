'use client';

import { useState } from "react";
import { FileText, X } from "lucide-react"; // Importamos los íconos necesarios

interface Solicitud {
  id: number;
  nombre: string;
  papel: string;
  status: "Pendiente" | "En Proceso" | "Urgente";
}

export default function SolicitudesPendientes() {
  const [solicitudes] = useState<Solicitud[]>([
    { id: 1, nombre: "Solicitud de Materiales", status: "En Proceso", papel: "Papel de seguridad" },
    { id: 2, nombre: "Solicitud de Equipos", status: "En Proceso", papel: "Papel blanco" },
    { id: 3, nombre: "Solicitud de Servicios", status: "En Proceso", papel: "Papel de seguridad" },
    { id: 4, nombre: "Solicitud de Mantenimiento", status: "En Proceso", papel: "Papel blanco" },
    { id: 5, nombre: "Solicitud de Capacitación", status: "En Proceso", papel: "Papel de seguridad" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null);

  const openModal = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSolicitud(null);
  };

  const procesarSolicitud = (id: number) => {
    console.log("Procesando solicitud:", id);
  };

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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Detalles
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
                        solicitud.status === "En Proceso"
                          ? "bg-yellow-100 text-yellow-800"
                          : solicitud.status === "Urgente"
                          ? "bg-red-100 text-red-800"
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => openModal(solicitud)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <FileText className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal para detalles */}
        {modalOpen && selectedSolicitud && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">Detalles de Solicitud</h3>
                <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <p><strong>Nombre:</strong> {selectedSolicitud.nombre}</p>
                <p><strong>Papel:</strong> {selectedSolicitud.papel}</p>
                <p><strong>Status:</strong> {selectedSolicitud.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
