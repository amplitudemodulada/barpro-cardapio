import { useState } from 'react';
import { X, ChevronLeft, CheckCircle, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppMessage, validateForm, formatCPF, formatPhone } from '../utils/whatsapp';

const PAYMENT_OPTIONS = [
  { id: 'Pix',      label: 'Pix',     icon: '📲', desc: 'Transferência instantânea' },
  { id: 'Cartão',   label: 'Cartão',  icon: '💳', desc: 'Crédito ou Débito' },
  { id: 'Dinheiro', label: 'Dinheiro',icon: '💵', desc: 'Pagamento em espécie' },
];

const INITIAL_FORM = {
  nome: '', cpf: '', telefone: '', whatsapp: '',
  rua: '', numero: '', bairro: '', cidade: '', referencia: '',
  pagamento: '', troco: '', precisaTroco: false,
};

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
        {label}
      </label>
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

export default function CheckoutModal({ onClose, onBack }) {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    setErrors(e => ({ ...e, [field]: undefined }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Scroll to first error
      const first = Object.keys(errs)[0];
      document.getElementById(`field-${first}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const url = buildWhatsAppMessage(items, totalPrice, form);
    setSubmitted(true);
    // Abre o WhatsApp imediatamente (dentro do mesmo gesto do usuário evita bloqueio de popup)
    window.open(url, '_blank');
    setTimeout(() => {
      clearCart();
      onClose();
    }, 1800);
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-4 shadow-2xl mx-4">
          <CheckCircle size={64} className="text-green-500" />
          <h2 className="text-xl font-bold text-gray-900 text-center">Pedido Confirmado!</h2>
          <p className="text-sm text-gray-500 text-center">
            Abrindo o WhatsApp do depósito com seu pedido formatado…
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center sm:items-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-gray-50 w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl
                      max-h-[95vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-3 p-5 border-b border-gray-100 bg-white sm:rounded-t-2xl rounded-t-3xl">
          <button onClick={onBack} className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg font-bold text-gray-900 flex-1">Finalizar Pedido</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 transition text-gray-500">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-5">

            {/* Resumo do pedido */}
            <section className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Resumo do Pedido
              </h3>
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {items.map(i => (
                  <div key={i.id} className="flex justify-between text-sm">
                    <span className="text-gray-700 line-clamp-1 flex-1 mr-2">
                      {i.qty}x {i.name}
                    </span>
                    <span className="font-semibold text-gray-800 whitespace-nowrap">
                      R$ {(i.price * i.qty).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-base mt-3 pt-3 border-t border-gray-100">
                <span>Total</span>
                <span className="text-brand-700">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </section>

            {/* Dados Pessoais */}
            <section className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Seus Dados
              </h3>
              <div id="field-nome">
                <Field label="Nome Completo *" error={errors.nome}>
                  <Input
                    type="text"
                    placeholder="João da Silva"
                    value={form.nome}
                    error={errors.nome}
                    onChange={e => set('nome', e.target.value)}
                  />
                </Field>
              </div>
              <div id="field-cpf">
                <Field label="CPF *" error={errors.cpf}>
                  <Input
                    type="text"
                    placeholder="000.000.000-00"
                    value={form.cpf}
                    error={errors.cpf}
                    inputMode="numeric"
                    onChange={e => set('cpf', formatCPF(e.target.value))}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div id="field-telefone">
                  <Field label="Telefone *" error={errors.telefone}>
                    <Input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.telefone}
                      error={errors.telefone}
                      inputMode="tel"
                      onChange={e => set('telefone', formatPhone(e.target.value))}
                    />
                  </Field>
                </div>
                <div id="field-whatsapp">
                  <Field label="WhatsApp *" error={errors.whatsapp}>
                    <Input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={form.whatsapp}
                      error={errors.whatsapp}
                      inputMode="tel"
                      onChange={e => set('whatsapp', formatPhone(e.target.value))}
                    />
                  </Field>
                </div>
              </div>
            </section>

            {/* Endereço */}
            <section className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Endereço de Entrega
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2" id="field-rua">
                  <Field label="Rua / Av. *" error={errors.rua}>
                    <Input
                      type="text"
                      placeholder="Rua das Flores"
                      value={form.rua}
                      error={errors.rua}
                      onChange={e => set('rua', e.target.value)}
                    />
                  </Field>
                </div>
                <div id="field-numero">
                  <Field label="Número *" error={errors.numero}>
                    <Input
                      type="text"
                      placeholder="123"
                      value={form.numero}
                      error={errors.numero}
                      inputMode="numeric"
                      onChange={e => set('numero', e.target.value)}
                    />
                  </Field>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div id="field-bairro">
                  <Field label="Bairro *" error={errors.bairro}>
                    <Input
                      type="text"
                      placeholder="Centro"
                      value={form.bairro}
                      error={errors.bairro}
                      onChange={e => set('bairro', e.target.value)}
                    />
                  </Field>
                </div>
                <div id="field-cidade">
                  <Field label="Cidade *" error={errors.cidade}>
                    <Input
                      type="text"
                      placeholder="São Paulo"
                      value={form.cidade}
                      error={errors.cidade}
                      onChange={e => set('cidade', e.target.value)}
                    />
                  </Field>
                </div>
              </div>
              <div id="field-referencia">
                <Field label="Ponto de Referência *" error={errors.referencia}>
                  <Input
                    type="text"
                    placeholder="Próximo ao mercado X, portão azul…"
                    value={form.referencia}
                    error={errors.referencia}
                    onChange={e => set('referencia', e.target.value)}
                  />
                </Field>
              </div>
            </section>

            {/* Pagamento */}
            <section className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3"
                     id="field-pagamento">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Forma de Pagamento *
              </h3>

              <div className="grid grid-cols-3 gap-2">
                {PAYMENT_OPTIONS.map(opt => {
                  const selected = form.pagamento === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => { set('pagamento', opt.id); set('precisaTroco', false); set('troco', ''); }}
                      className={`flex flex-col items-center gap-1.5 py-4 px-2 rounded-2xl border-2 transition-all
                        ${selected
                          ? 'border-brand-500 bg-brand-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-brand-300 hover:bg-gray-50'
                        }`}
                    >
                      <span className="text-2xl">{opt.icon}</span>
                      <span className={`text-sm font-bold ${selected ? 'text-brand-700' : 'text-gray-700'}`}>
                        {opt.label}
                      </span>
                      <span className={`text-[10px] leading-tight text-center ${selected ? 'text-brand-500' : 'text-gray-400'}`}>
                        {opt.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {errors.pagamento && (
                <p className="text-xs text-red-500">{errors.pagamento}</p>
              )}

              {/* Troco — só aparece quando Dinheiro */}
              {form.pagamento === 'Dinheiro' && (
                <div className="space-y-2 pt-1 border-t border-gray-100">
                  <label className="flex items-center gap-2 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={form.precisaTroco}
                      onChange={e => { set('precisaTroco', e.target.checked); set('troco', ''); }}
                      className="w-4 h-4 accent-brand-600"
                    />
                    <span className="text-sm text-gray-700">Precisa de troco?</span>
                  </label>
                  {form.precisaTroco && (
                    <Field label="Troco para quanto? (R$)">
                      <Input
                        type="text"
                        placeholder="Ex: 50,00"
                        value={form.troco}
                        inputMode="decimal"
                        onChange={e => set('troco', e.target.value)}
                      />
                    </Field>
                  )}
                </div>
              )}
            </section>

            {/* Espaço para o botão fixo não cobrir */}
            <div className="h-4" />
          </div>
        </form>

        {/* Footer CTA */}
        <div className="p-4 bg-white border-t border-gray-100 sm:rounded-b-2xl">
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white
                       font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-base"
          >
            <MessageCircle size={20} />
            Confirmar Pedido via WhatsApp
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">
            Você será redirecionado para o WhatsApp do depósito
          </p>
        </div>
      </div>
    </div>
  );
}
