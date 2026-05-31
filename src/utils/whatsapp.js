// Número do WhatsApp do estabelecimento (com DDI, sem + e sem espaços)
export const WHATSAPP_NUMBER = '5511999999999';

const fmt = (n) => n.toFixed(2).replace('.', ',');
const line = (char = '-', len = 40) => char.repeat(len);
const center = (text, len = 40) => {
  const pad = Math.max(0, Math.floor((len - text.length) / 2));
  return ' '.repeat(pad) + text;
};

export function buildWhatsAppMessage(items, total, form) {
  const {
    nome, cpf, telefone, whatsapp,
    rua, numero, bairro, cidade, referencia,
    pagamento, troco,
  } = form;

  const itemLines = items
    .map(i => {
      const itemTotal = (i.price * i.qty).toFixed(2).replace('.', ',');
      const label = `${i.qty}x ${i.name}`;
      const price = `R$ ${itemTotal}`;
      const dots = '.'.repeat(Math.max(1, 40 - label.length - price.length));
      return `${label}${dots}${price}`;
    })
    .join('\n');

  const trocoPart =
    pagamento === 'Dinheiro' && troco
      ? `\n*Troco para:* R$ ${troco}`
      : '';

  const message = [
    line('='),
    center('*🍺 NOVO PEDIDO - DEPÓSITO 🍺*'),
    line('='),
    `*CLIENTE:* ${nome}`,
    `*CPF:* ${cpf}`,
    `*TEL/WHATS:* ${telefone} / ${whatsapp}`,
    line(),
    `*ENTREGA:* ${rua}, ${numero} - ${bairro}, ${cidade}`,
    `*REFERÊNCIA:* ${referencia}`,
    line('='),
    '*ITENS DO PEDIDO:*',
    itemLines,
    line(),
    `*TOTAL: R$ ${fmt(total)}*`,
    `*PAGAMENTO:* ${pagamento}${trocoPart}`,
    line('='),
    center('_Pedido gerado pelo Cardápio Virtual_'),
  ].join('\n');

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function formatCPF(value) {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .slice(0, 14);
}

export function formatPhone(value) {
  const d = value.replace(/\D/g, '');
  if (d.length <= 10) {
    return d.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
  }
  return d.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').slice(0, 15).trim();
}

export function validateForm(form) {
  const errors = {};
  if (!form.nome?.trim()) errors.nome = 'Nome é obrigatório';
  if (!form.cpf || form.cpf.replace(/\D/g, '').length < 11)
    errors.cpf = 'CPF inválido';
  if (!form.telefone || form.telefone.replace(/\D/g, '').length < 10)
    errors.telefone = 'Telefone inválido';
  if (!form.whatsapp || form.whatsapp.replace(/\D/g, '').length < 10)
    errors.whatsapp = 'WhatsApp inválido';
  if (!form.rua?.trim()) errors.rua = 'Rua é obrigatória';
  if (!form.numero?.trim()) errors.numero = 'Número é obrigatório';
  if (!form.bairro?.trim()) errors.bairro = 'Bairro é obrigatório';
  if (!form.cidade?.trim()) errors.cidade = 'Cidade é obrigatória';
  if (!form.referencia?.trim()) errors.referencia = 'Ponto de referência é obrigatório';
  if (!form.pagamento) errors.pagamento = 'Selecione a forma de pagamento';
  return errors;
}
