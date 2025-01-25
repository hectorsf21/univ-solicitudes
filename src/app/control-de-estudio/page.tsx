'use client';

import { useState } from "react";

// Definir las interfaces para los reportes
interface Report {
  codigo: string;
  documento: string;
  cantidad: number;
  fechaSolicitud: string;
  estatus: {
    lista: string;
    entregada: string;
    enProceso: string;
    devuelto: string;
  };
}

interface ReporteFinanciero {
  fecha: string;
  tipoDocumento: string;
  tipoPapel: string;
  costo: number;
  cantidad: number;
  subtotal: number;
}

export default function ReportsTable() {
  // Estado para los reportes de solicitudes
  const [reports] = useState<Report[]>([
    {codigo: "R001", documento: "Solicitud de Materiales", cantidad: 5, fechaSolicitud: "2024-01-15", estatus: { lista: "2024-01-16", entregada: "2024-01-20", enProceso: "2024-01-17", devuelto: "2024-01-21" }},
    {codigo: "R002", documento: "Certificado de Título", cantidad: 3, fechaSolicitud: "2024-01-18", estatus: { lista: "2024-01-19", entregada: "2024-01-22", enProceso: "2024-01-20", devuelto: "2024-01-23" }},
    {codigo: "R003", documento: "Carta de Buena Conducta", cantidad: 2, fechaSolicitud: "2024-01-20", estatus: { lista: "2024-01-21", entregada: "2024-01-25", enProceso: "2024-01-23", devuelto: "2024-01-26" }},
  ]);

  // Estado para los reportes financieros
  const [financialReports] = useState<ReporteFinanciero[]>([
    { fecha: "2024-01-15", tipoDocumento: "Solicitud de Materiales", tipoPapel: "Papel blanco", costo: 100, cantidad: 5, subtotal: 500 },
    { fecha: "2024-01-18", tipoDocumento: "Certificado de Título", tipoPapel: "Papel de seguridad", costo: 150, cantidad: 3, subtotal: 450 },
    { fecha: "2024-01-20", tipoDocumento: "Carta de Buena Conducta", tipoPapel: "Papel blanco", costo: 75, cantidad: 2, subtotal: 150 },
  ]);

  // Calcular el total de todos los subtotales
  const total = financialReports.reduce((acc, report) => acc + report.subtotal, 0);

  // const [userPermissions] = useState({
  //   reportesSolicitudes: true, // Permiso para ver reportes de solicitudes
  //   reportesFinancieros: true, // Permiso para ver reportes financieros
  // });

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Módulo de Reportes</h2>
      
      {/* Tabla de Reportes de Solicitudes */}
      <h3 className="text-2xl mb-4">Reportes de Solicitudes</h3>
      <div className="border rounded-lg shadow p-4">
        <h3 className="text-xl font-bold mb-4">Lista de Reportes de Solicitudes</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-md rounded-lg mb-4">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border-b p-2 text-left text-sm font-semibold">Código</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Documento</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Cantidad</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Fecha de Solicitud</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Lista</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Entregada</th>
                <th className="border-b p-2 text-left text-sm font-semibold">En Proceso</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Devuelto</th>
              </tr>
            </thead>
            <tbody>
             
                {reports.map((report) => (
                  <tr key={report.codigo} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="border-b p-2">{report.codigo}</td>
                    <td className="border-b p-2">{report.documento}</td>
                    <td className="border-b p-2">{report.cantidad}</td>
                    <td className="border-b p-2">{report.fechaSolicitud}</td>
                    <td className="border-b p-2">{report.estatus.lista}</td>
                    <td className="border-b p-2">{report.estatus.entregada}</td>
                    <td className="border-b p-2">{report.estatus.enProceso}</td>
                    <td className="border-b p-2">{report.estatus.devuelto}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla de Reportes Financieros */}
      <h3 className="text-2xl mb-4">Reportes Financieros</h3>
      <div className="border rounded-lg shadow p-4">
        <h3 className="text-xl font-bold mb-4">Lista de Reportes Financieros</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-md rounded-lg mb-4">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border-b p-2 text-left text-sm font-semibold">Fecha</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Tipo de Documento</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Tipo de Papel</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Costo</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Cantidad</th>
                <th className="border-b p-2 text-left text-sm font-semibold">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {financialReports.map((report, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="border-b p-2">{report.fecha}</td>
                  <td className="border-b p-2">{report.tipoDocumento}</td>
                  <td className="border-b p-2">{report.tipoPapel}</td>
                  <td className="border-b p-2">{report.costo}</td>
                  <td className="border-b p-2">{report.cantidad}</td>
                  <td className="border-b p-2">{report.subtotal}</td>
                </tr>
              ))}
              {/* Fila de total */}
              <tr className="font-bold">
                <td className="border-b p-2 text-left" colSpan={5}>Total</td>
                <td className="border-b p-2 text-right">{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
