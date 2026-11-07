import { POKEMON_DATA, ITEMS_DATA } from './data.js';

// Helper for Sprite URLs
function getSpriteUrl(p) {
  const slug = p.slug || p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `https://img.pokemondb.net/sprites/black-white/anim/normal/${slug}.gif`;
}

function getPokedexUrl(p) {
  if (p.pokedexUrl) return p.pokedexUrl;
  const baseName = p.name.split(' ')[0].toLowerCase().replace(/[^a-z0-9-]/g, '');
  return `https://pokemondb.net/pokedex/${baseName}`;
}

// Render Pokemon Card
function createCard(p, badgeColor) {
  const sprite = getSpriteUrl(p);
  const dexUrl = getPokedexUrl(p);
  const fallbackPng = `https://img.pokemondb.net/sprites/bank/normal/${p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.png`;

  return `
    <div class="poke-card bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-xl p-3.5 flex gap-3 items-center hover:border-gray-400 dark:hover:border-gray-500 transition-all shadow-sm">
      <a href="${dexUrl}" target="_blank" rel="noopener" class="w-14 h-14 shrink-0 bg-white dark:bg-gray-900 rounded-lg p-1 border border-gray-200 dark:border-gray-700 flex items-center justify-center relative overflow-hidden group">
        <img src="${sprite}" alt="${p.name}" class="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" onerror="this.onerror=null; this.src='${fallbackPng}';">
      </a>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between gap-1 mb-1">
          <a href="${dexUrl}" target="_blank" rel="noopener" class="font-bold text-sm text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors truncate">
            ${p.name}
          </a>
          ${p.nature !== '---' ? `<span class="text-[10px] font-semibold px-2 py-0.5 rounded-full ${badgeColor}">${p.nature}</span>` : ''}
        </div>
        ${p.ability !== '---' ? `<p class="text-xs text-gray-500 dark:text-gray-400 mb-1.5"><span class="font-medium text-gray-700 dark:text-gray-300">Hab:</span> ${p.ability}</p>` : ''}
        <div class="flex flex-wrap gap-1">
          ${p.moves.map(m => `<span class="text-[10px] bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700 font-mono">${m}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// Render Main App
function renderApp() {
  const sidebarNav = document.getElementById('sidebarNav');
  const mainContent = document.getElementById('mainContent');

  let navHtml = '';
  let contentHtml = '';

  POKEMON_DATA.forEach(cat => {
    navHtml += `
      <a href="#${cat.id}" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all">
        <span class="w-2 h-2 rounded-full ${cat.color}"></span>
        <span>${cat.title}</span>
      </a>
    `;

    contentHtml += `
      <section id="${cat.id}" class="category-section bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
        <button class="accordion-toggle w-full p-4 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <div class="flex items-center gap-3">
            <div class="p-2.5 rounded-xl text-white ${cat.color}">
              <i class="fa-solid ${cat.icon}"></i>
            </div>
            <h2 class="font-bold text-base text-gray-900 dark:text-white">${cat.title}</h2>
          </div>
          <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
        </button>
        <div class="accordion-content p-4 space-y-4">
    `;

    if (cat.pokemon) {
      contentHtml += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">`;
      cat.pokemon.forEach(p => { contentHtml += createCard(p, cat.bgBadge); });
      contentHtml += `</div>`;
    }

    if (cat.physical) {
      contentHtml += `
        <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <button class="accordion-toggle w-full px-3.5 py-2.5 bg-gray-100/70 dark:bg-gray-800/60 flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
            <span class="flex items-center gap-2"><i class="fa-solid fa-hand-fist text-red-500"></i> Atacantes Físicos</span>
            <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
          </button>
          <div class="accordion-content p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${cat.physical.map(p => createCard(p, cat.bgBadge)).join('')}
          </div>
        </div>
      `;
    }

    if (cat.special) {
      contentHtml += `
        <div class="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <button class="accordion-toggle w-full px-3.5 py-2.5 bg-gray-100/70 dark:bg-gray-800/60 flex items-center justify-between text-xs font-bold text-gray-700 dark:text-gray-300">
            <span class="flex items-center gap-2"><i class="fa-solid fa-wand-magic-sparkles text-blue-500"></i> Atacantes Especiales</span>
            <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
          </button>
          <div class="accordion-content p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            ${cat.special.map(p => createCard(p, cat.bgBadge)).join('')}
          </div>
        </div>
      `;
    }

    contentHtml += `</div></section>`;
  });

  // Add Items Section
  navHtml += `
    <a href="#objetos" class="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all">
      <span class="w-2 h-2 rounded-full bg-slate-500"></span>
      <span>Objetos</span>
    </a>
  `;

  contentHtml += `
    <section id="objetos" class="category-section bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
      <button class="accordion-toggle w-full p-4 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/40 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <div class="flex items-center gap-3">
          <div class="p-2.5 rounded-xl text-white bg-slate-600">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <h2 class="font-bold text-base text-gray-900 dark:text-white">Objetos Recomendados</h2>
        </div>
        <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-200"></i>
      </button>
      <div class="accordion-content p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        ${ITEMS_DATA.map(item => `
          <div class="p-3 bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 rounded-xl">
            <h4 class="font-bold text-sm text-gray-900 dark:text-white mb-1 flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-slate-500 text-xs"></i> ${item.name}
            </h4>
            <p class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">${item.effect}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  sidebarNav.innerHTML = navHtml;
  mainContent.innerHTML = contentHtml;

  setupAccordionToggles();
}

function setupAccordionToggles() {
  document.querySelectorAll('.accordion-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('.fa-chevron-down');
      if (content) {
        content.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });
}

// Live Search Filter
document.getElementById('searchInput')?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.poke-card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  document.querySelectorAll('.category-section').forEach(section => {
    const visibleCards = section.querySelectorAll('.poke-card:not(.hidden)');
    if (query !== '' && visibleCards.length === 0) {
      section.classList.add('hidden');
    } else {
      section.classList.remove('hidden');
    }
  });
});

// Theme Toggle Engine
const themeToggleBtn = document.getElementById('themeToggle');
themeToggleBtn?.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.remove('dark');
  }
  renderApp();
});
