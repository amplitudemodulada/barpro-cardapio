import { createContext, useContext, useState, useCallback } from 'react';
import { PRODUCTS as DEFAULT_PRODUCTS } from '../data/products';

const STORAGE_KEY = 'barpro_products';

function loadProducts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

function save(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(loadProducts);

  const addProduct = useCallback((data) => {
    setProducts(prev => {
      const maxId = prev.reduce((m, p) => Math.max(m, p.id), 0);
      const next = [...prev, { ...data, id: maxId + 1 }];
      save(next);
      return next;
    });
  }, []);

  const updateProduct = useCallback((id, data) => {
    setProducts(prev => {
      const next = prev.map(p => p.id === id ? { ...p, ...data } : p);
      save(next);
      return next;
    });
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts(prev => {
      const next = prev.filter(p => p.id !== id);
      save(next);
      return next;
    });
  }, []);

  const resetToDefault = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProducts(DEFAULT_PRODUCTS);
  }, []);

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, resetToDefault }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error('useProducts must be inside ProductsProvider');
  return ctx;
}
