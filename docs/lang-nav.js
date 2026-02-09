(function () {
  "use strict";

  // ✅ mappa lingua -> pagina
  const LANG_PAGES = {
    it: "it.html",
    en: "en.html",
    es: "es.html",
    fr: "fr.html",
    de: "de.html",
    zh: "zh.html"
  };

  const DEFAULT = "it";
  const KEY = "mango_lang";
  const SUPPORTED = new Set(Object.keys(LANG_PAGES));

  function norm(x) {
    return String(x || "").trim().toLowerCase();
  }

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const lang = norm(params.get("lang"));
    return SUPPORTED.has(lang) ? lang : null;
  }

  function getLangFromStorage() {
    const saved = norm(localStorage.getItem(KEY));
    return SUPPORTED.has(saved) ? saved : null;
  }

  function currentLang() {
    return getLangFromUrl() || getLangFromStorage() || DEFAULT;
  }

  function setStored(lang) {
    localStorage.setItem(KEY, lang);
  }

  function isHomePage(pathname) {
    // considera home: /, /index.html
    const p = pathname.split("/").pop() || "";
    return p === "" || p === "index.html";
  }

  function getTargetPage(lang, currentPathname) {
    // se sei in home (index.html), vai alla pagina lingua
    if (isHomePage(currentPathname)) return LANG_PAGES[lang];

    // se sei già in una pagina lingua, cambia solo pagina
    return LANG_PAGES[lang];
  }

  function preserveQueryAndHash(targetFile, lang) {
    const url = new URL(window.location.href);

    // Manteniamo eventuali parametri utili, ma aggiorniamo lang
    url.searchParams.set("lang", lang);

    // Ricostruiamo il nuovo path mantenendo la cartella corrente (docs)
    const basePath = url.pathname.split("/").slice(0, -1).join("/") + "/";
    const next = new URL(url.toString());
    next.pathname = basePath + targetFile;

    return next.toString();
  }

  function goToLang(lang) {
    lang = norm(lang);
    if (!SUPPORTED.has(lang)) lang = DEFAULT;

    setStored(lang);

    const targetFile = getTargetPage(lang, window.location.pathname);
    const nextUrl = preserveQueryAndHash(targetFile, lang);

    // Navigazione definitiva
    window.location.href = nextUrl;
  }

  function syncSelect(lang) {
    const select = document.getElementById("langSelect");
    if (!select) return;

    select.value = lang;

    if (select.dataset.mangoBound === "1") return;
    select.dataset.mangoBound = "1";

    select.addEventListener("change", function () {
      goToLang(this.value);
    });
  }

  function propagateLangToInternalLinks(lang) {
    // Aggiorna i link interni per portarsi dietro ?lang=xx
    const links = document.querySelectorAll("a[href]");
    if (!links || links.length === 0) return;

    links.forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;

      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;
      if (/^https?:\/\//i.test(href)) return;

      try {
        const target = new URL(href, window.location.origin + window.location.pathname);
        target.searchParams.set("lang", lang);
        a.setAttribute("href", target.pathname + "?" + target.searchParams.toString() + target.hash);
      } catch (_) {}
    });
  }

  function ensureOnRightPage(lang) {
    // Se sei su index.html e hai ?lang=es -> porta automaticamente su es.html
    // (Così il link home/?lang=es funziona sempre)
    if (isHomePage(window.location.pathname)) {
      const targetFile = LANG_PAGES[lang];
      const nextUrl = preserveQueryAndHash(targetFile, lang);
      // Evita loop: se già puntiamo lì, non fare nulla
      if (!window.location.pathname.endsWith("/" + targetFile)) {
        window.location.replace(nextUrl);
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const lang = currentLang();
    setStored(lang);
    syncSelect(lang);
    propagateLangToInternalLinks(lang);

    // opzionale ma molto utile: se arriva in home con ?lang=xx, manda alla pagina corretta
    ensureOnRightPage(lang);
  });

})();
