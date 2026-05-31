import { useState } from 'react';
import { X, Image } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

const EMPTY = {
  category: '', brand: '', name: '', volume: '',
  description: '', price: '', image: '',
};

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function Input({ error, ...props }) {
  return (
    <input
      {...props}
      className={`w-full text-sm px-3 py-2.5 rounded-xl border bg-white transition
        focus:outline-none focus:ring-2 focus:ring-brand-400
        ${error ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
    />
  );
}

export default function ProductForm({ product, onSave, onClose }) {
  const isEdit = Boolean(product);
  const [form, setForm] = useState(
    product
      ? { ...product, price: String(product.price) }
      : EMPTY
  );
  const [errors, setErrors] = useState({});

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: undefined }));
  };

  function validate() {
    const e = {};
    if (!form.category) e.category = 'Obrigatório';
    if (!form.brand.trim()) e.brand = 'Obrigatório';
    if (!form.name.trim()) e.name = 'Obrigatório';
    if (!form.volume.trim()) e.volume = 'Obrigatório';
    if (!form.description.trim()) e.description = 'Obrigatório';
    const p = parseFloat(form.price.replace(',', '.'));
    if (isNaN(p) || p <= 0) e.price = 'Preço inválido';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const cat = CATEGORIES.find(c => c.id === form.category);
    const imageUrl = form.image.trim() ||
      `https://placehold.co/400x400/E5E7EB/374151?text=${encodeURIComponent(form.brand.substring(0, 12))}&font=roboto`;

    onSave({
      category: form.category,
      brand: form.brand.trim(),
      name: form.name.trim(),
      volume: form.volume.trim(),
      description: form.description.trim(),
      price: parseFloat(form.price.replace(',', '.')),
      image: imageUrl,
    });
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">{isEdit ? 'Editar Produto' : 'Novo Produto'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Categoria */}
          <Field label="Categoria *" error={errors.category}>
            <select
              value={form.category}
              onChange={e => set('category', e.target.value)}
              className={`w-full text-sm px-3 py-2.5 rounded-xl border bg-white transition
                focus:outline-none focus:ring-2 focus:ring-brand-400
                ${errors.category ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
            >
              <option value="">Selecione…</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.emoji} {c.label}</option>
              ))}
            </select>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Marca *" error={errors.brand}>
              <Input value={form.brand} error={errors.brand} onChange={e => set('brand', e.target.value)} placeholder="Ex: Heineken" />
            </Field>
            <Field label="Volume *" error={errors.volume}>
              <Input value={form.volume} error={errors.volume} onChange={e => set('volume', e.target.value)} placeholder="Ex: 350ml" />
            </Field>
          </div>

          <Field label="Nome do Produto *" error={errors.name}>
            <Input value={form.name} error={errors.name} onChange={e => set('name', e.target.value)} placeholder="Ex: Heineken Long Neck 330ml" />
          </Field>

          <Field label="Descrição *" error={errors.description}>
            <textarea
              value={form.description}
              onChange={e => set('description', e.target.value)}
              placeholder="Breve descrição do produto…"
              rows={2}
              className={`w-full text-sm px-3 py-2.5 rounded-xl border bg-white transition resize-none
                focus:outline-none focus:ring-2 focus:ring-brand-400
                ${errors.description ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
            />
            {errors.description && <p className="text-xs text-red-500">{errors.description}</p>}
          </Field>

          <Field label="Preço (R$) *" error={errors.price}>
            <Input
              value={form.price}
              error={errors.price}
              onChange={e => set('price', e.target.value)}
              placeholder="Ex: 9,99"
              inputMode="decimal"
            />
          </Field>

          {/* URL de imagem */}
          <Field label="URL da Imagem (opcional)">
            <div className="flex gap-2">
              <Input
                value={form.image}
                onChange={e => set('image', e.target.value)}
                placeholder="https://… (deixe vazio para placeholder automático)"
              />
              {form.image && (
                <img
                  src={form.image}
                  alt="preview"
                  className="w-11 h-11 rounded-xl object-cover border border-gray-200 flex-shrink-0"
                  onError={e => { e.currentTarget.style.display = 'none'; }}
                />
              )}
              {!form.image && (
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
                  <Image size={16} className="text-gray-400" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-400">
              Cole uma URL de imagem ou deixe em branco para gerar automaticamente.
            </p>
          </Field>
        </form>

        {/* Footer */}
        <div className="p-5 border-t border-gray-100 flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="flex-1 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition">
            {isEdit ? 'Salvar Alterações' : 'Adicionar Produto'}
          </button>
        </div>
      </div>
    </div>
  );
}
