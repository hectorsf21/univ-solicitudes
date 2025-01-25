"use client"

import { useState } from "react"
import { FaSearch, FaEye, FaPrint, FaShoppingCart } from "react-icons/fa"
import CartModal from "@/components/CardModal"
import Consulta from "@/components/Consulta"
import Documentos from "@/components/Documentos"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cart, setCart] = useState<Array<{ documento: string; tipo: string; papel: string; cantidad: number }>>([])

  const addToCart = (item: { documento: string; tipo: string; papel: string; cantidad: number }) => {
    setCart([...cart, item])
    setIsModalOpen(false)
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Solicitudes</h1>
      <div className="mb-4 flex">
        <input type="text" placeholder="Código" className="border p-2 mr-2" />
        <input type="date" className="border p-2 mr-2" />
        <button className="bg-blue-500 text-white p-2 rounded">
          <FaSearch />
        </button>
      </div>
      <Consulta />
      <h1 className="text-2xl font-bold my-12 mb-4">Lista de documentos</h1>
      <Documentos setIsModalOpen={setIsModalOpen} />
      <CartModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} addToCart={addToCart} />
    </main>
  )
}

