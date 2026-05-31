import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { CartProvider } from './context/CartContext';
import { ProductsProvider, useProducts } from './context/ProductsContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import CartBar from './components/CartBar';
import CartModal from './components/CartModal';
import CheckoutModal from './components/CheckoutModal';
import AdminLogin from './components/admin/AdminLogin';
import AdminPanel from './components/admin/AdminPanel';

// ─── Inner app — needs ProductsContext ───────────────────────────────────────
function InnerApp() {
  const { products } = useProducts();

  const [search, setSearch]           = useState('');
  const [activeCategory, setCategory] = useState(null);
  const [modal, setModal]             = useState(null); // null | 'cart' | 'checkout'

  // Admin state
  const [adminState, setAdminState]   = useState('idle'); // idle | login | panel
  const logoTapsRef                   = useRef(0);
  const logoTapTimerRef               = useRef(null);

  // Open admin via URL param  ?admin
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('admin')) {
      setAdminState('login');
    }
  }, []);

  // Hidden trigger: tap the logo 5× quickly
  const handleLogoTap = useCallback(() => {
    logoTapsRef.current += 1;
    clearTimeout(logoTapTimerRef.current);
    logoTapTimerRef.current = setTimeout(() => { logoTapsRef.current = 0; }, 1500);
    if (logoTapsRef.current >= 5) {
      logoTapsRef.current = 0;
      setAdminState('login');
    }
  }, []);

  const filtered = useMemo(() => {
    let list = products;
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
  }, [products, search, activeCategory]);

  function handleCategoryChange(id) {
    setCategory(id);
    setSearch('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogoTap={handleLogoTap} />

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

      {/* Admin trigger — gear icon no rodapé, visível mas discreto */}
      <footer className="text-center pb-6 pt-2">
        <button
          onClick={() => setAdminState('login')}
          className="text-gray-200 hover:text-gray-400 transition text-xs select-none"
          title="Área administrativa"
        >
          ⚙
        </button>
      </footer>

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

      {/* Admin Login */}
      {adminState === 'login' && (
        <AdminLogin
          onSuccess={() => setAdminState('panel')}
          onClose={() => setAdminState('idle')}
        />
      )}

      {/* Admin Panel */}
      {adminState === 'panel' && (
        <AdminPanel onLogout={() => setAdminState('idle')} />
      )}
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <InnerApp />
      </CartProvider>
    </ProductsProvider>
  );
}
