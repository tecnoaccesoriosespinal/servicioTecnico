
import React, { useEffect, useState } from "react";
import api from "./api";

const Ping = () => {
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    api.get("/ping")
      .then(res => setRespuesta(res.data))
      .catch(err => setRespuesta("Error al conectar con el backend"));
  }, []);

  return (
    <div>
      <h1>Conexión Backend</h1>
      <p>Respuesta: {respuesta}</p>
    </div>
  );
};

export default Ping;
