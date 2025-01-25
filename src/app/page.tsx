"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const [loading, setLoading] = useState(true); // Estado para el loading

  useEffect(() => {
    // Simular un retraso de 3 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Termina el loading después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

  // Mostrar el spinner mientras está cargando
  if (loading) {
    return (
      <div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Mostrar el contenido después del loading
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
}
