function renderHome() {
  const featured = PRODUCTS.slice(0, 4);
  document.getElementById('app').innerHTML =    
    <section class="hero">
      <div class="hero-left">
        <p class="hero-eyebrow">Curated objects for the considered home</p>
        <h1 class="hero-headline">Form<br>without<br><em>excess.</em></h1>
        <p class="hero-sub">Every object made to be used, not displayed. Materials sourced honestly. Production runs kept small.</p>
        <a href="#/catalog" data-link class="hero-cta">
          View catalog
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
      <div class="hero-right">
        ${featured.map(p => `
  <div class="hero-img-cell" onclick="Router.navigate('/product/${p.id}')" style="cursor:pointer;">
            <div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;min-height:180px;color:var(--ink);">
              ${p.svg}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    <section class="section" style="background: var(--surface-2);">
      <div class="section-header">
        <h2 class="section-title">New arrivals</h2>
        <a href="#/catalog" data-link class="section-meta" style="color:var(--accent);">View all →</a>
      </div>
      <div class="product-grid">
        ${PRODUCTS.filter(p => p.badge === 'new').map(renderProductCard).join('')}
      </div>
    </section>
    <!-- Materials strip -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">Browse by material</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:2px;">
        ${CATEGORIES.filter(c => c.id !== 'all').map(cat => `
          <button onclick="Router.navigate('/catalog?cat=${cat.id}')" style="padding:1.5rem;background:var(--surface-2);border:none;cursor:pointer;text-align:left;transition:background .2s;font-family:inherit;"
            onmouseover="this.style.background='var(--surface-3)'" onmouseout="this.style.background='var(--surface-2)'">
            <div style="font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-faint);margin-bottom:.375rem;font-family:inherit;">${PRODUCTS.filter(p => p.category === cat.id).length} objects</div>
            <div style="font-size:.9375rem;color:var(--ink);font-family:inherit;">${cat.label}</div>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}
function renderProductCard(p) {
  const displayPrice = p.salePrice
    ? `<span class="product-price-original">€${p.price}</span><span class="product-price">€${p.salePrice}</span>`
    : `<span class="product-price">€${p.price}</span>`;
  const badge = p.badge
    ? `<span class="product-badge badge-${p.badge}">${p.badge === 'new' ? 'New' : 'Sale'}</span>`
    : '';
  return `
    <article class="product-card" onclick="Router.navigate('/product/${p.id}')">
      <div class="product-card-img" style="color:var(--ink);">
        ${badge}
        ${p.svg}
      </div>
      <div class="product-card-body">
        <div class="product-material">${p.material}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <div>${displayPrice}</div>
          <button class="product-quick-add" onclick="event.stopPropagation();Cart.add('${p.id}')">Add</button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog(activeCat = 'all') {
  const filtered = activeCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCat);

  document.getElementById('app').innerHTML = `
   <section class="section">
      <div class="section-header">
        <h2 class="section-title">Catalog</h2>
        <span class="section-meta">${filtered.length} objects</span>
      </div>
      <div class="filters">
        <span class="filter-label">Filter</span>
        ${CATEGORIES.map(cat => `
          <button class="filter-btn ${cat.id === activeCat ? 'active' : ''}"
            onclick="renderCatalog('${cat.id}');history.replaceState(null,'','#/catalog?cat=${cat.id}')">
            ${cat.label}
          </button>
        `).join('')}
      </div>
  <div class="product-grid" id="catalog-grid">
        ${filtered.length
          ? filtered.map(renderProductCard).join('')
          : `<div style="grid-column:1/-1;padding:4rem;text-align:center;color:var(--ink-muted);">No objects in this category yet.</div>`
        }
      </div>
    </section>
  `;
}

function renderProduct(id) {
  const p = PRODUCTS.find(pr => pr.id === id);
  if (!p) { renderNotFound(); return; }

  const displayPrice = p.salePrice
    ? `span style="font-size:1rem;color:var(--ink-faint);text-decoration:line-through;margin-right:.5rem;">€${p.price}</span>€${p.salePrice}`
    : `€${p.price}`;

  document.getElementById('app').innerHTML = `
    <article class="product-detail">
      <div class="product-detail-img" style="color:var(--ink);">
        <div style="transform:scale(2.5);">${p.svg}</div>
      </div>

   <div class="product-detail-body">
        <nav class="breadcrumb">
          <a href="#/" data-link>Home</a>
          <span class="breadcrumb-sep">/</span>
          <a href="#/catalog" data-link>Catalog</a>
          <span class="breadcrumb-sep">/</span>
          <span>${p.name}</span>
