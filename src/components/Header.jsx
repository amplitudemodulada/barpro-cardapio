import { Settings, LogOut, ShieldCheck } from 'lucide-react';

export default function Header({ adminState, onAdminClick, onAdminLogout }) {
  const isLoggedIn = adminState === 'panel';

  return (
    <header className="bg-gradient-to-r from-brand-700 to-brand-600 text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        {/* Logo */}
        <span className="text-3xl select-none">🍺</span>

        {/* Store name */}
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold leading-tight tracking-tight">
            Depósito de Bebidas
          </h1>
          <p className="text-brand-200 text-xs font-medium">
            Delivery • Entrega Rápida • Peça pelo WhatsApp
          </p>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Aberto */}
          <div className="hidden sm:flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium">Aberto agora</span>
          </div>

          {/* Admin button */}
          {isLoggedIn ? (
            /* Logado: mostra badge + botão sair */
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1.5">
                <ShieldCheck size={13} className="text-green-300" />
                <span className="text-xs font-semibold text-white">Admin</span>
              </div>
              <button
                onClick={onAdminLogout}
                title="Sair do admin"
                className="w-8 h-8 flex items-center justify-center rounded-full
                           bg-white/10 hover:bg-white/25 transition"
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            /* Deslogado: ícone de engrenagem */
            <button
              onClick={onAdminClick}
              title="Acesso administrativo"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/25 active:bg-white/30
                         transition-all duration-150"
            >
              <Settings size={17} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
