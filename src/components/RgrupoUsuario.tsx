'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos useRouter
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// Definir la interfaz para los grupos
interface Group {
  id: number;
  name: string;
  role: string;
  permisosSolicitudes: {
    verNoValidas: boolean;
    verValidarEntrega: boolean;
    verEntregadas: boolean;
  };
  permisosReportes: {
    reportesFinancieros: boolean;
    reportesSolicitudes: boolean;
  };
}

export default function UserGroupsPanel() {
  // Estado para los grupos de usuarios
  const [groups, setGroups] = useState<Group[]>([
    { id: 1, name: "Súper Usuario", role: "super_usuario", permisosSolicitudes: { verNoValidas: true, verValidarEntrega: true, verEntregadas: true }, permisosReportes: { reportesFinancieros: true, reportesSolicitudes: true } },
    { id: 2, name: "Usuario Admin", role: "admin", permisosSolicitudes: { verNoValidas: false, verValidarEntrega: true, verEntregadas: false }, permisosReportes: { reportesFinancieros: false, reportesSolicitudes: true } },
    { id: 3, name: "Usuario Solicitante", role: "solicitante", permisosSolicitudes: { verNoValidas: false, verValidarEntrega: false, verEntregadas: false }, permisosReportes: { reportesFinancieros: false, reportesSolicitudes: false } }
  ]);

  // Estado para el nuevo grupo que se registrará
  const [group, setGroup] = useState<Group>({
    id: 0,
    name: "",
    role: "",
    permisosSolicitudes: {
      verNoValidas: false,
      verValidarEntrega: false,
      verEntregadas: false,
    },
    permisosReportes: {
      reportesFinancieros: false,
      reportesSolicitudes: false,
    },
  });

  const [error, setError] = useState(""); // Mensaje de error si el grupo ya existe
  const router = useRouter(); // Inicializamos useRouter

  // Función para manejar el registro de un grupo de usuarios
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos
    if (!group.name || !group.role) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Si todo está bien, se registra el grupo
    console.log("Nuevo Grupo registrado:", group);
    alert("Grupo registrado exitosamente.");
    
    // Limpiar el formulario después del registro
    setGroup({
      id: 0,
      name: "",
      role: "",
      permisosSolicitudes: {
        verNoValidas: false,
        verValidarEntrega: false,
        verEntregadas: false,
      },
      permisosReportes: {
        reportesFinancieros: false,
        reportesSolicitudes: false,
      },
    });
  };

  // Función para manejar los cambios en los campos del formulario de grupo
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    // Si el tipo es checkbox, actualizamos el estado con 'checked'
    if (type === "checkbox") {
      // Verificamos si estamos en los permisos de solicitudes o reportes
      const [category, permission] = name.split('.');
      if (category === 'permisosSolicitudes') {
        setGroup((prev) => ({
          ...prev,
          permisosSolicitudes: {
            ...prev.permisosSolicitudes,
            [permission]: checked,
          },
        }));
      } else if (category === 'permisosReportes') {
        setGroup((prev) => ({
          ...prev,
          permisosReportes: {
            ...prev.permisosReportes,
            [permission]: checked,
          },
        }));
      }
    } else {
      // Si es un input de texto o select
      setGroup((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Función para manejar el cambio de rol
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setGroup((prev) => ({
      ...prev,
      role: selectedRole,
      permisosSolicitudes: {
        verNoValidas: false,
        verValidarEntrega: false,
        verEntregadas: false,
      },
      permisosReportes: {
        reportesFinancieros: false,
        reportesSolicitudes: false,
      },
    }));
  };

  // Función para redirigir al editar grupo
  const handleEdit = (name: string) => {
    router.push(`/admin/panel-usuarios/${encodeURIComponent(name)}`);
  };

  // Función para eliminar grupo
  const handleDelete = (id: number) => {
    setGroups(groups.filter((group) => group.id !== id));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Formulario de Registro de Grupo de Usuarios */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-2xl font-bold mb-4">Registro de Grupo de Usuarios</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Nombre del Grupo</label>
            <input
              id="name"
              name="name"
              type="text"
              value={group.name}
              onChange={handleInputChange}
              required
              placeholder="Ingrese el nombre del grupo"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">Rol Administrativo</label>
            <select
              id="role"
              name="role"
              value={group.role}
              onChange={handleRoleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Seleccione un rol</option>
              <option value="super_usuario">Súper Usuario</option>
              <option value="coordinacion">Coordinación</option>
              <option value="fundesurg">Fundesurg</option>
              <option value="solicitante">Usuario Solicitante</option>
            </select>
          </div>

          {/* Permisos de Solicitudes */}
          {(group.role === "coordinacion" || group.role === "fundesurg") && (
            <div className="border p-4 rounded">
              <h3 className="text-lg font-medium">Permisos de Solicitudes</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verNoValidas"
                    checked={group.permisosSolicitudes.verNoValidas}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver lista de solicitudes no válidas</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verValidarEntrega"
                    checked={group.permisosSolicitudes.verValidarEntrega}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver y validar lista de solicitudes por entregar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verEntregadas"
                    checked={group.permisosSolicitudes.verEntregadas}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver lista de solicitudes entregadas</span>
                </label>
              </div>
            </div>
          )}

          {/* Permisos de Reportes */}
          {(group.role === "coordinacion" || group.role === "fundesurg") && (
            <div className="border p-4 rounded">
              <h3 className="text-lg font-medium">Permisos de Reportes</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosReportes.reportesFinancieros"
                    checked={group.permisosReportes.reportesFinancieros}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Reportes Financieros</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosReportes.reportesSolicitudes"
                    checked={group.permisosReportes.reportesSolicitudes}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Reportes de Solicitudes</span>
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Registrar Grupo
          </button>
        </form>
      </div>

      {/* Tarjeta de lista de grupos de usuarios */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Lista de Grupos de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Nombre del Grupo</th>
                <th className="border-b p-2 text-right">Editar</th>
                <th className="border-b p-2 text-right">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.id}>
                  <td className="border-b p-2">{group.name}</td>
                  <td className="border-b p-2 text-right">
                    <button
                      onClick={() => handleEdit(group.name)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="border-b p-2 text-right">
                    <button
                      onClick={() => handleDelete(group.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
