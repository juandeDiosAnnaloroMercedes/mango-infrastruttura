(function () {
  "use strict";

  const SUPPORTED = new Set(["it", "en", "es", "fr", "de", "zh"]);
  const KEY = "mango_lang";

  function normalizeLang(x) {
    return String(x || "").trim().toLowerCase();
  }

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const lang = normalizeLang(params.get("lang"));
    return SUPPORTED.has(lang) ? lang : null;
  }

  function getLang() {
    const urlLang = getLangFromUrl();
    if (urlLang) return urlLang;

    const saved = normalizeLang(localStorage.getItem(KEY));
    if (SUPPORTED.has(saved)) return saved;

    return "it";
  }

  function updateUrl(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }

  function applyDataLang(lang) {
    const nodes = document.querySelectorAll("[data-lang]");
    if (!nodes || nodes.length === 0) return;

    nodes.forEach((el) => {
      const elLang = normalizeLang(el.getAttribute("data-lang"));
      el.style.display = (elLang === lang) ? "" : "none";
    });
  }

  function propagateLangToInternalLinks(lang) {
    const links = document.querySelectorAll("a[href]");
    if (!links || links.length === 0) return;

    links.forEach((a) => {
      const href = a.getAttribute("href");
      if (!href) return;

      // Ignora ancore e protocolli speciali
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:")) return;
      if (href.startsWith("tel:")) return;

      // Ignora link esterni assoluti
      if (/^https?:\/\//i.test(href)) return;

      // Aggiorna solo link interni/relativi
      try {
        const target = new URL(href, window.location.origin + window.location.pathname);
        target.searchParams.set("lang", lang);

        const out = target.pathname + "?" + target.searchParams.toString() + target.hash;
        a.setAttribute("href", out);
      } catch (_) {
        // Se URL() fallisce (href strano), non facciamo nulla
      }
    });
  }

  function setSelectValue(lang) {
    const select = document.getElementById("langSelect");
    if (!select) return;

    select.value = lang;

    // Evita doppie listen se questo script viene incluso più volte
    if (select.dataset.mangoBound === "1") return;
    select.dataset.mangoBound = "1";

    select.addEventListener("change", function () {
      const next = normalizeLang(this.value);
      setLang(SUPPORTED.has(next) ? next : "it");
    });
  }

  function setLang(lang) {
    lang = normalizeLang(lang);
    if (!SUPPORTED.has(lang)) lang = "it";

    localStorage.setItem(KEY, lang);
    applyDataLang(lang);
    propagateLangToInternalLinks(lang);
    updateUrl(lang);
    setSelectValue(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setLang(getLang());
  });

})();
