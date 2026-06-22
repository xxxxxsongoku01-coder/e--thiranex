const Router = (() => {
  const routes = {};

  function define(path, handler) {
    routes[path] = handler;
  }

  function resolve() {
    const raw = window.location.hash.slice(1) || '/';
    const segments = raw.split('/').filter(Boolean);
    // Try exact match first
    if (routes[raw]) return routes[raw]({});
    if (routes['/' + raw]) return routes['/' + raw]({});
    // Dynamic route matching (e.g. /product/:id)
    for (const [pattern, handler] of Object.entries(routes)) {
      const patternParts = pattern.split('/').filter(Boolean);
      const pathParts = segments;
      if (patternParts.length !== pathParts.length) continue;
      const params = {};
      let match = true;
      for (let i = 0; i < patternParts.length; i++) {
        if (patternParts[i].startsWith(':')) {
          params[patternParts[i].slice(1)] = pathParts[i];
        } else if (patternParts[i] !== pathParts[i]) {
          match = false; break;
        }
      }
      if (match) return handler(params);
    }

    // 404
    if (routes['*']) routes['*']({});
  }

  function navigate(path) {
    window.location.hash = path;
  }

  function init() {
    // Handle in-page [data-link] clicks
    document.addEventListener('click', e => {
      const link = e.target.closest('[data-link]');
      if (!link) return;
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href) navigate(href.replace('#', ''));
    });
  window.addEventListener('hashchange', () => {
      document.getElementById('app').innerHTML = '';
      resolve();
      updateNavLinks();
      window.scrollTo(0, 0);
    });
    resolve();
    updateNavLinks();
  }

  function updateNavLinks() {
    const hash = window.location.hash.replace('#', '') || '/';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', hash === href || (href !== '/' && hash.startsWith(href)));
    });
  }

  return { define, navigate, init };
})();
