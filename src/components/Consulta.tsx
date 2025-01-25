import { FaEye, FaPrint } from "react-icons/fa";

const ConsultaTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse shadow-md rounded-lg mb-4">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b p-2 text-left text-sm font-semibold">Código</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Fecha</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Documento</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Cantidad</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Acción</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Devuelto</th>
            <th className="border-b p-2 text-left text-sm font-semibold">En Proceso</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Lista</th>
            <th className="border-b p-2 text-left text-sm font-semibold">Entregada</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition-colors duration-150">
            <td className="border-b p-2 text-sm text-gray-900">001</td>
            <td className="border-b p-2 text-sm text-gray-900">2023-05-20</td>
            <td className="border-b p-2 text-sm text-gray-900">Documento A</td>
            <td className="border-b p-2 text-sm text-gray-900">2</td>
            <td className="border-b p-2 text-sm text-gray-900">
              <button className="text-blue-500 hover:text-blue-700 mr-2">
                <FaEye className="h-4 w-4" />
              </button>
              <button className="text-green-500 hover:text-green-700">
                <FaPrint className="h-4 w-4" />
              </button>
            </td>
            <td className="border-b p-2 text-sm text-gray-900"></td>
            <td className="border-b p-2 text-sm text-gray-900">2023-05-22</td>
            <td className="border-b p-2 text-sm text-gray-900">2023-05-23</td>
            <td className="border-b p-2 text-sm text-gray-900">2023-05-24</td>
          </tr>
          {/* Agregar más filas aquí si es necesario */}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultaTable;
