'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos useRouter
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import RgrupoUsuario from "@/components/RgrupoUsuario";

// Definir las interfaces para los grupos y usuarios


interface User {
  id: number;
  username: string;
  password: string;
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
 

  // Estado para los usuarios registrados
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "usuario1", password: "pass1", role: "Súper Usuario", permisosSolicitudes: { verNoValidas: true, verValidarEntrega: true, verEntregadas: true }, permisosReportes: { reportesFinancieros: true, reportesSolicitudes: true }},
    { id: 2, username: "usuario2", password: "pass2", role: "Usuario Admin", permisosSolicitudes: { verNoValidas: false, verValidarEntrega: true, verEntregadas: false }, permisosReportes: { reportesFinancieros: false, reportesSolicitudes: true }},
  ]);

  const [user, setUser] = useState<User>({
    id: 0,
    username: "",
    password: "",
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

  // Función para manejar el registro de usuario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de campos
    if (!user.username || !user.password || !user.role) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Si todo está bien, se registra el usuario
    console.log("Nuevo Usuario registrado:", user);
    alert("Usuario registrado exitosamente.");
    
    // Limpiar el formulario después del registro
    setUser({
      id: 0,
      username: "",
      password: "",
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

  // Función para manejar los cambios en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
  
    // Si el tipo es checkbox, actualizamos el estado con 'checked'
    if (type === "checkbox") {
      // Dividimos el 'name' para identificar el permiso de solicitudes o reportes
      const [category, permission] = name.split('.'); // ejemplo: 'permisosSolicitudes.verNoValidas'
  
      if (category === 'permisosSolicitudes') {
        // Actualizamos los permisos de solicitudes
        setUser((prev) => ({
          ...prev,
          permisosSolicitudes: {
            ...prev.permisosSolicitudes,
            [permission]: checked, // actualizamos el permiso correspondiente
          },
        }));
      } else if (category === 'permisosReportes') {
        // Actualizamos los permisos de reportes
        setUser((prev) => ({
          ...prev,
          permisosReportes: {
            ...prev.permisosReportes,
            [permission]: checked, // actualizamos el permiso correspondiente
          },
        }));
      }
    } else {
      // Si es un input de texto o select, actualizamos el estado normalmente
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  // Función para manejar el cambio de rol
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRole = e.target.value;
    setUser((prev) => ({
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

  // Función para eliminar usuario
  const handleUserDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6">Panel de Usuarios</h1>

      {/* Formulario de Registro de Usuario */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
              onChange={handleInputChange}
              required
              placeholder="Ingrese el nombre del usuario"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
              required
              placeholder="Ingrese la contraseña"
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">Rol</label>
            <select
              id="role"
              name="role"
              value={user.role}
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
          {(user.role === "coordinacion" || user.role === "fundesurg") && (
            <div className="border p-4 rounded">
              <h3 className="text-lg font-medium">Permisos de Solicitudes</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verNoValidas"
                    checked={user.permisosSolicitudes.verNoValidas}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver lista de solicitudes no válidas</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verValidarEntrega"
                    checked={user.permisosSolicitudes.verValidarEntrega}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver y validar lista de solicitudes por entregar</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosSolicitudes.verEntregadas"
                    checked={user.permisosSolicitudes.verEntregadas}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Ver lista de solicitudes entregadas</span>
                </label>
              </div>
            </div>
          )}

          {/* Permisos de Reportes */}
          {(user.role === "coordinacion" || user.role === "fundesurg") && (
            <div className="border p-4 rounded">
              <h3 className="text-lg font-medium">Permisos de Reportes</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosReportes.reportesFinancieros"
                    checked={user.permisosReportes.reportesFinancieros}
                    onChange={handleInputChange}
                    className="form-checkbox"
                  />
                  <span>Reportes Financieros</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="permisosReportes.reportesSolicitudes"
                    checked={user.permisosReportes.reportesSolicitudes}
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
            Registrar Usuario
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Mostrar error */}
        </form>
      </div>

      {/* Tarjeta de lista de usuarios registrados */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Usuarios Registrados</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Nombre de Usuario</th>
                <th className="border-b p-2 text-left">Rol</th>
                <th className="border-b p-2 text-right">Editar</th>
                <th className="border-b p-2 text-right">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b p-2">{user.username}</td>
                  <td className="border-b p-2">{user.role}</td>
                  <td className="border-b p-2 text-right">
                    <button
                      onClick={() => handleEdit(user.username)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit className="h-4 w-4" />
                    </button>
                  </td>
                  <td className="border-b p-2 text-right">
                    <button
                      onClick={() => handleUserDelete(user.id)}
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
      {/* Tarjeta de lista de grupos de usuarios */}
      <RgrupoUsuario />
    </div>
    
  );
}
