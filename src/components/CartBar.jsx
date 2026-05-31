import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartBar({ onOpen }) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none">
      <button
        onClick={onOpen}
        className="w-full max-w-lg mx-auto flex items-center gap-3 bg-brand-600 hover:bg-brand-700
                   active:scale-[0.98] text-white px-5 py-3.5 rounded-2xl shadow-2xl
                   pointer-events-auto transition-all duration-200"
      >
        <div className="relative">
          <ShoppingBag size={22} />
          <span className="absolute -top-2 -right-2 bg-white text-brand-600 text-[10px] font-bold
                           w-4.5 h-4.5 rounded-full flex items-center justify-center min-w-[18px] px-1">
            {totalItems}
          </span>
        </div>
        <span className="font-semibold text-sm flex-1 text-left">
          {totalItems} {totalItems === 1 ? 'item' : 'itens'} na sacola
        </span>
        <span className="font-bold text-sm">
          R$ {totalPrice.toFixed(2).replace('.', ',')}
        </span>
        <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-xl">
          Ver sacola →
        </span>
      </button>
    </div>
  );
}
