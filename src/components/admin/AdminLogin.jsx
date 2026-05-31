import { useState } from 'react';
import { Lock, X, Eye, EyeOff } from 'lucide-react';
import { STORE_CONFIG } from '../../config';

export default function AdminLogin({ onSuccess, onClose }) {
  const [password, setPassword] = useState('');
  const [show, setShow]         = useState(false);
  const [error, setError]       = useState('');
  const [shake, setShake]       = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === STORE_CONFIG.adminPassword) {
      onSuccess();
    } else {
      setError('Senha incorreta');
      setShake(true);
      setPassword('');
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 ${shake ? 'animate-shake' : ''}`}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-brand-100 flex items-center justify-center">
              <Lock size={18} className="text-brand-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-gray-900">Área Administrativa</h2>
              <p className="text-xs text-gray-400">Acesso restrito</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              autoFocus
              type={show ? 'text' : 'password'}
              placeholder="Senha de administrador"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(''); }}
              className={`w-full px-4 py-3 pr-11 rounded-xl border text-sm transition
                focus:outline-none focus:ring-2 focus:ring-brand-400
                ${error ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            >
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {error && <p className="text-xs text-red-500 -mt-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 rounded-xl transition text-sm"
          >
            Entrar no Painel
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60%  { transform: translateX(-8px); }
          40%,80%  { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
}
