import { useEffect, useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => res.text())
      .then((data) => setMensaje(data))
      .catch(() => setMensaje("Error al conectar con el backend"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>🚀 Servicio Técnico TECNOACCESORIOS</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;



