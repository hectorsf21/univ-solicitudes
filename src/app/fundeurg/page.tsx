'use client'; // Asegúrate de colocar esta directiva al inicio

import { useState } from "react";
import { FileText, X } from "lucide-react"; // Importa los íconos necesarios

interface Solicitud {
  id: number;
  nombre: string;
  carrera: string;
  nsolicitud:number;
  monto:number;
  nReferencia:number;
  status: "Pendiente" | "En revisión" | "Urgente" | "En proceso";
  detalles: string;
}

export default function SolicitudesPendientes() {
  const [solicitudes] = useState<Solicitud[]>([
    { id: 1, nombre: "Carta de buena conducta", status: "Pendiente", detalles: "Detalles sobre la carta de buena conducta.", carrera: "Medicina", nsolicitud: 123452, monto: 450, nReferencia: 13342124 },
    { id: 2, nombre: "Certificado de notas", status: "Pendiente", detalles: "Detalles sobre el certificado de notas.", carrera: "Ingeniería", nsolicitud: 123453, monto: 300, nReferencia: 13342125 },
    { id: 3, nombre: "Fondo negro", status: "Pendiente", detalles: "Detalles sobre el fondo negro.", carrera: "Derecho", nsolicitud: 123454, monto: 600, nReferencia: 13342126 },
    { id: 4, nombre: "Carta de culminación", status: "Pendiente", detalles: "Detalles sobre la carta de culminación.", carrera: "Arquitectura", nsolicitud: 123455, monto: 400, nReferencia: 13342127 },
    { id: 5, nombre: "Certificado de título", status: "Pendiente", detalles: "Detalles sobre el certificado de título.", carrera: "Economía", nsolicitud: 123456, monto: 550, nReferencia: 13342128 },
  ]);

  const [modalOpen, setModalOpen] = useState<boolean>(false); // Estado para abrir/cerrar el modal
  const [selectedSolicitud, setSelectedSolicitud] = useState<Solicitud | null>(null); // Solicitud seleccionada

  const procesarSolicitud = (id: number) => {
    // Aquí iría la lógica para procesar la solicitud individual
    console.log("Procesando solicitud:", id);
  };

  const openModal = (solicitud: Solicitud) => {
    setSelectedSolicitud(solicitud);
    setModalOpen(true); // Abrir el modal
  };

  const closeModal = () => {
    setModalOpen(false); // Cerrar el modal
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => openModal(solicitud)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal para detalles de la solicitud */}
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
              <p><strong>Carrera:</strong> {selectedSolicitud.carrera}</p>
              <p><strong>Número de Referencia:</strong> {selectedSolicitud.nReferencia}</p>
              <p><strong>Número de Solicitud:</strong> {selectedSolicitud.nsolicitud}</p>
              <p><strong>Monto:</strong> ${selectedSolicitud.monto}</p>
              <p><strong>Status:</strong> {selectedSolicitud.status}</p>

              </div>
            </div>
          </div>
        )}

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
                <button
                  onClick={() => openModal(solicitud)}
                  className="w-full mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
