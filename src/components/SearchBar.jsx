import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Buscar produto ou categoria…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-9 pr-9 py-2.5 text-sm rounded-xl border border-gray-200 bg-white
                   focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent
                   placeholder-gray-400 shadow-sm transition"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
