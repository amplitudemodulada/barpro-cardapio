import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const initialState = { items: [] };

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.id === action.product.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.product, qty: 1 }] };
    }
    case 'REMOVE': {
      const existing = state.items.find(i => i.id === action.id);
      if (!existing) return state;
      if (existing.qty === 1) {
        return { items: state.items.filter(i => i.id !== action.id) };
      }
      return {
        items: state.items.map(i =>
          i.id === action.id ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    }
    case 'DELETE':
      return { items: state.items.filter(i => i.id !== action.id) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem    = useCallback((product) => dispatch({ type: 'ADD', product }), []);
  const removeItem = useCallback((id)      => dispatch({ type: 'REMOVE', id }), []);
  const deleteItem = useCallback((id)      => dispatch({ type: 'DELETE', id }), []);
  const clearCart  = useCallback(()        => dispatch({ type: 'CLEAR' }), []);

  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const getQty     = (id) => state.items.find(i => i.id === id)?.qty ?? 0;

  return (
    <CartContext.Provider value={{
      items: state.items, totalItems, totalPrice,
      addItem, removeItem, deleteItem, clearCart, getQty,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
