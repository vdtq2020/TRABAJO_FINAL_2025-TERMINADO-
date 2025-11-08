function CarritoDeCompras() {
  const [productos, setProductos] = React.useState([
    { id: 1, nombre: "Tour Huacachina", precio: 850 },
    { id: 2, nombre: "Tour Machu Picchu", precio: 1200 },
    { id: 3, nombre: "Tour Kuélap", precio: 720 },
    { id: 4, nombre: "Tour Máncora Beach", precio: 1100 },
    { id: 5, nombre: "Tour Lago Titicaca", precio: 1050 },
    { id: 6, nombre: "Tour Pozuzo", precio: 750 },
    { id: 7, nombre: "Tour Cañón de Colca", precio: 1110 },
    { id: 8, nombre: "Tour Aguas Turquesas de Millpu", precio: 900 },
    { id: 9, nombre: "Tour Iquitos", precio: 950 },
    { id: 10, nombre: "Tour Huanchaco", precio: 680 },
    { id: 11, nombre: "Tour Cueva de las Lechuzas", precio: 250 },
    { id: 12, nombre: "Tour Laguna de Choclococha", precio: 320 },
  ]);

  const [carrito, setCarrito] = React.useState([]);

  React.useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    if (!carrito.find((item) => item.id === producto.id)) {
      setCarrito([...carrito, producto]);
    } else {
      alert("Este tour ya está en tu carrito 🧳");
    }
  };

  const eliminarDelCarrito = (index) => {
    if (confirm("¿Seguro que deseas eliminar este producto?")) {
      setCarrito(carrito.filter((_, i) => i !== index));
    }
  };

  const formatoMoneda = (valor) =>
    new Intl.NumberFormat("es-PE", { style: "currency", currency: "PEN" }).format(valor);

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🛍️ Carrito de Compras
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Aquí puedes revisar y gestionar los paquetes turísticos que agregaste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {producto.nombre}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {formatoMoneda(producto.precio)}
                </p>
                <button
                  onClick={() => agregarAlCarrito(producto)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              🛒 Tu Carrito ({carrito.length})
            </h3>

            {carrito.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">
                No hay productos en tu carrito.
              </p>
            ) : (
              <ul className="space-y-4">
                {carrito.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <span className="text-gray-800 dark:text-white">{item.nombre}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 dark:text-gray-300">
                        {formatoMoneda(item.precio)}
                      </span>
                      <button
                        onClick={() => eliminarDelCarrito(index)}
                        className="text-red-500 hover:text-red-700 transition"
                        title="Eliminar"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex justify-between font-semibold text-gray-800 dark:text-white">
              <span>Total:</span>
              <span>{formatoMoneda(total)}</span>
            </div>

            {carrito.length > 0 && (
              <button
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors shadow-md"
                onClick={() => alert("¡Compra realizada con éxito! 🎉")}
              >
                Finalizar compra
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<CarritoDeCompras />, document.getElementById("carrito-content"));
