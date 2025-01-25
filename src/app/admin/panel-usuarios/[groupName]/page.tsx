'use client';

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

interface User {
  id: number;
  username: string;
  role: string;
}

export default function GroupDetails() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "usuario1", role: "super usuario" },
    { id: 2, username: "usuario2", role: "super usuario" },
  ]);

  const router = useRouter();
  const params = useParams(); // Obtiene los parámetros dinámicos de la URL

  // Maneja el caso de string | string[]
  const groupName = Array.isArray(params.groupName)
    ? decodeURIComponent(params.groupName[0]) // Si es un array, toma el primer valor
    : decodeURIComponent(params.groupName || ''); // Si es string, decodifica directamente

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para agregar un usuario al grupo
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Grupo: {groupName}</h1> {/* Nombre decodificado */}

      {/* Formulario de usuarios */}
      <div className="border rounded-lg shadow p-4 mb-6">
        <h2 className="text-xl font-bold mb-4">Registrar Usuario</h2>
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
                placeholder="Ingrese una contrasena"
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Registrar Usuario
          </button>
        </form>
      </div>

      {/* Tabla de usuarios */}
      <div className="border rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">Lista de Usuarios del Grupo</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Nombre del Usuario</th>
              <th className="border-b p-2 text-left">Rol administrativo</th>
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
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit className="h-4 w-4" />
                  </button>
                </td>
                <td className="border-b p-2 text-right">
                  <button
                    onClick={() => handleDelete(user.id)}
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
  );
}
