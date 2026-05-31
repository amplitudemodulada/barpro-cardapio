export default function Header() {
  return (
    <header className="bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <span className="text-3xl">🍺</span>
        <div>
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Depósito de Bebidas
          </h1>
          <p className="text-brand-200 text-xs font-medium">
            Delivery • Entrega Rápida • Peça pelo WhatsApp
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-white">Aberto agora</span>
        </div>
      </div>
    </header>
  );
}
