"use client"

import { useState } from "react"
import { FaEdit, FaTrash, FaUserPlus, FaUsers } from "react-icons/fa"

interface User {
  id: number
  username: string
  email: string
  permissions: string[]
}

interface UserGroup {
  id: number
  name: string
  permissions: string[]
}

export default function UserPanel() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "usuario1",
      email: "usuario1@example.com",
      permissions: ["procesar", "verListaNoValidas"],
    },
  ])

  const [groups, setGroups] = useState<UserGroup[]>([
    {
      id: 1,
      name: "Administradores",
      permissions: ["procesar", "verListaNoValidas", "verReportesFinancieros", "administrarUsuarios"],
    },
  ])

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implementar lógica de registro
  }

  const handleGroupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Implementar lógica de registro de grupo
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Formulario de Registro de Usuario */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaUserPlus className="text-blue-500" />
          Registro de Usuario
        </h2>
        <form onSubmit={handleUserSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Permisos</label>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="procesar" className="mr-2" />
                <label htmlFor="procesar">Procesar</label>
              </div>
              <div>
                <input type="checkbox" id="verLista" className="mr-2" />
                <label htmlFor="verLista">Ver lista no válidas</label>
              </div>
              <div>
                <input type="checkbox" id="verReportes" className="mr-2" />
                <label htmlFor="verReportes">Ver reportes financieros</label>
              </div>
              <div>
                <input type="checkbox" id="administrar" className="mr-2" />
                <label htmlFor="administrar">Administrar usuarios</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Registrar Usuario
          </button>
        </form>
      </div>

      {/* Tabla de Usuarios */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Usuarios Registrados</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuario
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permisos
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.username}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.permissions.map((permission) => (
                        <span key={permission} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <FaEdit className="inline" /> Editar
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaTrash className="inline" /> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulario de Grupos de Usuario */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaUsers className="text-blue-500" />
          Registro de Grupo de Usuarios
        </h2>
        <form onSubmit={handleGroupSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Grupo</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Permisos</label>
            <div className="space-y-2">
              <div>
                <input type="checkbox" id="grupo-procesar" className="mr-2" />
                <label htmlFor="grupo-procesar">Procesar</label>
              </div>
              <div>
                <input type="checkbox" id="grupo-verLista" className="mr-2" />
                <label htmlFor="grupo-verLista">Ver lista no válidas</label>
              </div>
              <div>
                <input type="checkbox" id="grupo-verReportes" className="mr-2" />
                <label htmlFor="grupo-verReportes">Ver reportes financieros</label>
              </div>
              <div>
                <input type="checkbox" id="grupo-administrar" className="mr-2" />
                <label htmlFor="grupo-administrar">Administrar usuarios</label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Registrar Grupo
          </button>
        </form>
      </div>

      {/* Tabla de Grupos */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-6">Grupos de Usuarios</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nombre del Grupo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permisos
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {groups.map((group) => (
                <tr key={group.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{group.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {group.permissions.map((permission) => (
                        <span key={permission} className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <FaEdit className="inline" /> Editar
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaTrash className="inline" /> Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

