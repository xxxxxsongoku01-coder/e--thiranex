const Cart = (() => {
  let items = JSON.parse(localStorage.getItem('forma-cart') || '[]');

  function save() {
    localStorage.setItem('forma-cart', JSON.stringify(items));
    renderCount();
    renderDrawer();
  }

  function add(productId, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    save();
    showToast(`${product.name} added to cart`);
    openDrawer();
  }

  function remove(productId) {
    items = items.filter(i => i.id !== productId);
    save();
  }

  function updateQty(productId, qty) {
    if (qty <= 0) { remove(productId); return; }
    const item = items.find(i => i.id === productId);
    if (item) { item.qty = qty; save(); }
  }

  function total() {
    return items.reduce((sum, item) => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return sum;
      return sum + (p.salePrice || p.price) * item.qty;
    }, 0);
  }

  function count() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  function renderCount() {
    const el = document.getElementById('cart-count');
    const n = count();
    el.textContent = n;
    el.classList.toggle('visible', n > 0);
  }

  function renderDrawer() {
    const container = document.getElementById('cart-items');
    const footer = document.getElementById('cart-footer');
    if (!container || !footer) return;
  if (items.length === 0) {
      container.innerHTML = <div class="cart-empty">
 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <p>Your cart is empty</p>
        <button onclick="Cart.closeDrawer(); Router.navigate('/catalog')" style="font-size:.8125rem;color:var(--accent);text-decoration:underline;underline-offset:2px;border:none;background:none;cursor:pointer;">Browse the catalog</button>
      </div>;footer.innerHTML = '';
      return;
    }
    container.innerHTML = items.map(item => {
      const p = PRODUCTS.find(pr => pr.id === item.id);
      if (!p) return '';
      const price = (p.salePrice || p.price) * item.qty;
      return <div class="cart-item">
        <div class="cart-item-img">${p.svg}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-meta">${p.material} · Qty ${item.qty}</div>
          <div class="cart-item-price">€${price.toFixed(2)}</div>
          <button class="cart-item-remove" onclick="Cart.remove('${p.id}')">Remove</button>
        </div>
      </div>;
 }).join(''); footer.innerHTML = `
  <div class="cart-total-row">
        <span class="cart-total-label">Total</span>
        <span class="cart-total-amount">€${total().toFixed(2)}</span>
      </div>
      <button class="checkout-btn" onclick="Cart.checkout()">Proceed to checkout</button>
    `;
  }

  function openDrawer() {
    document.getElementById('cart-drawer').classList.add('open');
    document.getElementById('cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderDrawer();
  }

  function closeDrawer() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  function checkout() {
    showToast('Checkout coming soon — this is a demo');
  }

  function init() {
    document.getElementById('cart-toggle').addEventListener('click', openDrawer);
    document.getElementById('cart-close').addEventListener('click', closeDrawer);
    document.getElementById('cart-overlay').addEventListener('click', closeDrawer);
    renderCount();
  }

  return { add, remove, updateQty, total, count, openDrawer, closeDrawer, checkout, init, renderCount, renderDrawer };
})();

// ─── TOAST ───
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => el.classList.remove('show'), 2800);
}
