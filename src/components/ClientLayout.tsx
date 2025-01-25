"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "@/components/Loading"; // Importa el componente Loading

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavigating, setIsNavigating] = useState(false); // Estado para manejar la transición
  const pathname = usePathname(); // Detectar cambios de ruta

  useEffect(() => {
    // Activar el estado de navegación al cambiar de ruta
    setIsNavigating(true);

    // Desactivar el estado de navegación después de 1 segundo
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 10);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [pathname]);

  return (
    <>
      {/* Spinner durante la navegación */}
      {isNavigating && <Loading />}

      {/* Contenido con animación de desvanecimiento */}
      <div
        className={`transition-opacity duration-500 ${
          isNavigating ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
