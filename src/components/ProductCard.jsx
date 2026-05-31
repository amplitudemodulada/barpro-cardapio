import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addItem, removeItem, getQty } = useCart();
  const qty = getQty(product.id);

  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
                        hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Imagem */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={e => {
            e.currentTarget.src = `https://placehold.co/400x400/f3f4f6/9ca3af?text=${encodeURIComponent(product.brand)}`;
          }}
        />
        {qty > 0 && (
          <span className="absolute top-2 right-2 bg-brand-600 text-white text-xs font-bold
                           w-6 h-6 rounded-full flex items-center justify-center shadow">
            {qty}
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-3 flex flex-col flex-1 gap-1">
        <span className="text-[10px] font-semibold text-brand-500 uppercase tracking-wider">
          {product.brand}
        </span>
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 flex-1">
          {product.description}
        </p>
        <span className="inline-block text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5 w-fit mt-0.5">
          {product.volume}
        </span>

        {/* Preço + Controles */}
        <div className="flex items-center justify-between mt-2 gap-2">
          <span className="text-base font-bold text-brand-700">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>

          {qty === 0 ? (
            <button
              onClick={() => addItem(product)}
              className="flex items-center gap-1 bg-brand-600 hover:bg-brand-700 active:bg-brand-800
                         text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition"
            >
              <Plus size={13} />
              Adicionar
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={() => removeItem(product.id)}
                className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-600
                           flex items-center justify-center transition"
              >
                <Minus size={14} />
              </button>
              <span className="w-6 text-center text-sm font-bold text-gray-800">{qty}</span>
              <button
                onClick={() => addItem(product)}
                className="w-7 h-7 rounded-lg bg-brand-600 hover:bg-brand-700 text-white
                           flex items-center justify-center transition"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
