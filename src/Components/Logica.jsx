useEffect(() => {
  if (showLoading) {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000); // Oculta el loading después de 5 segundos

    return () => clearTimeout(timer);
  }
}, [showLoading]);

// Simulación de la lógica que muestra la respuesta y activa el loading
const mostrarRespuesta = () => {
  // Tu lógica para mostrar la respuesta aquí

  // Activa el loading
  setShowLoading(true);
};

// Llama a mostrarRespuesta cuando se desee mostrar la respuesta
// Ejemplo: <button onClick={mostrarRespuesta}>Mostrar Respuesta</button>

return (
  <div className=""></div>
  // Renderiza el contenido de tus pasos aquí
);

export default YourComponent;
