import { useState, useMemo } from 'react';
import {
  X, Plus, Search, Pencil, Trash2, RotateCcw,
  LogOut, Package, AlertTriangle,
} from 'lucide-react';
import { useProducts } from '../../context/ProductsContext';
import { CATEGORIES } from '../../data/products';
import ProductForm from './ProductForm';

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full">
        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangle size={20} className="text-red-600" />
          </div>
          <p className="text-sm text-gray-700 mt-1">{message}</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
            Cancelar
          </button>
          <button onClick={onConfirm} className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminPanel({ onLogout }) {
  const { products, addProduct, updateProduct, deleteProduct, resetToDefault } = useProducts();
  const [search, setSearch]       = useState('');
  const [filterCat, setFilterCat] = useState('');
  const [formTarget, setFormTarget] = useState(null); // null | 'new' | product object
  const [confirmDelete, setConfirmDelete] = useState(null); // product id
  const [confirmReset, setConfirmReset]   = useState(false);

  const filtered = useMemo(() => {
    let list = products;
    if (filterCat) list = list.filter(p => p.category === filterCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
      );
    }
    return list;
  }, [products, search, filterCat]);

  function handleSave(data) {
    if (formTarget === 'new') {
      addProduct(data);
    } else {
      updateProduct(formTarget.id, data);
    }
    setFormTarget(null);
  }

  return (
    <>
      {/* Drawer */}
      <div className="fixed inset-0 z-50 flex">
        {/* Backdrop */}
        <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={onLogout} />

        {/* Panel */}
        <div className="w-full max-w-lg bg-white h-full flex flex-col shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-700 to-brand-600 text-white px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package size={20} />
                <div>
                  <h2 className="font-bold text-base">Painel Admin</h2>
                  <p className="text-brand-200 text-xs">{products.length} produtos cadastrados</p>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-1.5 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition"
              >
                <LogOut size={13} /> Sair
              </button>
            </div>

            {/* Search */}
            <div className="relative mt-3">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar produto…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-sm bg-white/20 border border-white/30 rounded-xl
                           text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition"
              />
            </div>
          </div>

          {/* Filters + Actions */}
          <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
            <select
              value={filterCat}
              onChange={e => setFilterCat(e.target.value)}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white
                         focus:outline-none focus:ring-2 focus:ring-brand-400 text-gray-600"
            >
              <option value="">Todas as categorias</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>
              ))}
            </select>
            <button
              onClick={() => setFormTarget('new')}
              className="flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white
                         text-xs font-semibold px-3 py-2 rounded-xl transition whitespace-nowrap"
            >
              <Plus size={14} /> Novo Produto
            </button>
          </div>

          {/* Product list */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center py-12 text-gray-400">
                <Package size={36} className="mb-2 opacity-30" />
                <p className="text-sm">Nenhum produto encontrado</p>
              </div>
            ) : (
              filtered.map(product => {
                const cat = CATEGORIES.find(c => c.id === product.category);
                return (
                  <div key={product.id} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0 bg-gray-100"
                      onError={e => { e.currentTarget.src = 'https://placehold.co/48x48/f3f4f6/9ca3af?text=img'; }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">{product.name}</p>
                      <p className="text-xs text-gray-400">{cat?.emoji} {cat?.label} • {product.volume}</p>
                      <p className="text-sm font-bold text-brand-600 mt-0.5">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => setFormTarget(product)}
                        className="w-8 h-8 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition"
                        title="Editar"
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        onClick={() => setConfirmDelete(product.id)}
                        className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 flex items-center justify-center transition"
                        title="Excluir"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer — reset */}
          <div className="px-4 py-3 border-t border-gray-100">
            <button
              onClick={() => setConfirmReset(true)}
              className="w-full flex items-center justify-center gap-2 text-xs text-gray-400
                         hover:text-red-500 py-2 rounded-xl hover:bg-red-50 transition"
            >
              <RotateCcw size={13} />
              Restaurar cardápio original (apaga edições locais)
            </button>
          </div>
        </div>
      </div>

      {/* Product form modal */}
      {formTarget !== null && (
        <ProductForm
          product={formTarget === 'new' ? null : formTarget}
          onSave={handleSave}
          onClose={() => setFormTarget(null)}
        />
      )}

      {/* Confirm delete */}
      {confirmDelete !== null && (
        <ConfirmDialog
          message="Tem certeza que deseja excluir este produto? Esta ação não pode ser desfeita."
          onConfirm={() => { deleteProduct(confirmDelete); setConfirmDelete(null); }}
          onCancel={() => setConfirmDelete(null)}
        />
      )}

      {/* Confirm reset */}
      {confirmReset && (
        <ConfirmDialog
          message="Isso vai restaurar todos os produtos originais e apagar suas alterações locais. Continuar?"
          onConfirm={() => { resetToDefault(); setConfirmReset(false); }}
          onCancel={() => setConfirmReset(false)}
        />
      )}
    </>
  );
}
