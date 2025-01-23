"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

interface User {
  id: number;
  username: string;
  role: string;
}

export default function UserRegistration() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "usuario1", role: "fundeurg" },
    { id: 2, username: "usuario2", role: "admin" },
    { id: 3, username: "usuario3", role: "control de estudio" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para agregar un nuevo usuario
  };

  const handleEdit = (id: number) => {
    // Aquí iría la lógica para editar un usuario
  };

  const handleDelete = (id: number) => {
    // Aquí iría la lógica para eliminar un usuario
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Tarjeta de registro de usuarios */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-2xl font-bold mb-4">Registro de Usuarios</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Usuario
              </label>
              <input
                id="username"
                placeholder="Ingrese el nombre de usuario"
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Ingrese la contraseña"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="role" className="text-sm font-medium">
              Rol Administrativo
            </label>
            <select id="role" className="w-full p-2 border rounded">
              <option value="">Seleccione un rol</option>
              <option value="fundeurg">Fundeurg</option>
              <option value="admin">Admin</option>
              <option value="control-estudio">Control de Estudio</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Registrar Usuario
          </button>
        </form>
      </div>

      {/* Tarjeta de lista de usuarios */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Lista de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2 text-left">Usuario</th>
                <th className="border-b p-2 text-left">Rol Administrativo</th>
                <th className="border-b p-2 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="border-b p-2">{user.username}</td>
                  <td className="border-b p-2">{user.role}</td>
                  <td className="border-b p-2 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="p-2 text-gray-500 hover:text-gray-700"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
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
