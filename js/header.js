function Header() {
  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        <a href="index.html" className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          JyV tours
        </a>

        <div className="flex items-center space-x-6 text-white text-xl">

          <a
            href="atención.html"
            className="hover:text-blue-400 transition-colors duration-200"
            title="Soporte"
          >
            <i className="fa-solid fa-headset"></i>
          </a>

          <a
            href="carrito.html"
            className="relative hover:text-blue-400 transition-colors duration-200"
            title="Carrito de compras"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>

          <a
            href="game.html"
            className="hover:text-blue-400 transition-colors duration-200"
            title="Juego"
          >
            <i className="fa-solid fa-gamepad"></i>
          </a>

          <a
            href="contacto.html"
            className="hover:text-blue-400 transition-colors duration-200"
            title="Perfil"
          >
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

ReactDOM.render(<Header />, document.getElementById("header"));
