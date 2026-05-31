import { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import CartBar from './components/CartBar';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [search, setSearch]           = useState('');
  const [activeCategory, setCategory] = useState(null);
  const [modal, setModal]             = useState(null); // null | 'cart' | 'checkout'

  const filtered = useMemo(() => {
    let list = PRODUCTS;
    if (activeCategory) list = list.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.volume.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  function handleCategoryChange(id) {
    setCategory(id);
    setSearch('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Sticky search + nav */}
        <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3 space-y-3">
            <SearchBar value={search} onChange={v => { setSearch(v); setCategory(null); }} />
            <CategoryNav active={activeCategory} onChange={handleCategoryChange} />
          </div>
        </div>

        {/* Main */}
        <main className="max-w-5xl mx-auto px-4 py-6 pb-32">
          {search && (
            <p className="text-sm text-gray-500 mb-4">
              {filtered.length} resultado{filtered.length !== 1 ? 's' : ''} para{' '}
              <strong className="text-gray-700">"{search}"</strong>
            </p>
          )}
          <ProductGrid
            products={filtered}
            activeCategory={activeCategory}
            search={search}
          />
        </main>

        {/* Cart floating bar */}
        <CartBar onOpen={() => setModal('cart')} />

        {/* Cart Modal */}
        {modal === 'cart' && (
          <CartModal
            onClose={() => setModal(null)}
            onCheckout={() => setModal('checkout')}
          />
        )}

        {/* Checkout Modal */}
        {modal === 'checkout' && (
          <CheckoutModal
            onClose={() => setModal(null)}
            onBack={() => setModal('cart')}
          />
        )}
      </div>
    </CartProvider>
  );
}
