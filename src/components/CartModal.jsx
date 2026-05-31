import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartModal({ onClose, onCheckout }) {
  const { items, totalItems, totalPrice, addItem, removeItem, deleteItem } = useCart();

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl
                      max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 p-5 border-b border-gray-100">
          <ShoppingBag size={20} className="text-brand-600" />
          <h2 className="text-lg font-bold text-gray-900 flex-1">
            Sua Sacola
            <span className="ml-2 text-sm font-normal text-gray-400">
              ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
            </span>
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center py-12 text-gray-400">
              <ShoppingBag size={48} className="mb-3 opacity-30" />
              <p className="font-medium">Sua sacola está vazia</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                  onError={e => {
                    e.currentTarget.src = 'https://placehold.co/56x56/f3f4f6/9ca3af?text=img';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.volume}</p>
                  <p className="text-sm font-bold text-brand-600 mt-0.5">
                    R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-gray-300 hover:text-red-500 transition"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 rounded-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-5 text-center text-sm font-bold">{item.qty}</span>
                    <button
                      onClick={() => addItem(item)}
                      className="w-6 h-6 rounded-md bg-brand-600 hover:bg-brand-700 text-white flex items-center justify-center transition"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-gray-100 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Total</span>
              <span className="text-xl font-bold text-brand-700">
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white
                         font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2"
            >
              <span>Finalizar Pedido</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
