// ============================================================
// BASE DE DADOS MOCKADA — DEPÓSITO DE BEBIDAS
// ============================================================

export const CATEGORIES = [
  { id: 'cervejas-nacionais',      label: 'Cervejas Nacionais',  emoji: '🍺' },
  { id: 'cervejas-internacionais', label: 'Cervejas Importadas', emoji: '🌍' },
  { id: 'cachaças',                label: 'Cachaças',             emoji: '🥃' },
  { id: 'vodkas',                  label: 'Vodkas',               emoji: '🍸' },
  { id: 'gins',                    label: 'Gins',                 emoji: '🫧' },
  { id: 'whiskies',                label: 'Whiskies',             emoji: '🥃' },
  { id: 'outros-destilados',       label: 'Outros Destilados',    emoji: '🍹' },
  { id: 'refrigerantes',           label: 'Refrigerantes',        emoji: '🥤' },
  { id: 'energeticos',             label: 'Energéticos',          emoji: '⚡' },
  { id: 'hidratacao',              label: 'Hidratação',           emoji: '💧' },
  { id: 'gelo',                    label: 'Gelo',                 emoji: '🧊' },
  { id: 'churrasco',               label: 'Churrasco',            emoji: '🔥' },
  { id: 'snacks',                  label: 'Snacks & Petiscos',    emoji: '🍿' },
  { id: 'vinhos',                  label: 'Vinhos & Espumantes',  emoji: '🍷' },
  { id: 'drinks-prontos',          label: 'Drinks Prontos',       emoji: '🍹' },
  { id: 'utilidades',              label: 'Utilidades',           emoji: '🛒' },
];

// Paleta de cores por categoria para os placeholders
const IMG = (cat, name, w = 400, h = 400) => {
  const colors = {
    'cervejas-nacionais':      'F59E0B/1a1a2e',
    'cervejas-internacionais': 'FBBF24/1a1a2e',
    'cachaças':                '92400E/fff',
    'vodkas':                  '818CF8/fff',
    'gins':                    '34D399/1a1a2e',
    'whiskies':                'B45309/fff',
    'outros-destilados':       'F472B6/fff',
    'refrigerantes':           'EF4444/fff',
    'energeticos':             '10B981/fff',
    'hidratacao':              '60A5FA/fff',
    'gelo':                    'BAE6FD/1a1a2e',
    'churrasco':               'DC2626/fff',
    'snacks':                  'A78BFA/fff',
  };
  const [bg, fg] = (colors[cat] || 'E5E7EB/374151').split('/');
  const label = encodeURIComponent(name.substring(0, 18));
  return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${label}&font=roboto`;
};

export const PRODUCTS = [
  // ══════════════════════════════════════════════════════════
  // CERVEJAS NACIONAIS
  // ══════════════════════════════════════════════════════════
  {
    id: 1, category: 'cervejas-nacionais', brand: 'Brahma',
    name: 'Brahma Latão 473ml', volume: 'Latão 473ml',
    description: 'Cerveja Pilsen leve e refrescante, a mais tradicional do Brasil.',
    price: 5.99, image: IMG('cervejas-nacionais', 'Brahma Latão'),
  },
  {
    id: 2, category: 'cervejas-nacionais', brand: 'Brahma',
    name: 'Brahma Lata 350ml', volume: 'Lata 350ml',
    description: 'Clássica Brahma em lata, gelada e saborosa.',
    price: 4.49, image: IMG('cervejas-nacionais', 'Brahma Lata'),
  },
  {
    id: 3, category: 'cervejas-nacionais', brand: 'Brahma',
    name: 'Brahma Garrafa 600ml', volume: 'Garrafa 600ml',
    description: 'A garrafa Brahma para compartilhar com os amigos.',
    price: 7.99, image: IMG('cervejas-nacionais', 'Brahma 600ml'),
  },
  {
    id: 4, category: 'cervejas-nacionais', brand: 'Brahma',
    name: 'Brahma Zero Álcool 350ml', volume: 'Lata 350ml',
    description: 'Sabor Brahma sem álcool para toda a galera.',
    price: 4.99, image: IMG('cervejas-nacionais', 'Brahma Zero'),
  },
  {
    id: 5, category: 'cervejas-nacionais', brand: 'Skol',
    name: 'Skol Latão 473ml', volume: 'Latão 473ml',
    description: 'A cerveja que desce redondo — clássica Skol.',
    price: 5.99, image: IMG('cervejas-nacionais', 'Skol Latão'),
  },
  {
    id: 6, category: 'cervejas-nacionais', brand: 'Skol',
    name: 'Skol Lata 350ml', volume: 'Lata 350ml',
    description: 'Gelada e leve, perfeita para o dia a dia.',
    price: 4.49, image: IMG('cervejas-nacionais', 'Skol Lata'),
  },
  {
    id: 7, category: 'cervejas-nacionais', brand: 'Antarctica',
    name: 'Antarctica Long Neck 355ml', volume: 'Long Neck 355ml',
    description: 'Cerveja Pilsen encorpada com sabor marcante.',
    price: 6.49, image: IMG('cervejas-nacionais', 'Antarctica LN'),
  },
  {
    id: 8, category: 'cervejas-nacionais', brand: 'Antarctica',
    name: 'Antarctica Garrafa 600ml', volume: 'Garrafa 600ml',
    description: 'A tradicional Antarctica no formato família.',
    price: 8.49, image: IMG('cervejas-nacionais', 'Antarctica 600'),
  },
  {
    id: 9, category: 'cervejas-nacionais', brand: 'Heineken',
    name: 'Heineken Nacional Latão 473ml', volume: 'Latão 473ml',
    description: 'Heineken produzida no Brasil com qualidade premium.',
    price: 7.49, image: IMG('cervejas-nacionais', 'Heineken Latão'),
  },
  {
    id: 10, category: 'cervejas-nacionais', brand: 'Heineken',
    name: 'Heineken Zero 330ml', volume: 'Long Neck 330ml',
    description: 'Todo sabor Heineken sem álcool.',
    price: 7.99, image: IMG('cervejas-nacionais', 'Heineken Zero'),
  },
  {
    id: 11, category: 'cervejas-nacionais', brand: 'Amstel',
    name: 'Amstel Latão 473ml', volume: 'Latão 473ml',
    description: 'Cerveja holandesa produzida no Brasil — suave e refrescante.',
    price: 6.99, image: IMG('cervejas-nacionais', 'Amstel Latão'),
  },
  {
    id: 12, category: 'cervejas-nacionais', brand: 'Petra',
    name: 'Petra Lata 350ml', volume: 'Lata 350ml',
    description: 'Feita com Malte Especial, sabor único e inconfundível.',
    price: 5.49, image: IMG('cervejas-nacionais', 'Petra Lata'),
  },
  {
    id: 13, category: 'cervejas-nacionais', brand: 'Original',
    name: 'Original Long Neck 355ml', volume: 'Long Neck 355ml',
    description: 'Cerveja com processo de lupulagem dupla, refrescante.',
    price: 7.49, image: IMG('cervejas-nacionais', 'Original LN'),
  },
  {
    id: 14, category: 'cervejas-nacionais', brand: 'Original',
    name: 'Original Garrafa 600ml', volume: 'Garrafa 600ml',
    description: 'Original em tamanho família para o churrasco.',
    price: 10.49, image: IMG('cervejas-nacionais', 'Original 600'),
  },
  {
    id: 15, category: 'cervejas-nacionais', brand: 'Spaten',
    name: 'Spaten Lata 350ml', volume: 'Lata 350ml',
    description: 'Cerveja lager alemã feita no Brasil — tradição bávara.',
    price: 5.99, image: IMG('cervejas-nacionais', 'Spaten Lata'),
  },
  {
    id: 16, category: 'cervejas-nacionais', brand: 'Eisenbahn',
    name: 'Eisenbahn Weizenbier 500ml', volume: 'Garrafa 500ml',
    description: 'Cerveja de trigo artesanal com aroma frutado e banana.',
    price: 11.99, image: IMG('cervejas-nacionais', 'Eisenbahn'),
  },
  {
    id: 17, category: 'cervejas-nacionais', brand: 'Eisenbahn',
    name: 'Eisenbahn Pale Ale 500ml', volume: 'Garrafa 500ml',
    description: 'Cerveja Pale Ale encorpada e aromática.',
    price: 11.99, image: IMG('cervejas-nacionais', 'Eisenbahn PA'),
  },

  // ══════════════════════════════════════════════════════════
  // CERVEJAS INTERNACIONAIS
  // ══════════════════════════════════════════════════════════
  {
    id: 18, category: 'cervejas-internacionais', brand: 'Corona',
    name: 'Corona Extra Long Neck 355ml', volume: 'Long Neck 355ml',
    description: 'Cerveja mexicana leve, servida com limão. Clássica de praia.',
    price: 9.99, image: IMG('cervejas-internacionais', 'Corona Extra'),
  },
  {
    id: 19, category: 'cervejas-internacionais', brand: 'Stella Artois',
    name: 'Stella Artois Long Neck 330ml', volume: 'Long Neck 330ml',
    description: 'A lager belga premium com amargor equilibrado.',
    price: 8.99, image: IMG('cervejas-internacionais', 'Stella Artois'),
  },
  {
    id: 20, category: 'cervejas-internacionais', brand: 'Stella Artois',
    name: 'Stella Artois Garrafa 600ml', volume: 'Garrafa 600ml',
    description: 'Stella em tamanho generoso para a mesa.',
    price: 14.99, image: IMG('cervejas-internacionais', 'Stella 600ml'),
  },
  {
    id: 21, category: 'cervejas-internacionais', brand: 'Budweiser',
    name: 'Budweiser Long Neck 330ml', volume: 'Long Neck 330ml',
    description: 'O Rei das Cervejas — americana suave e refrescante.',
    price: 7.99, image: IMG('cervejas-internacionais', 'Budweiser LN'),
  },
  {
    id: 22, category: 'cervejas-internacionais', brand: 'Budweiser',
    name: 'Budweiser Latão 473ml', volume: 'Latão 473ml',
    description: 'Budweiser em formato latão para maior frescor.',
    price: 8.49, image: IMG('cervejas-internacionais', 'Budweiser Lat'),
  },
  {
    id: 23, category: 'cervejas-internacionais', brand: 'Guinness',
    name: 'Guinness Draught Lata 440ml', volume: 'Lata 440ml',
    description: 'Stout irlandesa icônica — cremosa, torrada e inconfundível.',
    price: 17.99, image: IMG('cervejas-internacionais', 'Guinness'),
  },
  {
    id: 24, category: 'cervejas-internacionais', brand: 'Blue Moon',
    name: 'Blue Moon Long Neck 355ml', volume: 'Long Neck 355ml',
    description: 'Belgian White americana com casca de laranja e coentro.',
    price: 14.99, image: IMG('cervejas-internacionais', 'Blue Moon'),
  },
  {
    id: 25, category: 'cervejas-internacionais', brand: 'Paulaner',
    name: 'Paulaner Weißbier 500ml', volume: 'Garrafa 500ml',
    description: 'A mais famosa cerveja de trigo da Baviera — Alemanha.',
    price: 18.99, image: IMG('cervejas-internacionais', 'Paulaner'),
  },
  {
    id: 26, category: 'cervejas-internacionais', brand: 'Erdinger',
    name: 'Erdinger Weißbier 500ml', volume: 'Garrafa 500ml',
    description: 'Trigo alemão premium, turva e naturalmente fermentada.',
    price: 19.99, image: IMG('cervejas-internacionais', 'Erdinger'),
  },
  {
    id: 27, category: 'cervejas-internacionais', brand: 'Heineken',
    name: 'Heineken Importada Long Neck 330ml', volume: 'Long Neck 330ml',
    description: 'A famosa lager holandesa importada, sabor inigualável.',
    price: 11.99, image: IMG('cervejas-internacionais', 'Heineken Imp'),
  },

  // ══════════════════════════════════════════════════════════
  // CACHAÇAS
  // ══════════════════════════════════════════════════════════
  {
    id: 28, category: 'cachaças', brand: 'Sagatiba',
    name: 'Sagatiba Pura 700ml', volume: '700ml',
    description: 'Cachaça destilada em coluna de aço, suave e limpa.',
    price: 34.99, image: IMG('cachaças', 'Sagatiba Pura'),
  },
  {
    id: 29, category: 'cachaças', brand: 'Sagatiba',
    name: 'Sagatiba Velha Carvalho 700ml', volume: '700ml',
    description: 'Envelhecida em carvalho europeu — rica e aveludada.',
    price: 59.99, image: IMG('cachaças', 'Sagatiba Velha'),
  },
  {
    id: 30, category: 'cachaças', brand: 'Salinas',
    name: 'Salinas Tradicional 700ml', volume: '700ml',
    description: 'Cachaça artesanal mineira envelhecida em bálsamo.',
    price: 44.99, image: IMG('cachaças', 'Salinas Trad'),
  },
  {
    id: 31, category: 'cachaças', brand: 'Velho Barreiro',
    name: 'Velho Barreiro Prata 1L', volume: '1 Litro',
    description: 'Cachaça de alambique, sabor marcante e encorpado.',
    price: 29.99, image: IMG('cachaças', 'Velho Barreiro'),
  },
  {
    id: 32, category: 'cachaças', brand: 'Velho Barreiro',
    name: 'Velho Barreiro Ouro 1L', volume: '1 Litro',
    description: 'Levemente adoçada, perfeita para caipirinha.',
    price: 31.99, image: IMG('cachaças', 'VB Ouro'),
  },
  {
    id: 33, category: 'cachaças', brand: 'Pitú',
    name: 'Pitú Cachaça 1L', volume: '1 Litro',
    description: 'A mais famosa cachaça do Nordeste — leve e suave.',
    price: 19.99, image: IMG('cachaças', 'Pitú'),
  },
  {
    id: 34, category: 'cachaças', brand: 'Pitú',
    name: 'Pitú Cachaça 900ml', volume: '900ml',
    description: 'Cachaça Pitú em tamanho 900ml, ideal para festas.',
    price: 17.49, image: IMG('cachaças', 'Pitú 900ml'),
  },

  // ══════════════════════════════════════════════════════════
  // VODKAS
  // ══════════════════════════════════════════════════════════
  {
    id: 35, category: 'vodkas', brand: 'Smirnoff',
    name: 'Smirnoff Red 998ml', volume: '998ml',
    description: 'Vodka n°1 do mundo — suave, limpa e versátil.',
    price: 49.99, image: IMG('vodkas', 'Smirnoff Red'),
  },
  {
    id: 36, category: 'vodkas', brand: 'Smirnoff',
    name: 'Smirnoff Ice Limão 275ml', volume: '275ml',
    description: 'Drink pronto, gelado e refrescante com sabor limão.',
    price: 7.99, image: IMG('vodkas', 'Smirnoff Ice'),
  },
  {
    id: 37, category: 'vodkas', brand: 'Absolut',
    name: 'Absolut Original 750ml', volume: '750ml',
    description: 'Vodka sueca premium — destilada em Åhus desde 1879.',
    price: 79.99, image: IMG('vodkas', 'Absolut Orig'),
  },
  {
    id: 38, category: 'vodkas', brand: 'Absolut',
    name: 'Absolut Lime 750ml', volume: '750ml',
    description: 'Absolut com sabor de limão natural — perfeita para drinks.',
    price: 84.99, image: IMG('vodkas', 'Absolut Lime'),
  },
  {
    id: 39, category: 'vodkas', brand: 'Grey Goose',
    name: 'Grey Goose 750ml', volume: '750ml',
    description: 'Vodka francesa premium destilada no Cognac. Ultra suave.',
    price: 189.99, image: IMG('vodkas', 'Grey Goose'),
  },
  {
    id: 40, category: 'vodkas', brand: 'Skyy',
    name: 'Skyy Vodka 750ml', volume: '750ml',
    description: 'Vodka americana quadrupla-destilada — cristalina e pura.',
    price: 74.99, image: IMG('vodkas', 'Skyy Vodka'),
  },

  // ══════════════════════════════════════════════════════════
  // GINS
  // ══════════════════════════════════════════════════════════
  {
    id: 41, category: 'gins', brand: 'Tanqueray',
    name: 'Tanqueray London Dry 750ml', volume: '750ml',
    description: 'Gin inglês clássico quadrupla-destilado. Aromático e seco.',
    price: 109.99, image: IMG('gins', 'Tanqueray LD'),
  },
  {
    id: 42, category: 'gins', brand: 'Tanqueray',
    name: 'Tanqueray Sevilla 750ml', volume: '750ml',
    description: 'Com laranja de Sevilha — cítrico e floral. Gin exclusivo.',
    price: 119.99, image: IMG('gins', 'Tanqueray Sev'),
  },
  {
    id: 43, category: 'gins', brand: 'Bombay Sapphire',
    name: 'Bombay Sapphire 750ml', volume: '750ml',
    description: 'Destilado a vapor com 10 botânicos exóticos. Icônico.',
    price: 114.99, image: IMG('gins', 'Bombay Saph'),
  },
  {
    id: 44, category: 'gins', brand: "Gordon's",
    name: "Gordon's London Dry 750ml", volume: '750ml',
    description: 'O gin mais popular do mundo. Seco, fresco e refrescante.',
    price: 79.99, image: IMG('gins', "Gordon's"),
  },
  {
    id: 45, category: 'gins', brand: 'Beefeater',
    name: 'Beefeater London Dry 750ml', volume: '750ml',
    description: 'Tradicional London Dry com zimbro intenso e cítrico.',
    price: 89.99, image: IMG('gins', 'Beefeater'),
  },
  {
    id: 46, category: 'gins', brand: 'Beefeater',
    name: 'Beefeater Pink 750ml', volume: '750ml',
    description: 'Gin rosé com sabor de morango — leve e divertido.',
    price: 94.99, image: IMG('gins', 'Beefeater Pink'),
  },

  // ══════════════════════════════════════════════════════════
  // WHISKIES
  // ══════════════════════════════════════════════════════════
  {
    id: 47, category: 'whiskies', brand: 'Johnnie Walker',
    name: 'Johnnie Walker Red Label 1L', volume: '1 Litro',
    description: 'Blended escocês de entrada — encorpado com notas defumadas.',
    price: 119.99, image: IMG('whiskies', 'JW Red Label'),
  },
  {
    id: 48, category: 'whiskies', brand: 'Johnnie Walker',
    name: 'Johnnie Walker Black Label 1L', volume: '1 Litro',
    description: 'Envelhecido 12 anos — rico, suave e complexo.',
    price: 199.99, image: IMG('whiskies', 'JW Black 1L'),
  },
  {
    id: 49, category: 'whiskies', brand: 'Johnnie Walker',
    name: 'Johnnie Walker Gold Reserve 750ml', volume: '750ml',
    description: 'Premium suave com mel, baunilha e frutas secas.',
    price: 319.99, image: IMG('whiskies', 'JW Gold'),
  },
  {
    id: 50, category: 'whiskies', brand: "Jack Daniel's",
    name: "Jack Daniel's Old No. 7 1L", volume: '1 Litro',
    description: 'Tennessee Whiskey charcoal-mellowed. O favorito do mundo.',
    price: 169.99, image: IMG('whiskies', "Jack Old No7"),
  },
  {
    id: 51, category: 'whiskies', brand: "Jack Daniel's",
    name: "Jack Daniel's Honey 1L", volume: '1 Litro',
    description: 'JD com mel natural — suave, adocicado e envolvente.',
    price: 174.99, image: IMG('whiskies', "Jack Honey"),
  },
  {
    id: 52, category: 'whiskies', brand: "Jack Daniel's",
    name: "Jack Daniel's Apple 1L", volume: '1 Litro',
    description: 'JD com maçã verde natural — refrescante e frutado.',
    price: 174.99, image: IMG('whiskies', "Jack Apple"),
  },
  {
    id: 53, category: 'whiskies', brand: 'Chivas Regal',
    name: 'Chivas Regal 12 Anos 750ml', volume: '750ml',
    description: 'Blended escocês premium — mel, frutas e baunilha suave.',
    price: 249.99, image: IMG('whiskies', 'Chivas 12'),
  },
  {
    id: 54, category: 'whiskies', brand: 'Passport',
    name: 'Passport Scotch 1L', volume: '1 Litro',
    description: 'Blended escocês acessível com perfil suave e agradável.',
    price: 89.99, image: IMG('whiskies', 'Passport'),
  },

  // ══════════════════════════════════════════════════════════
  // OUTROS DESTILADOS
  // ══════════════════════════════════════════════════════════
  {
    id: 55, category: 'outros-destilados', brand: 'Campari',
    name: 'Campari 700ml', volume: '700ml',
    description: 'Licor bitter italiano — amargo, aromático e marcante.',
    price: 89.99, image: IMG('outros-destilados', 'Campari'),
  },
  {
    id: 56, category: 'outros-destilados', brand: 'Aperol',
    name: 'Aperol 750ml', volume: '750ml',
    description: 'Bitter italiano com laranja — base do famoso Aperol Spritz.',
    price: 79.99, image: IMG('outros-destilados', 'Aperol'),
  },
  {
    id: 57, category: 'outros-destilados', brand: 'Jose Cuervo',
    name: 'Tequila Jose Cuervo Especial Gold 750ml', volume: '750ml',
    description: 'Tequila mexicana ouro — suave, ideal para shots e drinks.',
    price: 119.99, image: IMG('outros-destilados', 'Jose Cuervo'),
  },
  {
    id: 58, category: 'outros-destilados', brand: 'Licor 43',
    name: 'Licor 43 700ml', volume: '700ml',
    description: 'Licor espanhol com 43 ingredientes — doce e baunilhado.',
    price: 99.99, image: IMG('outros-destilados', 'Licor 43'),
  },
  {
    id: 59, category: 'outros-destilados', brand: 'Jägermeister',
    name: 'Jägermeister 700ml', volume: '700ml',
    description: 'Licor herbal alemão com 56 plantas — intenso e aromático.',
    price: 109.99, image: IMG('outros-destilados', 'Jägermeister'),
  },
  {
    id: 60, category: 'outros-destilados', brand: 'Jägermeister',
    name: 'Jägermeister Cold Brew 700ml', volume: '700ml',
    description: 'Versão com café cold brew — suave e com leve amargor.',
    price: 114.99, image: IMG('outros-destilados', 'Jager Cold'),
  },

  // ══════════════════════════════════════════════════════════
  // REFRIGERANTES
  // ══════════════════════════════════════════════════════════
  {
    id: 61, category: 'refrigerantes', brand: 'Coca-Cola',
    name: 'Coca-Cola Original 350ml', volume: 'Lata 350ml',
    description: 'A Coca-Cola original — gelada é imbatível.',
    price: 4.49, image: IMG('refrigerantes', 'Coca-Cola'),
  },
  {
    id: 62, category: 'refrigerantes', brand: 'Coca-Cola',
    name: 'Coca-Cola Zero 350ml', volume: 'Lata 350ml',
    description: 'Mesmo sabor Coca-Cola, zero açúcar.',
    price: 4.49, image: IMG('refrigerantes', 'Coca Zero'),
  },
  {
    id: 63, category: 'refrigerantes', brand: 'Coca-Cola',
    name: 'Coca-Cola 2L', volume: 'Garrafa 2L',
    description: 'Garrafa família para a festa toda.',
    price: 10.99, image: IMG('refrigerantes', 'Coca 2L'),
  },
  {
    id: 64, category: 'refrigerantes', brand: 'Pepsi',
    name: 'Pepsi Cola 350ml', volume: 'Lata 350ml',
    description: 'A rival clássica — sabor adocicado e refrescante.',
    price: 4.49, image: IMG('refrigerantes', 'Pepsi Cola'),
  },
  {
    id: 65, category: 'refrigerantes', brand: 'Fanta',
    name: 'Fanta Laranja 350ml', volume: 'Lata 350ml',
    description: 'Fanta Laranja — o sabor mais querido da família.',
    price: 4.49, image: IMG('refrigerantes', 'Fanta Laranja'),
  },
  {
    id: 66, category: 'refrigerantes', brand: 'Fanta',
    name: 'Fanta Uva 350ml', volume: 'Lata 350ml',
    description: 'Fanta Uva gelada — refrescante e frutada.',
    price: 4.49, image: IMG('refrigerantes', 'Fanta Uva'),
  },
  {
    id: 67, category: 'refrigerantes', brand: 'Guaraná Antarctica',
    name: 'Guaraná Antarctica 350ml', volume: 'Lata 350ml',
    description: 'O guaraná mais famoso do Brasil.',
    price: 4.49, image: IMG('refrigerantes', 'Guaraná Ant'),
  },
  {
    id: 68, category: 'refrigerantes', brand: 'Guaraná Antarctica',
    name: 'Guaraná Antarctica 2L', volume: 'Garrafa 2L',
    description: 'Guaraná em tamanho família — não pode faltar!',
    price: 9.99, image: IMG('refrigerantes', 'Guaraná 2L'),
  },
  {
    id: 69, category: 'refrigerantes', brand: 'Fanta Guaraná',
    name: 'Fanta Guaraná 350ml', volume: 'Lata 350ml',
    description: 'O sabor guaraná na versão Fanta — leve e tropical.',
    price: 4.49, image: IMG('refrigerantes', 'Fanta Guaraná'),
  },
  {
    id: 70, category: 'refrigerantes', brand: 'Sprite',
    name: 'Sprite 350ml', volume: 'Lata 350ml',
    description: 'Limão e lima — refrescante sem corante.',
    price: 4.49, image: IMG('refrigerantes', 'Sprite'),
  },
  {
    id: 71, category: 'refrigerantes', brand: 'Schweppes',
    name: 'Schweppes Citrus 350ml', volume: 'Lata 350ml',
    description: 'Refrescante cítrica — ótima com gin e vodka.',
    price: 4.99, image: IMG('refrigerantes', 'Schweppes Cit'),
  },
  {
    id: 72, category: 'refrigerantes', brand: 'Schweppes',
    name: 'Água Tônica Schweppes 350ml', volume: 'Lata 350ml',
    description: 'A tônica clássica — parceira ideal do gin.',
    price: 4.99, image: IMG('refrigerantes', 'Tônica Schw'),
  },
  {
    id: 73, category: 'refrigerantes', brand: 'Antarctica',
    name: 'Água Tônica Antarctica 350ml', volume: 'Lata 350ml',
    description: 'Levemente adocicada — a nacional mais popular.',
    price: 4.49, image: IMG('refrigerantes', 'Tônica Ant'),
  },
  {
    id: 74, category: 'refrigerantes', brand: 'Itubaína',
    name: 'Itubaína 350ml', volume: 'Lata 350ml',
    description: 'O sabor nostálgico do Brasil — único e irresistível.',
    price: 4.29, image: IMG('refrigerantes', 'Itubaína'),
  },
  {
    id: 75, category: 'refrigerantes', brand: 'Tubaína',
    name: 'Tubaína Orlando 350ml', volume: 'Lata 350ml',
    description: 'Sabor especial de tubaína artesanal Orlando.',
    price: 3.99, image: IMG('refrigerantes', 'Tubaína'),
  },
  {
    id: 76, category: 'refrigerantes', brand: 'Del Valle',
    name: 'Suco Del Valle Uva 1L', volume: '1 Litro',
    description: 'Suco de uva Del Valle — natural e saboroso.',
    price: 7.99, image: IMG('refrigerantes', 'Del Valle Uva'),
  },
  {
    id: 77, category: 'refrigerantes', brand: 'Maguary',
    name: 'Suco Maguary Maracujá 1L', volume: '1 Litro',
    description: 'Refresco concentrado de maracujá — pede açúcar e água.',
    price: 6.99, image: IMG('refrigerantes', 'Maguary Mara'),
  },

  // ══════════════════════════════════════════════════════════
  // ENERGÉTICOS
  // ══════════════════════════════════════════════════════════
  {
    id: 78, category: 'energeticos', brand: 'Red Bull',
    name: 'Red Bull Original 250ml', volume: '250ml',
    description: 'O energético mais famoso do mundo — Red Bull te dá asas!',
    price: 11.99, image: IMG('energeticos', 'Red Bull Orig'),
  },
  {
    id: 79, category: 'energeticos', brand: 'Red Bull',
    name: 'Red Bull Tropical 250ml', volume: '250ml',
    description: 'Red Bull sabor tropical com notas de frutas.',
    price: 11.99, image: IMG('energeticos', 'Red Bull Trop'),
  },
  {
    id: 80, category: 'energeticos', brand: 'Red Bull',
    name: 'Red Bull Zero 250ml', volume: '250ml',
    description: 'Mesmo efeito Red Bull, zero açúcar.',
    price: 11.99, image: IMG('energeticos', 'Red Bull Zero'),
  },
  {
    id: 81, category: 'energeticos', brand: 'Monster',
    name: 'Monster Energy Original 473ml', volume: '473ml',
    description: 'Unleash the beast! Energético potente em lata grande.',
    price: 12.99, image: IMG('energeticos', 'Monster Orig'),
  },
  {
    id: 82, category: 'energeticos', brand: 'Monster',
    name: 'Monster Ultra Zero 473ml', volume: '473ml',
    description: 'Monster sem açúcar — zero calorias, energia total.',
    price: 12.99, image: IMG('energeticos', 'Monster Ultra'),
  },
  {
    id: 83, category: 'energeticos', brand: 'Monster',
    name: 'Monster Mango Loco 473ml', volume: '473ml',
    description: 'Monster com suco de manga — tropicalmente louco!',
    price: 12.99, image: IMG('energeticos', 'Monster Mango'),
  },

  // ══════════════════════════════════════════════════════════
  // HIDRATAÇÃO
  // ══════════════════════════════════════════════════════════
  {
    id: 84, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral s/ Gás 500ml', volume: '500ml',
    description: 'Água mineral natural sem gás — pura e refrescante.',
    price: 2.99, image: IMG('hidratacao', 'Água s/ Gás'),
  },
  {
    id: 85, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral c/ Gás 500ml', volume: '500ml',
    description: 'Água mineral com gás — leveza com borbulhas.',
    price: 3.49, image: IMG('hidratacao', 'Água c/ Gás'),
  },
  {
    id: 86, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral s/ Gás 1,5L', volume: '1,5 Litro',
    description: 'Garrafa família de água pura — sempre disponível.',
    price: 4.99, image: IMG('hidratacao', 'Água 1,5L'),
  },
  {
    id: 87, category: 'hidratacao', brand: 'Gatorade',
    name: 'Gatorade Limão 500ml', volume: '500ml',
    description: 'Isotônico repositor de sais minerais — sabor limão.',
    price: 6.49, image: IMG('hidratacao', 'Gatorade Lim'),
  },
  {
    id: 88, category: 'hidratacao', brand: 'Gatorade',
    name: 'Gatorade Laranja 500ml', volume: '500ml',
    description: 'Isotônico repositor, sabor laranja refrescante.',
    price: 6.49, image: IMG('hidratacao', 'Gatorade Lar'),
  },
  {
    id: 89, category: 'hidratacao', brand: 'Powerade',
    name: 'Powerade Citrus Charge 500ml', volume: '500ml',
    description: 'Isotônico Powerade com eletrólitos — energy boost.',
    price: 6.49, image: IMG('hidratacao', 'Powerade'),
  },

  // ══════════════════════════════════════════════════════════
  // GELO
  // ══════════════════════════════════════════════════════════
  {
    id: 90, category: 'gelo', brand: 'Gelo Premium',
    name: 'Gelo em Cubo 5kg', volume: 'Saco 5kg',
    description: 'Gelo cristalino em cubos perfeitos para drinks e cooler.',
    price: 12.99, image: IMG('gelo', 'Gelo Cubo 5kg'),
  },
  {
    id: 91, category: 'gelo', brand: 'Gelo Premium',
    name: 'Gelo Moído 5kg', volume: 'Saco 5kg',
    description: 'Gelo moído para drinks, caixa de isopor e ceviche.',
    price: 11.99, image: IMG('gelo', 'Gelo Moído 5kg'),
  },
  {
    id: 92, category: 'gelo', brand: 'Gelo Premium',
    name: 'Gelo Cubo 10kg', volume: 'Saco 10kg',
    description: 'Saco grande de gelo em cubo para festas e churrascos.',
    price: 22.99, image: IMG('gelo', 'Gelo Cubo 10kg'),
  },
  {
    id: 93, category: 'gelo', brand: 'Gelo de Coco',
    name: 'Gelo de Coco Unidade', volume: 'Unidade',
    description: 'Esfera ou cubo de gelo de água de coco — exótico e saboroso.',
    price: 4.99, image: IMG('gelo', 'Gelo Coco Un'),
  },
  {
    id: 94, category: 'gelo', brand: 'Gelo de Coco',
    name: 'Gelo de Coco Pacote 500g', volume: 'Pacote 500g',
    description: 'Pacote de cubos de gelo de coco — refresca e hidrata.',
    price: 14.99, image: IMG('gelo', 'Gelo Coco Pkg'),
  },
  {
    id: 95, category: 'gelo', brand: 'Gelo Saborizado',
    name: 'Gelo Saborizado Melancia 500g', volume: 'Pacote 500g',
    description: 'Gelo de melancia — refresca e dá sabor à sua bebida.',
    price: 15.99, image: IMG('gelo', 'Gelo Melancia'),
  },
  {
    id: 96, category: 'gelo', brand: 'Gelo Saborizado',
    name: 'Gelo Saborizado Maracujá 500g', volume: 'Pacote 500g',
    description: 'Gelo de maracujá — tropical e exótico.',
    price: 15.99, image: IMG('gelo', 'Gelo Maracujá'),
  },

  // ══════════════════════════════════════════════════════════
  // CHURRASCO
  // ══════════════════════════════════════════════════════════
  {
    id: 97, category: 'churrasco', brand: 'Carvão Premium',
    name: 'Carvão Vegetal Premium 3kg', volume: 'Saco 3kg',
    description: 'Carvão de alta qualidade — ignição rápida e calor uniforme.',
    price: 18.99, image: IMG('churrasco', 'Carvão 3kg'),
  },
  {
    id: 98, category: 'churrasco', brand: 'Carvão Premium',
    name: 'Carvão Vegetal Premium 5kg', volume: 'Saco 5kg',
    description: 'Carvão 5kg — ideal para churrascos longos e festas.',
    price: 28.99, image: IMG('churrasco', 'Carvão 5kg'),
  },
  {
    id: 99, category: 'churrasco', brand: 'EcoLenha',
    name: 'Lenha Ecológica 3kg', volume: '3kg',
    description: 'Lenha prensada ecológica — queima limpa e eficiente.',
    price: 21.99, image: IMG('churrasco', 'Lenha Eco'),
  },
  {
    id: 100, category: 'churrasco', brand: 'Friboi',
    name: 'Espetinho Congelado Carne Bovina 500g', volume: '500g (6 un)',
    description: 'Espetinhos de alcatra temperados — direto para a grelha.',
    price: 19.99, image: IMG('churrasco', 'Espeto Carne'),
  },
  {
    id: 101, category: 'churrasco', brand: 'Friboi',
    name: 'Espetinho Congelado Frango 500g', volume: '500g (6 un)',
    description: 'Espetinhos de frango marinados — macios e saborosos.',
    price: 17.99, image: IMG('churrasco', 'Espeto Frango'),
  },
  {
    id: 102, category: 'churrasco', brand: 'Coalho',
    name: 'Espetinho Queijo Coalho 400g', volume: '400g (4 un)',
    description: 'Espetinhos de queijo coalho — o petisco favorito do churrasco.',
    price: 16.99, image: IMG('churrasco', 'Espeto Coalho'),
  },
  {
    id: 103, category: 'churrasco', brand: 'Lebre',
    name: 'Sal Grosso Tradicional 1kg', volume: '1kg',
    description: 'Sal grosso puro para churrasco — carne selada e suculenta.',
    price: 4.99, image: IMG('churrasco', 'Sal Grosso'),
  },
  {
    id: 104, category: 'churrasco', brand: 'Lebre',
    name: 'Sal Grosso Temperado 1kg', volume: '1kg',
    description: 'Com ervas e temperos — praticidade e sabor diferenciado.',
    price: 6.99, image: IMG('churrasco', 'Sal Temperado'),
  },
  {
    id: 105, category: 'churrasco', brand: 'Accendino',
    name: 'Acendedor de Carvão Líquido 500ml', volume: '500ml',
    description: 'Acende fácil e rápido — o começo do churrasco perfeito.',
    price: 8.99, image: IMG('churrasco', 'Acendedor Liq'),
  },
  {
    id: 106, category: 'churrasco', brand: 'Accendino',
    name: 'Acendedor Sólido 4 cubos', volume: '4 cubos',
    description: 'Cubos sólidos de acendimento — prático e sem odor.',
    price: 5.99, image: IMG('churrasco', 'Acendedor Sól'),
  },
  {
    id: 107, category: 'churrasco', brand: 'Descartáveis',
    name: 'Kit Descartável Premium 50 pessoas', volume: 'Kit 50 un',
    description: 'Pratos, copos, garfos, facas, colheres e guardanapos.',
    price: 34.99, image: IMG('churrasco', 'Kit Descart'),
  },
  {
    id: 108, category: 'churrasco', brand: 'Tramontina',
    name: 'Grelha Simples 50x30cm', volume: '50x30cm',
    description: 'Grelha de aço para churrasqueiras — fácil de limpar.',
    price: 39.99, image: IMG('churrasco', 'Grelha'),
  },

  // ══════════════════════════════════════════════════════════
  // SNACKS & PETISCOS
  // ══════════════════════════════════════════════════════════
  {
    id: 109, category: 'snacks', brand: 'Pringles',
    name: 'Pringles Original 120g', volume: '120g',
    description: 'As famosas batatinhas em tubo — uma vez que começa, não para.',
    price: 14.99, image: IMG('snacks', 'Pringles Orig'),
  },
  {
    id: 110, category: 'snacks', brand: 'Pringles',
    name: 'Pringles Cheddar & Sour Cream 120g', volume: '120g',
    description: 'Combinação irresistível de cheddar e creme azedo.',
    price: 14.99, image: IMG('snacks', 'Pringles Ched'),
  },
  {
    id: 111, category: 'snacks', brand: 'Doritos',
    name: 'Doritos Nacho 140g', volume: '140g',
    description: 'Tortilhas de milho triangulares — crocantes e viciantes.',
    price: 10.99, image: IMG('snacks', 'Doritos Nacho'),
  },
  {
    id: 112, category: 'snacks', brand: 'Doritos',
    name: 'Doritos Chilli Heatwave 140g', volume: '140g',
    description: 'Doritos bem apimentados para quem curte o ardido.',
    price: 10.99, image: IMG('snacks', 'Doritos Chilli'),
  },
  {
    id: 113, category: 'snacks', brand: 'Cheetos',
    name: 'Cheetos Crunchy 140g', volume: '140g',
    description: 'O famoso salgadinho de queijo que fica no dedo.',
    price: 9.99, image: IMG('snacks', 'Cheetos'),
  },
  {
    id: 114, category: 'snacks', brand: 'Ruffles',
    name: 'Ruffles Original 115g', volume: '115g',
    description: 'Batata ondulada crocante — clássico imbatível.',
    price: 9.99, image: IMG('snacks', 'Ruffles Orig'),
  },
  {
    id: 115, category: 'snacks', brand: 'Torcida',
    name: 'Torcida Sabor Bacon 100g', volume: '100g',
    description: 'Salgadinho em formato divertido com sabor defumado.',
    price: 7.99, image: IMG('snacks', 'Torcida Bacon'),
  },
  {
    id: 116, category: 'snacks', brand: 'Torcida',
    name: 'Torcida Sabor Frango 100g', volume: '100g',
    description: 'Torcida crocante sabor frango assado.',
    price: 7.99, image: IMG('snacks', 'Torcida Frang'),
  },
  {
    id: 117, category: 'snacks', brand: 'Dori',
    name: 'Amendoim Japonês 500g', volume: '500g',
    description: 'Amendoim com cobertura crocante estilo japonês.',
    price: 12.99, image: IMG('snacks', 'Amendoim Jap'),
  },
  {
    id: 118, category: 'snacks', brand: 'Dori',
    name: 'Amendoim Salgado 500g', volume: '500g',
    description: 'Amendoim torrado e salgado — petisco clássico do bar.',
    price: 11.99, image: IMG('snacks', 'Amendoim Sal'),
  },
  {
    id: 119, category: 'snacks', brand: 'Dori',
    name: 'Ovinhos de Amendoim 500g', volume: '500g',
    description: 'Amendoim coberto com massa crocante — viciante!',
    price: 12.99, image: IMG('snacks', 'Ovinhos Mend'),
  },
  {
    id: 120, category: 'snacks', brand: 'Conservas',
    name: 'Azeitona Verde c/ Caroço 180g', volume: '180g',
    description: 'Azeitonas em conserva — aperitivo clássico para drinks.',
    price: 8.99, image: IMG('snacks', 'Azeitona'),
  },
  {
    id: 121, category: 'snacks', brand: 'Conservas',
    name: 'Palmito Pupunha Inteiro 300g', volume: '300g',
    description: 'Palmito de pupunha em conserva — delicado e saboroso.',
    price: 12.99, image: IMG('snacks', 'Palmito'),
  },
  {
    id: 122, category: 'snacks', brand: 'Aurora',
    name: 'Salame Italiano Fatiado 80g', volume: '80g',
    description: 'Salame italiano defumado e temperado — petisco premium.',
    price: 9.99, image: IMG('snacks', 'Salame Ital'),
  },
  {
    id: 123, category: 'snacks', brand: 'Forno de Minas',
    name: 'Queijo Provolone Defumado 150g', volume: '150g',
    description: 'Provolone desidratado crocante — o petisco dos deuses.',
    price: 14.99, image: IMG('snacks', 'Provolone'),
  },
  {
    id: 124, category: 'snacks', brand: 'Trident',
    name: 'Chiclete Trident Menta 8un', volume: '8 pastilhas',
    description: 'Chiclete menta refrescante — para o hálito e a concentração.',
    price: 2.99, image: IMG('snacks', 'Trident Menta'),
  },
  {
    id: 125, category: 'snacks', brand: 'Lacta',
    name: 'Chocolate Lacta ao Leite 80g', volume: '80g',
    description: 'Chocolate ao leite cremoso — o clássico Lacta.',
    price: 5.99, image: IMG('snacks', 'Chocolate Lac'),
  },

  // ══════════════════════════════════════════════════════════
  // HIDRATAÇÃO — ÁGUAS ADICIONAIS
  // ══════════════════════════════════════════════════════════
  {
    id: 126, category: 'hidratacao', brand: 'Bonafont',
    name: 'Água Mineral Bonafont s/ Gás 500ml', volume: '500ml',
    description: 'Água leve e pura de nascente — sem gás e sem sódio.',
    price: 3.49, image: IMG('hidratacao', 'Bonafont 500'),
  },
  {
    id: 127, category: 'hidratacao', brand: 'Bonafont',
    name: 'Água Mineral Bonafont 1,5L', volume: '1,5 Litro',
    description: 'Garrafa familiar Bonafont — para o dia inteiro.',
    price: 5.49, image: IMG('hidratacao', 'Bonafont 1,5L'),
  },
  {
    id: 128, category: 'hidratacao', brand: 'Evian',
    name: 'Água Mineral Evian 330ml', volume: '330ml',
    description: 'Água das Alpes francesas — premium e naturalmente filtrada.',
    price: 9.99, image: IMG('hidratacao', 'Evian 330ml'),
  },
  {
    id: 129, category: 'hidratacao', brand: 'Perrier',
    name: 'Perrier c/ Gás 330ml', volume: '330ml',
    description: 'Água mineral francesa com gás natural — elegante e refrescante.',
    price: 11.99, image: IMG('hidratacao', 'Perrier 330ml'),
  },
  {
    id: 130, category: 'hidratacao', brand: 'Santa Bárbara',
    name: 'Água Mineral s/ Gás 5L', volume: '5 Litros',
    description: 'Galão econômico para casa ou eventos — pura e gelada.',
    price: 9.99, image: IMG('hidratacao', 'Água 5L'),
  },
  {
    id: 131, category: 'hidratacao', brand: 'Iguaçu',
    name: 'Galão de Água 20L', volume: '20 Litros',
    description: 'Galão retornável 20L — ideal para festas e churrascos.',
    price: 14.99, image: IMG('hidratacao', 'Galão 20L'),
  },
  {
    id: 132, category: 'hidratacao', brand: 'Kero Coco',
    name: 'Água de Coco Kero Coco 1L', volume: '1 Litro',
    description: 'Água de coco 100% natural — hidratação tropical.',
    price: 8.99, image: IMG('hidratacao', 'Kero Coco 1L'),
  },
  {
    id: 133, category: 'hidratacao', brand: 'Kero Coco',
    name: 'Água de Coco Kero Coco 200ml', volume: '200ml',
    description: 'Caixinha de água de coco — prática para levar.',
    price: 3.99, image: IMG('hidratacao', 'Kero Coco 200'),
  },
  {
    id: 134, category: 'hidratacao', brand: 'Levité',
    name: 'Água Saborizada Levité Limão 500ml', volume: '500ml',
    description: 'Água saborizada com limão siciliano — zero calorias.',
    price: 5.49, image: IMG('hidratacao', 'Levité Limão'),
  },
  {
    id: 135, category: 'hidratacao', brand: 'H2OH!',
    name: 'H2OH! Limão 500ml', volume: '500ml',
    description: 'Água com um toque de limão — refrescante e levinha.',
    price: 5.49, image: IMG('hidratacao', 'H2OH Limão'),
  },
  {
    id: 136, category: 'hidratacao', brand: 'H2OH!',
    name: 'H2OH! Maracujá 500ml', volume: '500ml',
    description: 'Sabor maracujá suave — leveza tropical sem açúcar.',
    price: 5.49, image: IMG('hidratacao', 'H2OH Maracujá'),
  },

  // ══════════════════════════════════════════════════════════
  // VINHOS & ESPUMANTES
  // ══════════════════════════════════════════════════════════
  {
    id: 137, category: 'vinhos', brand: 'Almadén',
    name: 'Vinho Tinto Suave Almadén 1L', volume: '1 Litro',
    description: 'Vinho tinto suave e frutado — acessível e gostoso.',
    price: 19.99, image: IMG('vinhos', 'Almadén Tinto'),
  },
  {
    id: 138, category: 'vinhos', brand: 'Almadén',
    name: 'Vinho Branco Seco Almadén 1L', volume: '1 Litro',
    description: 'Branco fresco e leve — ideal para peixes e aves.',
    price: 19.99, image: IMG('vinhos', 'Almadén Bran'),
  },
  {
    id: 139, category: 'vinhos', brand: 'Salton',
    name: 'Vinho Tinto Salton Clássico 750ml', volume: '750ml',
    description: 'Gaúcho e encorpado — notas de frutas vermelhas maduras.',
    price: 34.99, image: IMG('vinhos', 'Salton Tinto'),
  },
  {
    id: 140, category: 'vinhos', brand: 'Salton',
    name: 'Vinho Rosé Salton 750ml', volume: '750ml',
    description: 'Rosé seco e elegante — leve e extremamente refrescante.',
    price: 34.99, image: IMG('vinhos', 'Salton Rosé'),
  },
  {
    id: 141, category: 'vinhos', brand: 'Casillero del Diablo',
    name: 'Vinho Tinto Casillero Cabernet 750ml', volume: '750ml',
    description: 'Chileno premium — Cabernet Sauvignon intenso e aveludado.',
    price: 59.99, image: IMG('vinhos', 'Casillero CB'),
  },
  {
    id: 142, category: 'vinhos', brand: 'Freixenet',
    name: 'Espumante Freixenet Cordon Negro 750ml', volume: '750ml',
    description: 'Cava espanhol brut — elegante, borbulhante e seco.',
    price: 69.99, image: IMG('vinhos', 'Freixenet'),
  },
  {
    id: 143, category: 'vinhos', brand: 'Salton',
    name: 'Espumante Salton Brut 750ml', volume: '750ml',
    description: 'Espumante gaúcho — fresco, cítrico e com boa acidez.',
    price: 44.99, image: IMG('vinhos', 'Salton Brut'),
  },
  {
    id: 144, category: 'vinhos', brand: 'Chandon',
    name: 'Espumante Chandon Brut 750ml', volume: '750ml',
    description: 'O espumante mais icônico do Brasil — Chandon Reserve Brut.',
    price: 79.99, image: IMG('vinhos', 'Chandon Brut'),
  },
  {
    id: 145, category: 'vinhos', brand: 'Cereser',
    name: 'Sidra Cereser Maçã 660ml', volume: '660ml',
    description: 'Sidra de maçã gelada — levinha e festiva para qualquer ocasião.',
    price: 12.99, image: IMG('vinhos', 'Sidra Cereser'),
  },
  {
    id: 146, category: 'vinhos', brand: 'Cereser',
    name: 'Sidra Cereser Zero 660ml', volume: '660ml',
    description: 'Sidra zero álcool — mesmo sabor e festa para todos.',
    price: 12.99, image: IMG('vinhos', 'Sidra Zero'),
  },

  // ══════════════════════════════════════════════════════════
  // DRINKS PRONTOS
  // ══════════════════════════════════════════════════════════
  {
    id: 147, category: 'drinks-prontos', brand: 'Skol Beats',
    name: 'Skol Beats Senses 269ml', volume: '269ml',
    description: 'Drink alcoólico pronto gelado — sabor explosivo e colorido.',
    price: 6.49, image: IMG('drinks-prontos', 'Skol Beats'),
  },
  {
    id: 148, category: 'drinks-prontos', brand: 'Skol Beats',
    name: 'Skol Beats GT 500ml', volume: '500ml',
    description: 'Beats em tamanho grande — para curtir mais.',
    price: 9.99, image: IMG('drinks-prontos', 'Beats GT'),
  },
  {
    id: 149, category: 'drinks-prontos', brand: 'Smirnoff',
    name: 'Smirnoff Ice Limão 275ml', volume: '275ml',
    description: 'Vodka Ice clássica com limão — fácil e refrescante.',
    price: 7.99, image: IMG('drinks-prontos', 'Smirnoff Ice'),
  },
  {
    id: 150, category: 'drinks-prontos', brand: 'Smirnoff',
    name: 'Smirnoff Ice Tropical 275ml', volume: '275ml',
    description: 'Versão tropical da Smirnoff Ice — maracujá e frutas.',
    price: 7.99, image: IMG('drinks-prontos', 'Ice Tropical'),
  },
  {
    id: 151, category: 'drinks-prontos', brand: "Gordon's",
    name: "Gordon's Gin & Tônica Lata 269ml", volume: '269ml',
    description: 'Gin tônica pronto em lata — prático e bem equilibrado.',
    price: 8.99, image: IMG('drinks-prontos', "Gordon's GT"),
  },
  {
    id: 152, category: 'drinks-prontos', brand: 'Heineken',
    name: 'Heineken Silver 350ml', volume: 'Lata 350ml',
    description: 'Mais leve e suave — apenas 4% de álcool, sabor premium.',
    price: 6.99, image: IMG('drinks-prontos', 'Heineken Silv'),
  },
  {
    id: 153, category: 'drinks-prontos', brand: 'Beats',
    name: 'Beats Seltzer Maracujá 350ml', volume: '350ml',
    description: 'Hard seltzer — álcool, água com gás e maracujá. Zero açúcar.',
    price: 8.49, image: IMG('drinks-prontos', 'Beats Seltzer'),
  },
  {
    id: 154, category: 'drinks-prontos', brand: 'Beats',
    name: 'Beats Seltzer Limão 350ml', volume: '350ml',
    description: 'Hard seltzer de limão — leve, refrescante e moderno.',
    price: 8.49, image: IMG('drinks-prontos', 'Seltzer Limão'),
  },

  // ══════════════════════════════════════════════════════════
  // UTILIDADES
  // ══════════════════════════════════════════════════════════
  {
    id: 155, category: 'utilidades', brand: 'Isopor',
    name: 'Caixa de Isopor 12L', volume: '12 Litros',
    description: 'Isopor compacto — mantém tudo gelado por horas.',
    price: 24.99, image: IMG('utilidades', 'Isopor 12L'),
  },
  {
    id: 156, category: 'utilidades', brand: 'Isopor',
    name: 'Caixa de Isopor 30L', volume: '30 Litros',
    description: 'Isopor grande para churrasco e praia — cabe muito!',
    price: 49.99, image: IMG('utilidades', 'Isopor 30L'),
  },
  {
    id: 157, category: 'utilidades', brand: 'Tramontina',
    name: 'Abridor de Garrafa/Lata', volume: 'Unidade',
    description: 'Abridor multifuncional — abre garrafas e latas.',
    price: 6.99, image: IMG('utilidades', 'Abridor'),
  },
  {
    id: 158, category: 'utilidades', brand: 'Descartáveis',
    name: 'Copo Descartável Plástico 200ml (50 un)', volume: '50 unidades',
    description: 'Copos transparentes resistentes para qualquer bebida.',
    price: 5.99, image: IMG('utilidades', 'Copo 200ml'),
  },
  {
    id: 159, category: 'utilidades', brand: 'Descartáveis',
    name: 'Copo Long Drink 300ml (25 un)', volume: '25 unidades',
    description: 'Copo alto e elegante para drinks e caipirinhas.',
    price: 9.99, image: IMG('utilidades', 'Copo Long'),
  },
  {
    id: 160, category: 'utilidades', brand: 'Descartáveis',
    name: 'Canudo Flexível Colorido (50 un)', volume: '50 unidades',
    description: 'Canudos flexíveis coloridos — para drinks e sucos.',
    price: 4.99, image: IMG('utilidades', 'Canudos'),
  },
  {
    id: 161, category: 'utilidades', brand: 'Reynolds',
    name: 'Papel Alumínio 45cm x 5m', volume: '5 metros',
    description: 'Papel alumínio resistente — para embrulhar carnes na brasa.',
    price: 7.99, image: IMG('utilidades', 'Papel Alumínio'),
  },
  {
    id: 162, category: 'utilidades', brand: 'Hortifruti',
    name: 'Limão Taiti (500g)', volume: '~6 unidades',
    description: 'Limão fresco para caipirinha — compre com a cachaça!',
    price: 4.99, image: IMG('utilidades', 'Limão Taiti'),
  },
  {
    id: 163, category: 'utilidades', brand: 'União',
    name: 'Açúcar Refinado 1kg', volume: '1kg',
    description: 'Açúcar refinado para caipirinha e drinks artesanais.',
    price: 5.99, image: IMG('utilidades', 'Açúcar 1kg'),
  },
  {
    id: 164, category: 'utilidades', brand: 'Hortifruti',
    name: 'Hortelã Fresca (maço)', volume: 'Maço',
    description: 'Hortelã fresca para mojito, drinks e petiscos.',
    price: 3.99, image: IMG('utilidades', 'Hortelã'),
  },
  {
    id: 165, category: 'utilidades', brand: 'Descartáveis',
    name: 'Saco de Lixo Preto 100L (10 un)', volume: '10 unidades',
    description: 'Resistente e grande — indispensável em qualquer festa.',
    price: 6.99, image: IMG('utilidades', 'Saco Lixo'),
  },

  // ══════════════════════════════════════════════════════════
  // ÁGUAS MINERAIS — VARIEDADES E TAMANHOS
  // ══════════════════════════════════════════════════════════
  {
    id: 166, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral Crystal s/ Gás 200ml', volume: '200ml',
    description: 'Garrafinha individual — perfeita para bolsa ou mochila.',
    price: 1.99, image: IMG('hidratacao', 'Crystal 200ml'),
  },
  {
    id: 167, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral Crystal s/ Gás 300ml', volume: '300ml',
    description: 'Tamanho prático para consumo rápido.',
    price: 2.49, image: IMG('hidratacao', 'Crystal 300ml'),
  },
  {
    id: 168, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral Crystal s/ Gás 2L', volume: '2 Litros',
    description: 'Garrafa familiar Crystal — mais em conta por litro.',
    price: 6.49, image: IMG('hidratacao', 'Crystal 2L'),
  },
  {
    id: 169, category: 'hidratacao', brand: 'Crystal',
    name: 'Água Mineral Crystal c/ Gás 1L', volume: '1 Litro',
    description: 'Água com gás Crystal — borbulhante e refrescante.',
    price: 5.49, image: IMG('hidratacao', 'Crystal Gas 1L'),
  },
  {
    id: 170, category: 'hidratacao', brand: 'Minalba',
    name: 'Água Mineral Minalba s/ Gás 500ml', volume: '500ml',
    description: 'Nascente de Campos do Jordão — leve e de alta pureza.',
    price: 3.49, image: IMG('hidratacao', 'Minalba 500ml'),
  },
  {
    id: 171, category: 'hidratacao', brand: 'Minalba',
    name: 'Água Mineral Minalba c/ Gás 500ml', volume: '500ml',
    description: 'Minalba com gás natural — elegante e refrescante.',
    price: 3.99, image: IMG('hidratacao', 'Minalba Gás'),
  },
  {
    id: 172, category: 'hidratacao', brand: 'Minalba',
    name: 'Água Mineral Minalba s/ Gás 1,5L', volume: '1,5 Litro',
    description: 'Minalba em tamanho maior — para a família toda.',
    price: 6.49, image: IMG('hidratacao', 'Minalba 1,5L'),
  },
  {
    id: 173, category: 'hidratacao', brand: 'São Lourenço',
    name: 'Água Mineral São Lourenço s/ Gás 500ml', volume: '500ml',
    description: 'Da famosa estância de São Lourenço (MG) — pura e leve.',
    price: 3.99, image: IMG('hidratacao', 'SãoLourenço'),
  },
  {
    id: 174, category: 'hidratacao', brand: 'São Lourenço',
    name: 'Água Mineral São Lourenço c/ Gás 500ml', volume: '500ml',
    description: 'Gasosa natural de São Lourenço — clássica e elegante.',
    price: 4.49, image: IMG('hidratacao', 'SãoLourenço G'),
  },
  {
    id: 175, category: 'hidratacao', brand: 'Indaiá',
    name: 'Água Mineral Indaiá s/ Gás 500ml', volume: '500ml',
    description: 'Marca nordestina de tradição — fresca e purificada.',
    price: 3.29, image: IMG('hidratacao', 'Indaiá 500ml'),
  },
  {
    id: 176, category: 'hidratacao', brand: 'Indaiá',
    name: 'Água Mineral Indaiá s/ Gás 1,5L', volume: '1,5 Litro',
    description: 'Garrafa família Indaiá — econômica e saborosa.',
    price: 5.99, image: IMG('hidratacao', 'Indaiá 1,5L'),
  },
  {
    id: 177, category: 'hidratacao', brand: 'Ouro Fino',
    name: 'Água Mineral Ouro Fino s/ Gás 500ml', volume: '500ml',
    description: 'Fonte de Ouro Fino (MG) — pureza mineral e sabor suave.',
    price: 3.29, image: IMG('hidratacao', 'Ouro Fino'),
  },
  {
    id: 178, category: 'hidratacao', brand: 'Santa Bárbara',
    name: 'Água Mineral Santa Bárbara s/ Gás 500ml', volume: '500ml',
    description: 'Regional e fresca — qualidade garantida da nascente.',
    price: 2.99, image: IMG('hidratacao', 'Sta Barbara'),
  },
  {
    id: 179, category: 'hidratacao', brand: 'Santa Bárbara',
    name: 'Água Mineral Santa Bárbara c/ Gás 500ml', volume: '500ml',
    description: 'Santa Bárbara com gás — efervescente e refrescante.',
    price: 3.49, image: IMG('hidratacao', 'StaBarbara G'),
  },
  {
    id: 180, category: 'hidratacao', brand: 'Crystal',
    name: 'Garrafão Água Mineral 10L s/ Gás', volume: '10 Litros',
    description: 'Garrafão retornável 10L — ideal para mesa e eventos.',
    price: 12.99, image: IMG('hidratacao', 'Garrafão 10L'),
  },
  {
    id: 181, category: 'hidratacao', brand: 'Crystal',
    name: 'Pack Água Mineral 500ml (12 un)', volume: '12 x 500ml',
    description: 'Fardo com 12 garrafas — melhor preço por unidade.',
    price: 27.99, image: IMG('hidratacao', 'Pack 12un'),
  },
  {
    id: 182, category: 'hidratacao', brand: 'Bonafont',
    name: 'Água Mineral Bonafont c/ Gás 500ml', volume: '500ml',
    description: 'Bonafont gasosa — leve, com borbulhas suaves.',
    price: 3.99, image: IMG('hidratacao', 'Bonafont Gás'),
  },
];

export default PRODUCTS;
