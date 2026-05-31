import { CATEGORIES } from '../data/products';

export default function CategoryNav({ active, onChange }) {
  return (
    <nav className="overflow-x-auto scrollbar-hide -mx-4 px-4">
      <ul className="flex gap-2 w-max pb-1">
        <li>
          <button
            onClick={() => onChange(null)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition
              ${active === null
                ? 'bg-brand-600 text-white shadow'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-400 hover:text-brand-600'
              }`}
          >
            <span>🏪</span> Todos
          </button>
        </li>
        {CATEGORIES.map(cat => (
          <li key={cat.id}>
            <button
              onClick={() => onChange(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition
                ${active === cat.id
                  ? 'bg-brand-600 text-white shadow'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-400 hover:text-brand-600'
                }`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
