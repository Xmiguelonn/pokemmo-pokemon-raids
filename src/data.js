export const POKEMON_DATA = [
  {
    id: 'soporte',
    title: 'Soporte',
    icon: 'fa-hand-holding-heart',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    bgBadge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    pokemon: [
      { name: 'Murkrow', ability: 'Bromista', nature: '---', moves: ['Viento afín', 'Último lugar', 'Cara susto', 'Chirrido', 'Mofa', 'Seducción', 'Tóxico', 'Niebla', 'Despejar'] },
      { name: 'Sableye', ability: 'Bromista', nature: '---', moves: ['Truco', 'Reflejo', 'Pantalla luz', 'Anticura', 'Fuego Fatuo', 'Último lugar', 'Seducción', 'Tóxico', 'Cosquillas'] },
      { name: 'Whimsicott', ability: 'Bromista', nature: '---', moves: ['Despejar', 'Trapicheo (Huevo)', 'Llanto Falso', 'Viento afín', 'Encanto', 'Legado', 'Espacio raro', 'Pantalla luz', 'Seducción', 'Tóxico', 'Cosquillas'] },
      { name: 'Smeargle', ability: '---', nature: '---', moves: ['Anticura'] },
      { name: 'Bronzong', ability: 'Levitación / Ignífugo', nature: 'Suba Def / Def Esp', moves: ['Explosión (Obligatorio)', 'Anticura', 'Espacio raro', 'Eco metálico', 'Tóxico', 'Truco'] }
    ]
  },
  {
    id: 'fuego',
    title: 'Tipo Fuego',
    icon: 'fa-fire',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
    bgBadge: 'bg-red-500/10 text-red-600 dark:text-red-400',
    physical: [
      { name: 'Darmanitan', ability: 'Pot. Bruta', nature: 'Firme / Alegre', moves: ['Envite ígneo'] },
      { name: 'Infernape', ability: '---', nature: 'Firme / Alegre', moves: ['Envite ígneo'] },
      { name: 'Blaziken', ability: '---', nature: 'Firme / Alegre', moves: ['Envite ígneo'] },
      { name: 'Entei', ability: '---', nature: 'Firme', moves: ['Envite ígneo'] },
      { name: 'Emboar', ability: 'Audaz', nature: 'Firme / Alegre', moves: ['Envite ígneo'] },
      { name: 'Arcanine', ability: '---', nature: 'Firme / Alegre', moves: ['Envite ígneo'] }
    ],
    special: [
      { name: 'Heatran', ability: '---', nature: 'Modesta', moves: ['Lluvia ígnea', 'Onda ígnea', 'Humareda', 'Lanzallamas', 'Sofoco', 'Estallido'] },
      { name: 'Ninetales', ability: 'Sequía', nature: 'Modesta / Miedosa', moves: ['Calcinación', 'Lanzallamas', 'Onda ígnea', 'Sofoco', 'Llanto Falso', 'Fuego fatuo'] },
      { name: 'Infernape', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Llanto falso', 'Onda ígnea', 'Sofoco', 'Anillo ígneo', 'Voto fuego'] },
      { name: 'Rotom Horno', slug: 'rotom-heat', pokedexUrl: 'https://pokemondb.net/pokedex/rotom', ability: '---', nature: 'Modesta', moves: ['Sofoco', 'Lanzallamas'] },
      { name: 'Volcarona', ability: '---', nature: 'Modesta / Miedosa', moves: ['Danza llama', 'Onda ígnea', 'Lanzallamas', 'Sofoco'] },
      { name: 'Charizard', ability: 'Poder Solar', nature: 'Modesta / Miedosa', moves: ['Onda ígnea', 'Lanzallamas', 'Sofoco', 'Anillo ígneo', 'Voto fuego'] },
      { name: 'Chandelure', ability: '---', nature: 'Modesta / Miedosa', moves: ['Sofoco', 'Lanzallamas', 'Onda ígnea'] },
      { name: 'Moltres', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Onda ígnea', 'Sofoco'] },
      { name: 'Typhlosion', ability: '---', nature: 'Modesta', moves: ['Estallido', 'Lanzallamas', 'Sofoco', 'Onda ígnea', 'Anillo ígneo', 'Voto fuego'] },
      { name: 'Blaziken', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Onda ígnea', 'Sofoco', 'Anillo ígneo', 'Voto fuego'] },
      { name: 'Arcanine', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Onda ígnea', 'Sofoco'] },
      { name: 'Magmortar', ability: '---', nature: 'Modesta', moves: ['Humareda', 'Lanzallamas', 'Onda ígnea', 'Sofoco'] },
      { name: 'Houndoom', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Onda ígnea', 'Sofoco'] },
      { name: 'Simisear', ability: '---', nature: 'Modesta', moves: ['Lanzallamas', 'Sofoco'] }
    ]
  },
  {
    id: 'tierra',
    title: 'Tipo Tierra',
    icon: 'fa-mountain',
    color: 'bg-amber-600',
    borderColor: 'border-amber-600',
    bgBadge: 'bg-amber-600/10 text-amber-600 dark:text-amber-400',
    physical: [
      { name: 'Nidoking', ability: 'Rivalidad', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Swampert', ability: '---', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Flygon', ability: 'Levitación', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Camerupt', ability: '---', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Garchomp', ability: '---', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Rhyperior', ability: 'Roca sólida', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Mamoswine', ability: 'Despiste', nature: 'Firme / Alegre', moves: ['Terremoto'] },
      { name: 'Hippowdon', ability: 'Chorro arena', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Excadrill', ability: '---', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Krookodile', ability: '---', nature: 'Firme', moves: ['Terremoto'] },
      { name: 'Golurk', ability: 'Puño férreo / Indefenso', nature: 'Firme', moves: ['Terremoto'] }
    ],
    special: [
      { name: 'Nidoking', ability: 'Pot. Bruta', nature: 'Modesta', moves: ['Tierra viva'] },
      { name: 'Flygon', ability: 'Levitación', nature: 'Modesta', moves: ['Tierra viva'] },
      { name: 'Camerupt', ability: '---', nature: 'Modesta', moves: ['Tierra viva'] }
    ]
  },
  {
    id: 'lucha',
    title: 'Tipo Lucha',
    icon: 'fa-hand-fist',
    color: 'bg-orange-700',
    borderColor: 'border-orange-700',
    bgBadge: 'bg-orange-700/10 text-orange-700 dark:text-orange-400',
    physical: [
      { name: 'Primeape', ability: '---', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Machamp', ability: '---', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Hitmonlee', ability: 'Audaz', nature: 'Firme', moves: ['A Bocajarro', 'Pat. S. Alta'] },
      { name: 'Heracross', ability: '---', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Blaziken', ability: '---', nature: 'Firme / Alegre', moves: ['A Bocajarro'] },
      { name: 'Breloom', ability: '---', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Medicham', ability: 'Energía Pura', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Infernape', ability: 'Puño férreo', nature: 'Firme / Alegre', moves: ['A Bocajarro', 'Ultrapuño'] },
      { name: 'Lucario', ability: 'Foco interno', nature: 'Firme', moves: ['A Bocajarro', 'Ultrapuño'] },
      { name: 'Toxicroak', ability: '---', nature: 'Firme', moves: ['A Bocajarro'] },
      { name: 'Gallade', ability: 'Cortante', nature: 'Firme / Alegre', moves: ['Espadasanta'] },
      { name: 'Emboar', ability: '---', nature: 'Firme / Alegre', moves: ['A Bocajarro'] },
      { name: 'Conkeldurr', ability: '---', nature: 'Firme', moves: ['A Bocajarro', 'Ultrapuño (Huevo)'] },
      { name: 'Mienshao', ability: 'Audaz', nature: 'Firme', moves: ['A Bocajarro', 'Pat. S. Alta'] },
      { name: 'Terrakion', ability: '---', nature: 'Firme', moves: ['Espadasanta'] }
    ],
    special: [
      { name: 'Infernape', ability: '---', nature: 'Modesta', moves: ['Esfera Aural', 'Onda certera'] },
      { name: 'Lucario', ability: 'Foco interno', nature: 'Modesta', moves: ['Esfera Aural', 'Onda certera', 'Onda vacío'] }
    ]
  },
  {
    id: 'siniestro',
    title: 'Tipo Siniestro',
    icon: 'fa-moon',
    color: 'bg-purple-900',
    borderColor: 'border-purple-800',
    bgBadge: 'bg-purple-900/10 text-purple-700 dark:text-purple-300',
    physical: [
      { name: 'Tyranitar', ability: '---', nature: 'Firme', moves: ['Triturar', 'Buena baza'] },
      { name: 'Sharpedo', ability: '---', nature: 'Firme', moves: ['Triturar', 'Buena baza'] },
      { name: 'Crawdaunt', ability: 'Adaptable', nature: 'Firme', moves: ['Triturar'] },
      { name: 'Absol', ability: '---', nature: 'Firme', moves: ['Tajo umbrío', 'Golpe bajo'] },
      { name: 'Weavile', ability: '---', nature: 'Firme / Alegre', moves: ['Tajo umbrío', 'Buena baza'] },
      { name: 'Honchkrow', ability: '---', nature: 'Firme', moves: ['Tajo umbrío', 'Golpe bajo', 'Buena baza'] },
      { name: 'Drapion', ability: 'Armadura batalla', nature: 'Firme', moves: ['Tajo umbrío', 'Triturar', 'Buena baza'] },
      { name: 'Krookodile', ability: 'Intimidación / Autoestima', nature: 'Firme', moves: ['Triturar', 'Buena baza'] },
      { name: 'Scrafty', ability: '---', nature: 'Firme', moves: ['Triturar', 'Buena baza'] },
      { name: 'Zoroark', ability: '---', nature: 'Firme / Alegre', moves: ['Triturar', 'Buena baza'] },
      { name: 'Bisharp', ability: '---', nature: 'Firme', moves: ['Golpe bajo', 'Tajo umbrío'] },
      { name: 'Hydreigon', ability: '---', nature: 'Firme', moves: ['Triturar', 'Buena baza'] }
    ],
    special: [
      { name: 'Zoroark', ability: '---', nature: 'Modesta', moves: ['Pulso umbrío', 'Pulso noche'] },
      { name: 'Hydreigon', ability: '---', nature: 'Modesta', moves: ['Pulso umbrío'] }
    ]
  },
  {
    id: 'agua',
    title: 'Tipo Agua',
    icon: 'fa-water',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    bgBadge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    physical: [
      { name: 'Kingler', ability: 'Pot. Bruta', nature: 'Firme', moves: ['Cascada', 'Martillazo'] },
      { name: 'Gyarados', ability: '---', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Kabutops', ability: 'Nado rápido', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Seaking', ability: 'Nado rápido / Pararrayos', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Feraligatr', ability: 'Pot. Bruta', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Azumarill', ability: 'Potencia', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Swampert', ability: '---', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Sharpedo', ability: '---', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Crawdaunt', ability: 'Adaptable', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Floatzel', ability: 'Nado rápido', nature: 'Firme', moves: ['Cascada'] },
      { name: 'Carracosta', ability: 'Nado rápido', nature: 'Firme', moves: ['Cascada'] }
    ],
    special: [
      { name: 'Blastoise', ability: '---', nature: 'Modesta', moves: ['Salpicar (Huevo)', 'Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Golduck', ability: 'Nado rápido', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Starmie', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Omastar', ability: 'Nado rápido', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Kingdra', ability: 'Nado rápido', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Vaporeon', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Octillery', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Suicune', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Ludicolo', ability: 'Nado rápido', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar', 'Meteorbola'] },
      { name: 'Pelipper', ability: 'Llovizna', nature: 'Modesta / Miedosa / Osada', moves: ['Viento afín', 'Surf', 'Hidrobomba', 'Meteorbola', 'Escaldar'] },
      { name: 'Milotic', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Clamperl', ability: '---', nature: 'Modesta', moves: ['Surf', 'Escaldar'] },
      { name: 'Empoleon', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Gastrodon', ability: 'Cualquiera (menos Recolector)', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] },
      { name: 'Simipour', ability: '---', nature: 'Modesta', moves: ['Surf', 'Hidrobomba', 'Escaldar'] }
    ]
  },
  {
    id: 'electrico',
    title: 'Tipo Eléctrico',
    icon: 'fa-bolt',
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    bgBadge: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
    physical: [
      { name: 'Pikachu', ability: '---', nature: 'Firme', moves: ['Placaje eléctrico (Huevo)'] },
      { name: 'Luxray', ability: 'Rivalidad', nature: 'Firme', moves: ['Voltio cruel'] },
      { name: 'Electivire', ability: '---', nature: 'Firme', moves: ['Voltio cruel'] },
      { name: 'Zebstrika', ability: '---', nature: 'Firme', moves: ['Voltio cruel'] },
      { name: 'Eelektross', ability: '---', nature: 'Firme', moves: ['Voltio cruel'] }
    ],
    special: [
      { name: 'Pikachu', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Raichu', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Jolteon', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Zapdos', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Ampharos', ability: 'Más', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Raikou', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Manectric', ability: 'Menos', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Magnezone', ability: 'Robustez', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Rotom', note: 'No usar el normal', ability: '---', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Eelektross', ability: 'Levitación', nature: 'Modesta', moves: ['Rayo', 'Trueno'] },
      { name: 'Galvantula', ability: 'Ojo compuesto', nature: 'Modesta', moves: ['Rayo', 'Trueno'] }
    ]
  },
  {
    id: 'hielo',
    title: 'Tipo Hielo',
    icon: 'fa-snowflake',
    color: 'bg-cyan-400',
    borderColor: 'border-cyan-400',
    bgBadge: 'bg-cyan-400/10 text-cyan-600 dark:text-cyan-300',
    physical: [
      { name: 'Cloyster', ability: 'Encadenado', nature: 'Firme', moves: ['Carámbano', 'Canto helado'] },
      { name: 'Weavile', ability: '---', nature: 'Firme / Alegre', moves: ['Carámbano', 'Chuzos (Huevo)', 'Puño hielo', 'Canto helado'] },
      { name: 'Mamoswine', ability: '---', nature: 'Firme / Alegre', moves: ['Carámbano', 'Chuzos', 'Canto helado'] },
      { name: 'Abomasnow', ability: 'Nevada', nature: 'Firme', moves: ['Puño hielo', 'Canto helado', 'Chuzos', 'Carámbano'] },
      { name: 'Beartic', ability: 'Quitanieves', nature: 'Firme', moves: ['Chuzos', 'Carámbano', 'Puño hielo'] }
    ],
    special: [
      { name: 'Jynx', ability: 'Despiste', nature: 'Modesta', moves: ['Rayo hielo', 'Ventisca'] },
      { name: 'Articuno', ability: '---', nature: 'Modesta', moves: ['Ventisca', 'Rayo hielo'] },
      { name: 'Glaceon', ability: 'Manto níveo', nature: 'Modesta', moves: ['Rayo hielo', 'Ventisca'] },
      { name: 'Vanilluxe', ability: 'Nevada', nature: 'Modesta / Miedosa', moves: ['Rayo hielo', 'Ventisca'] }
    ]
  },
  {
    id: 'volador',
    title: 'Tipo Volador',
    icon: 'fa-feather',
    color: 'bg-indigo-400',
    borderColor: 'border-indigo-400',
    bgBadge: 'bg-indigo-400/10 text-indigo-600 dark:text-indigo-300',
    physical: [
      { name: 'Fearow', ability: '---', nature: 'Firme', moves: ['Pico taladro'] },
      { name: 'Dodrio', ability: '---', nature: 'Firme', moves: ['Pico taladro', 'Acróbata', 'Pájaro osado'] },
      { name: 'Scyther', ability: 'Experto', nature: 'Firme', moves: ['Golpe aéreo', 'Acróbata'] },
      { name: 'Crobat', ability: 'Foco interno', nature: 'Firme', moves: ['Acróbata', 'Pájaro osado'] },
      { name: 'Swellow', ability: '---', nature: 'Firme', moves: ['Pájaro osado'] },
      { name: 'Staraptor', ability: 'Audaz', nature: 'Firme', moves: ['Pájaro osado', 'Acróbata'] },
      { name: 'Honchkrow', ability: '---', nature: 'Firme', moves: ['Pájaro osado', 'Pico taladro'] },
      { name: 'Gliscor', ability: '---', nature: 'Firme', moves: ['Acróbata'] },
      { name: 'Archeops', ability: '---', nature: 'Firme', moves: ['Acróbata'] },
      { name: 'Braviary', ability: 'Rivalidad / Pot. Bruta', nature: 'Firme / Alegre', moves: ['Acróbata', 'Pájaro osado'] }
    ],
    special: [
      { name: 'Charizard', ability: '---', nature: 'Modesta / Miedosa', moves: ['Aire afilado', 'Tajo aéreo', 'Vendaval'] },
      { name: 'Articuno', ability: '---', nature: 'Modesta', moves: ['Aire afilado', 'Tajo aéreo', 'Vendaval'] },
      { name: 'Zapdos', ability: '---', nature: 'Modesta', moves: ['Vendaval', 'Aire afilado'] },
      { name: 'Moltres', ability: '---', nature: 'Modesta', moves: ['Aire afilado', 'Pájaro osado', 'Tajo aéreo'] },
      { name: 'Pelipper', ability: 'Llovizna', nature: 'Modesta / Miedosa', moves: ['Aire afilado', 'Tajo aéreo', 'Vendaval'] },
      { name: 'Masquerain', ability: '---', nature: 'Modesta', moves: ['Aire afilado', 'Tajo aéreo', 'Vendaval'] },
      { name: 'Salamence', ability: '---', nature: 'Modesta', moves: ['Vendaval', 'Tajo aéreo'] },
      { name: 'Togekiss', ability: 'Dicha / Afortunado', nature: 'Modesta / Miedosa', moves: ['Aire afilado', 'Tajo aéreo'] },
      { name: 'Yanmega', ability: 'Impulso', nature: 'Modesta', moves: ['Tajo aéreo'] }
    ]
  },
  {
    id: 'bicho',
    title: 'Tipo Bicho',
    icon: 'fa-bug',
    color: 'bg-lime-600',
    borderColor: 'border-lime-600',
    bgBadge: 'bg-lime-600/10 text-lime-600 dark:text-lime-400',
    physical: [
      { name: 'Scyther', ability: 'Experto', nature: 'Firme', moves: ['Picadura'] },
      { name: 'Pinsir', ability: '---', nature: 'Firme', moves: ['Tijera X'] },
      { name: 'Scizor', ability: 'Experto', nature: 'Firme', moves: ['Picadura'] },
      { name: 'Heracross', ability: '---', nature: 'Firme', moves: ['Picadura', 'Megacuerno'] },
      { name: 'Armaldo', ability: '---', nature: 'Firme', moves: ['Tijera X'] },
      { name: 'Leavanny', ability: '---', nature: 'Firme', moves: ['Tijera X'] },
      { name: 'Scolipede', ability: 'Impulso', nature: 'Firme', moves: ['Tijera X', 'Megacuerno'] },
      { name: 'Escavalier', ability: '---', nature: 'Firme / Audaz', moves: ['Tijera X', 'Megacuerno'] },
      { name: 'Durant', ability: 'Enjambre', nature: 'Firme', moves: ['Tijera X'] }
    ],
    special: [
      { name: 'Masquerain', ability: '---', nature: 'Modesta', moves: ['Zumbido'] },
      { name: 'Yanmega', ability: 'Impulso', nature: 'Modesta', moves: ['Zumbido'] },
      { name: 'Galvantula', ability: 'Ojo compuesto', nature: 'Modesta', moves: ['Zumbido'] },
      { name: 'Accelgor', ability: '---', nature: 'Modesta', moves: ['Zumbido'] },
      { name: 'Volcarona', ability: '---', nature: 'Modesta / Miedosa', moves: ['Zumbido'] }
    ]
  },
  {
    id: 'fantasma',
    title: 'Tipo Fantasma',
    icon: 'fa-ghost',
    color: 'bg-purple-700',
    borderColor: 'border-purple-700',
    bgBadge: 'bg-purple-700/10 text-purple-600 dark:text-purple-300',
    special: [
      { name: 'Gengar', ability: 'Cue. Maldito', nature: 'Modesta / Miedosa', moves: ['Bola Sombra', 'Infortunio'] },
      { name: 'Drifblim', ability: '---', nature: 'Modesto', moves: ['Bola Sombra', 'Infortunio'] },
      { name: 'Mismagius', ability: '---', nature: 'Modesto', moves: ['Bola Sombra', 'Infortunio'] },
      { name: 'Chandelure', ability: '---', nature: 'Modesta / Miedosa', moves: ['Bola Sombra', 'Infortunio'] }
    ]
  },
  {
    id: 'roca',
    title: 'Tipo Roca',
    icon: 'fa-cubes',
    color: 'bg-stone-500',
    borderColor: 'border-stone-500',
    bgBadge: 'bg-stone-500/10 text-stone-600 dark:text-stone-400',
    physical: [
      { name: 'Kabutops', ability: '---', nature: 'Firme / Alegre', moves: ['Roca Afilada', 'Avalancha'] },
      { name: 'Aerodactyl', ability: '---', nature: 'Firme', moves: ['Roca afilada', 'Avalancha'] },
      { name: 'Tyranitar', ability: 'Chorro Arena', nature: 'Firme', moves: ['Roca afilada', 'Avalancha'] },
      { name: 'Aggron', ability: 'Cabeza roca', nature: 'Firme', moves: ['Avalancha', 'Testarazo'] },
      { name: 'Armaldo', ability: '---', nature: 'Firme', moves: ['Avalancha', 'Roca Afilada'] },
      { name: 'Rampardos', ability: 'Pot. Bruta', nature: 'Firme', moves: ['Avalancha', 'Testarazo', 'Roca afilada'] },
      { name: 'Rhyperior', ability: 'Audaz', nature: 'Firme', moves: ['Romperrocas', 'Avalancha', 'Roca afilada'] },
      { name: 'Archeops', ability: '---', nature: 'Firme', moves: ['Avalancha', 'Roca afilada', 'Testarazo (Huevo)'] },
      { name: 'Terrakion', ability: '---', nature: 'Firme / Alegre', moves: ['Avalancha', 'Roca afilada', 'Testarazo'] }
    ]
  },
  {
    id: 'psiquico',
    title: 'Tipo Psíquico',
    icon: 'fa-brain',
    color: 'bg-pink-500',
    borderColor: 'border-pink-500',
    bgBadge: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
    physical: [
      { name: 'Metagross', ability: '---', nature: 'Firme', moves: ['Cabezazo zen'] },
      { name: 'Jirachi', ability: '---', nature: 'Firme', moves: ['Cabezazo zen'] },
      { name: 'Gallade', ability: 'Cortante', nature: 'Firme', moves: ['Psicocorte'] }
    ],
    special: [
      { name: 'Alakazam', ability: 'Foco interno / Muro mágico', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Slowbro', ability: 'Despiste', nature: 'Mansa / Modesta', moves: ['Psíquico'] },
      { name: 'Exeggutor', ability: '---', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Starmie', ability: '---', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Jynx', ability: 'Despiste', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Xatu', ability: 'Espejomágico', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Espeon', ability: 'Espejomágico', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Gardevoir', ability: '---', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Jirachi', ability: '---', nature: 'Modesta', moves: ['Psíquico'] },
      { name: 'Meloetta', ability: '---', nature: 'Modesta', moves: ['Psíquico'] }
    ]
  }
];

export const ITEMS_DATA = [
  { name: 'Cin. Elegida', effect: 'Aumenta el ataque un 50%. Solo se puede usar el primer movimiento seleccionado.' },
  { name: 'Gafas. Elegidas', effect: 'Aumenta el ataque especial un 50%. Solo se puede usar el primer movimiento seleccionado.' },
  { name: 'Pañuelo Elegido', effect: 'Aumenta la velocidad un 50%. Solo se puede usar el primer movimiento seleccionado.' },
  { name: 'Vidasfera', effect: 'Aumenta la potencia de los movimientos un 30%. Consume un 10% de HP cada turno (se puede anular con Pot. Bruta).' },
  { name: 'Banda Focus', effect: 'El Pokémon aguanta 1 golpe con 1 HP si tiene los HP al máximo.' },
  { name: 'Dados Trucados', effect: 'Aumenta la eficacia de los movimientos multi ataques (es como tener la habilidad encadenado).' },
  { name: 'Gemas', effect: 'Aumenta la potencia de los movimientos un 50%. Se consume al usarlo.' },
  { name: 'Tablas', effect: 'Aumenta la potencia de los movimientos de un tipo en un 20%.' },
  { name: 'Refleluz', effect: 'Mejoran las pantallas de 5 a 8 turnos.' },
  { name: 'Casco Dentado', effect: 'Si el Pokémon que lo lleva recibe un golpe, infligirá un daño al atacante igual al 16,67% de sus PS máximos.' },
  { name: 'Lupa', effect: 'Aumenta la precisión de los movimientos en un 10%.' },
  { name: 'Banda fuerte', effect: 'Aumenta la potencia de los movimientos físicos en un 10%.' },
  { name: 'Gafas especiales', effect: 'Aumenta la potencia de los movimientos especiales en un 10%.' },
  { name: 'Revestimiento Metálico', effect: 'Potencia los movimientos de tipo Acero un 20%.' },
  { name: 'Agua Mística', effect: 'Potencia los movimientos de tipo Agua un 20%.' },
  { name: 'Polvo Plata', effect: 'Potencia los movimientos de tipo Bicho un 20%.' },
  { name: 'Colmillo Dragón', effect: 'Potencia los movimientos de tipo Dragón un 20%.' },
  { name: 'Imán', effect: 'Potencia los movimientos de tipo Eléctrico un 20%.' },
  { name: 'Hechizo', effect: 'Potencia los movimientos de tipo Fantasma un 20%.' },
  { name: 'Carbón', effect: 'Potencia los movimientos de tipo Fuego un 20%.' },
  { name: 'Antiderretir', effect: 'Potencia los movimientos de tipo Hielo un 20%.' },
  { name: 'Cinturón Negro', effect: 'Potencia los movimientos de tipo Lucha un 20%.' },
  { name: 'Pañuelo Seda', effect: 'Potencia los movimientos de tipo Normal un 20%.' },
  { name: 'Semilla Milagro', effect: 'Potencia los movimientos de tipo Planta un 20%.' },
  { name: 'Cuchara Torcida', effect: 'Potencia los movimientos de tipo Psíquico un 20%.' },
  { name: 'Piedra Dura', effect: 'Potencia los movimientos de tipo Roca un 20%.' },
  { name: 'Gafas de sol', effect: 'Potencia los movimientos de tipo Siniestro un 20%.' },
  { name: 'Arena Fina', effect: 'Potencia los movimientos de tipo Tierra un 20%.' },
  { name: 'Flecha Veneno', effect: 'Potencia los movimientos de tipo Veneno un 20%.' },
  { name: 'Pico Afilado', effect: 'Potencia los movimientos de tipo Volador un 20%.' }
];
