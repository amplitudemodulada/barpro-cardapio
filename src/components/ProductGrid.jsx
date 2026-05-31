import { CATEGORIES } from '../data/products';
import ProductCard from './ProductCard';

function Section({ category, products }) {
  if (!products.length) return null;
  const cat = CATEGORIES.find(c => c.id === category);
  return (
    <section className="mb-8" id={`cat-${category}`}>
      <h2 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
        <span className="text-xl">{cat?.emoji}</span>
        {cat?.label}
        <span className="ml-auto text-xs font-normal text-gray-400">{products.length} itens</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

export default function ProductGrid({ products, activeCategory, search }) {
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <span className="text-5xl mb-3">🔍</span>
        <p className="text-sm font-medium">Nenhum produto encontrado</p>
        <p className="text-xs">Tente outro termo ou categoria</p>
      </div>
    );
  }

  // Se filtro ativo ou busca, mostra tudo numa grade flat
  if (activeCategory || search) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    );
  }

  // Agrupa por categoria mantendo a ordem de CATEGORIES
  const grouped = CATEGORIES.map(cat => ({
    category: cat.id,
    products: products.filter(p => p.category === cat.id),
  }));

  return (
    <div>
      {grouped.map(g => (
        <Section key={g.category} {...g} />
      ))}
    </div>
  );
}
