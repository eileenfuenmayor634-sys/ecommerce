import { motion } from "motion/react";
import { ShoppingCart, Search, User, Menu, Star, Truck, Shield, CreditCard, Heart, X, ChevronDown, Bell, Gift } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todo");

  const categories = ["Todo", "Vestidos", "Tops", "Pantalones", "Accesorios", "Zapatos", "Bolsos"];

  const products = [
    {
      id: 1,
      name: "Vestido Floral Elegante de Verano",
      price: 24.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Vestidos",
      rating: 4.8,
      reviews: 234,
      discount: 50
    },
    {
      id: 2,
      name: "Conjunto Casual Urbano con Gafas",
      price: 32.99,
      originalPrice: 65.99,
      image: "https://images.unsplash.com/photo-1760495594970-f2823a1fb194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.9,
      reviews: 512,
      discount: 50
    },
    {
      id: 3,
      name: "Vestido Azul Elegante de Noche",
      price: 39.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1642368667229-101f6dadd93a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Vestidos",
      rating: 4.7,
      reviews: 189,
      discount: 50
    },
    {
      id: 4,
      name: "Blazer Rojo Moderno con Jeans",
      price: 45.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1762331614441-dfe446e69c25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Tops",
      rating: 4.6,
      reviews: 423,
      discount: 49
    },
    {
      id: 5,
      name: "Look Nocturno Urbano Trendy",
      price: 29.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1778242921088-b57193c76233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.9,
      reviews: 678,
      discount: 50
    },
    {
      id: 6,
      name: "Outfit Casual Relajado",
      price: 27.99,
      originalPrice: 55.99,
      image: "https://images.unsplash.com/photo-1760031033484-d8d8ae5a3fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.5,
      reviews: 345,
      discount: 50
    },
    {
      id: 7,
      name: "Vestido Estampado de Playa",
      price: 22.99,
      originalPrice: 45.99,
      image: "https://images.unsplash.com/photo-1621890188758-bdcbcfa95c14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Vestidos",
      rating: 4.8,
      reviews: 567,
      discount: 50
    },
    {
      id: 8,
      name: "Traje Negro Elegante Formal",
      price: 69.99,
      originalPrice: 139.99,
      image: "https://images.unsplash.com/photo-1758900728025-3d70604871c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.9,
      reviews: 891,
      discount: 50
    },
    {
      id: 9,
      name: "Look Deportivo Casual",
      price: 19.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1763750781876-d99c552c891c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.7,
      reviews: 234,
      discount: 50
    },
    {
      id: 10,
      name: "Conjunto Formal Moderno",
      price: 64.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1758900727792-e411697fc0a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Ropa",
      rating: 4.8,
      reviews: 445,
      discount: 50
    },
    {
      id: 11,
      name: "Reloj Premium Elegante",
      price: 89.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1619134778706-7015533a6150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Accesorios",
      rating: 4.9,
      reviews: 1234,
      discount: 50
    },
    {
      id: 12,
      name: "Gafas de Sol Modernas",
      price: 15.99,
      originalPrice: 31.99,
      image: "https://images.unsplash.com/photo-1760446031723-e03702a3386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500",
      category: "Accesorios",
      rating: 4.6,
      reviews: 789,
      discount: 50
    }
  ];

  const filteredProducts = selectedCategory === "Todo"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="size-full overflow-auto bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center gap-2">
          <Gift className="w-4 h-4" />
          <span>¡MEGA OFERTA! Hasta 80% OFF + Envío Gratis en compras +$50</span>
          <Gift className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">FASHIONX</span>
            </motion.div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  className="w-full px-4 py-2 pl-10 border border-slate-300 rounded-full focus:outline-none focus:border-pink-500 text-sm"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
              <motion.button
                className="flex md:flex items-center gap-1 text-slate-700 hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Bell className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="flex md:flex items-center gap-1 text-slate-700 hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <User className="w-5 h-5" />
                <span className="text-sm hidden sm:inline">Cuenta</span>
              </motion.button>

              <motion.button
                className="relative flex items-center gap-1 text-slate-700 hover:text-pink-500 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm hidden sm:inline">Carrito</span>
                {cartCount > 0 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-100 bg-slate-50 py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center gap-8 text-sm">
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">NUEVO</a>
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">VESTIDOS</a>
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">TOPS</a>
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">PANTALONES</a>
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">ACCESORIOS</a>
              <a href="#" className="text-red-500 hover:text-red-600 font-bold transition-colors">🔥 OFERTAS</a>
              <a href="#" className="text-slate-700 hover:text-pink-500 font-medium transition-colors">TENDENCIAS</a>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-3">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full px-4 py-2 pl-10 border border-slate-300 rounded-full focus:outline-none text-sm"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
              </div>
            </div>
            <nav className="px-4 pb-4 space-y-2">
              <a href="#" className="block text-slate-900 font-medium py-2">NUEVO</a>
              <a href="#" className="block text-slate-700 py-2">VESTIDOS</a>
              <a href="#" className="block text-slate-700 py-2">TOPS</a>
              <a href="#" className="block text-slate-700 py-2">PANTALONES</a>
              <a href="#" className="block text-red-500 font-bold py-2">🔥 OFERTAS</a>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Banners */}
      <section className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Banner */}
            <motion.div
              className="lg:col-span-2 bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg overflow-hidden relative h-[300px] flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between w-full px-8 lg:px-12 z-10">
                <div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                    MEGA SALE
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-black mb-3 text-slate-900">
                    Hasta 80% OFF
                  </h2>
                  <p className="text-lg lg:text-xl mb-4 text-slate-700">
                    En toda la colección de verano
                  </p>
                  <motion.button
                    className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Comprar Ahora
                  </motion.button>
                </div>
                <div className="hidden lg:block">
                  <img
                    src="https://images.unsplash.com/photo-1622080159621-bfceab50b3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400"
                    alt="Modelo"
                    className="h-[280px] w-auto object-cover drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Side Banners */}
            <div className="space-y-4">
              <motion.div
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6 h-[142px] flex flex-col justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold inline-block w-fit mb-2">
                  NUEVO
                </div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Accesorios 2026</h3>
                <a href="#" className="text-pink-600 font-semibold text-sm hover:underline">
                  Ver Más →
                </a>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-6 h-[142px] flex flex-col justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold inline-block w-fit mb-2">
                  HOT
                </div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">Rebajas Flash</h3>
                <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">
                  Comprar →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-4 border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Truck, title: "Envío Gratis", desc: "+$50" },
              { icon: Shield, title: "Pago 100% Seguro", desc: "SSL Protegido" },
              { icon: CreditCard, title: "Devolución Gratis", desc: "30 días" },
              { icon: Heart, title: "Soporte 24/7", desc: "Chat en vivo" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-gradient-to-br from-pink-500 to-orange-500 p-2.5 rounded-lg flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xs">{feature.title}</h3>
                  <p className="text-xs text-slate-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl md:text-2xl font-black text-slate-900">
                ⚡ OFERTAS FLASH
              </h2>
              <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm">
                <span className="font-bold">Termina en:</span>
                <span className="font-mono font-bold">02:45:30</span>
              </div>
            </div>
            <motion.a
              href="#"
              className="text-pink-500 hover:text-pink-600 font-semibold flex items-center gap-1 text-sm"
              whileHover={{ x: 3 }}
            >
              Ver Todo <span>→</span>
            </motion.a>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white border border-slate-100 hover:border-pink-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                {/* Discount Badge */}
                <div className="absolute top-1.5 left-1.5 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-md text-xs font-black shadow-lg">
                  -{product.discount}%
                </div>

                {/* Heart Button */}
                <motion.button
                  className="absolute top-1.5 right-1.5 z-10 bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-3.5 h-3.5 text-slate-700" />
                </motion.button>

                {/* Product Image */}
                <div className="relative overflow-hidden aspect-[3/4] bg-slate-50">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full cursor-pointer"
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-2">
                  <h3 className="text-xs text-slate-700 mb-1.5 line-clamp-2 leading-snug group-hover:text-pink-600 transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-1.5 mb-1.5">
                    <span className="text-base font-black text-red-500">
                      ${product.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-slate-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">({product.reviews})</span>
                  </div>

                  <motion.button
                    onClick={addToCart}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-1.5 px-2 rounded-md text-xs font-bold hover:from-pink-600 hover:to-orange-600 transition-all shadow-md"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    AGREGAR
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              className="px-12 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full font-bold hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cargar Más Productos
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gradient-to-r from-pink-500 via-orange-500 to-red-500 rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

            <div className="relative z-10">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                🎁 OFERTA ESPECIAL
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                ¡Obtén 20% OFF!
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto font-medium">
                Suscríbete ahora y recibe descuentos exclusivos + envío gratis
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="px-5 py-3.5 rounded-full w-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-white font-medium"
                />
                <motion.button
                  className="px-10 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors whitespace-nowrap w-full sm:w-auto shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Suscribirme
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
            <div className="col-span-2 md:col-span-1">
              <span className="text-xl font-black bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">FASHIONX</span>
              <p className="text-slate-600 text-xs mt-3 mb-3">
                Moda para todos, precios increíbles.
              </p>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Compañía</h4>
              <ul className="space-y-2 text-slate-600 text-xs">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Afiliados</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Carreras</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Ayuda</h4>
              <ul className="space-y-2 text-slate-600 text-xs">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Rastreo</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Cuenta</h4>
              <ul className="space-y-2 text-slate-600 text-xs">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Mi Cuenta</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Pedidos</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Favoritos</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Cupones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Legal</h4>
              <ul className="space-y-2 text-slate-600 text-xs">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Accesibilidad</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>© 2026 FASHIONX. Todos los derechos reservados.</p>
            <div className="flex gap-3 mt-3 md:mt-0">
              <div className="flex items-center gap-1">
                <CreditCard className="w-4 h-4" />
                <span>Pago Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>SSL</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}