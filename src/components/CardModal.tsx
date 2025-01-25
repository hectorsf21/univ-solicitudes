import { useState } from "react"

interface CartModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  addToCart: (item: { documento: string; tipo: string; papel: string; cantidad: number }) => void
}

const CartModal = ({ isOpen, setIsOpen, addToCart }: CartModalProps) => {
  const [tipo, setTipo] = useState("")
  const [papel, setPapel] = useState("")
  const [cantidad, setCantidad] = useState(1)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Agregar al Carrito</h2>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full mb-2 p-2 border">
          <option value="">Seleccione Tipo de Documento</option>
          <option value="nacional">Trámite Nacional</option>
          <option value="internacional">Trámite Internacional</option>
        </select>
        <select value={papel} onChange={(e) => setPapel(e.target.value)} className="w-full mb-2 p-2 border">
          <option value="">Seleccione Tipo de Papel</option>
          <option value="simple">Simple</option>
          <option value="seguridad">Seguridad</option>
        </select>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
          className="w-full mb-2 p-2 border"
          min="1"
        />
        <button
          onClick={() => addToCart({ documento: "Documento A", tipo, papel, cantidad })}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Agregar
        </button>
        <button onClick={() => setIsOpen(false)} className="mt-2 bg-red-500 text-white p-2 rounded w-full">
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default CartModal

