import { FaShoppingCart } from "react-icons/fa";

interface DocumentosTableProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const DocumentosTable = ({ setIsModalOpen }: DocumentosTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse shadow-md rounded-lg mb-4">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b p-2 text-left text-sm font-semibold">Nombre del Documento</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Tipo de Documento</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Tipo de Papel de Impresión</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Costo</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Acción</th>
          </tr>
        </thead>
        <tbody>
          {/* Documento A */}
          <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="border-b p-2 text-sm text-gray-900">Documento A</td>
            <td className="border-b p-2 text-sm text-gray-900">Trámite Nacional</td>
            <td className="border-b p-2 text-sm text-gray-900">Simple</td>
            <td className="border-b p-2 text-sm text-gray-900">$10</td>
            <td className="border-b p-2 text-sm text-gray-900">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700 transition-colors duration-200"
              >
                <FaShoppingCart className="mr-2" /> Agregar al Carrito
              </button>
            </td>
          </tr>
          {/* Carta de Culminación */}
          <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="border-b p-2 text-sm text-gray-900">Carta de Culminación</td>
            <td className="border-b p-2 text-sm text-gray-900">Trámite Académico</td>
            <td className="border-b p-2 text-sm text-gray-900">Papel Blanco</td>
            <td className="border-b p-2 text-sm text-gray-900">$15</td>
            <td className="border-b p-2 text-sm text-gray-900">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700 transition-colors duration-200"
              >
                <FaShoppingCart className="mr-2" /> Agregar al Carrito
              </button>
            </td>
          </tr>
          {/* Carta de Buena Conducta */}
          <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="border-b p-2 text-sm text-gray-900">Carta de Buena Conducta</td>
            <td className="border-b p-2 text-sm text-gray-900">Certificación</td>
            <td className="border-b p-2 text-sm text-gray-900">Papel de Seguridad</td>
            <td className="border-b p-2 text-sm text-gray-900">$20</td>
            <td className="border-b p-2 text-sm text-gray-900">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700 transition-colors duration-200"
              >
                <FaShoppingCart className="mr-2" /> Agregar al Carrito
              </button>
            </td>
          </tr>
          {/* Título */}
          <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="border-b p-2 text-sm text-gray-900">Título Universitario</td>
            <td className="border-b p-2 text-sm text-gray-900">Diploma</td>
            <td className="border-b p-2 text-sm text-gray-900">Papel de Seguridad</td>
            <td className="border-b p-2 text-sm text-gray-900">$25</td>
            <td className="border-b p-2 text-sm text-gray-900">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-green-600 text-white p-2 rounded-lg flex items-center hover:bg-green-700 transition-colors duration-200"
              >
                <FaShoppingCart className="mr-2" /> Agregar al Carrito
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DocumentosTable;
