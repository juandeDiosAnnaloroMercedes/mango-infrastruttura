(function () {
  const SUPPORTED = ["it", "en", "es", "fr", "de", "zh"];
  const DEFAULT_LANG = "it";

  // Dizionario minimo: puoi espanderlo quando vuoi, senza rompere nulla
  const I18N = {
    it: {
      site_title: "Mango",
      nav_do: "Fai Mango adesso",
      nav_row: "Scrivi una riga",
      nav_what: "Cos’è Mango",
      hero_title: "Mango è un’infrastruttura di fiducia locale",
      hero_sub: "Non monetaria. Non appropriabile. Senza numeri. Senza accumulo.",
      cta_start: "Fai Mango adesso",
      cta_write: "Scrivi una riga",
      cta_learn: "Cos’è Mango",
      do_title: "Fai Mango adesso",
      do_steps_1: "Scegli una persona reale, qui, nella tua vita.",
      do_steps_2: "Fai uno scambio reale: un gesto, un aiuto, una presenza, un oggetto, un tempo condiviso.",
      do_steps_3: "Poi scrivi una riga nel registro: descrivi lo scambio in modo semplice e vero.",
      do_note: "Mango non è un numero e non è un valore. Non si conta. Non si accumula.",
      row_title: "Scrivi una riga",
      row_sub: "Una riga = riconoscere uno scambio reale.",
      row_example_title: "Esempi di riga",
      row_example_1: "Ho aiutato Marco a portare la spesa. Marco mi ha aiutato a sistemare la bici.",
      row_example_2: "Io ho dato un libro a Sara. Sara mi ha insegnato una cosa che non sapevo.",
      row_example_3: "Abbiamo cucinato insieme e ci siamo presi cura del tempo.",
      row_button: "Apri la pagina “Primo scambio”",
      what_title: "Cos’è Mango",
      what_p1: "Mango è un’infrastruttura di fiducia locale non monetaria: riconosce scambi reali tra persone reali, senza trasformarli in numeri.",
      what_p2: "Non c’è quantità, non c’è equivalenza, non c’è valuta: c’è solo la traccia di ciò che è accaduto. Una riga nel registro.",
      what_p3: "Mango è progettato per evitare accumulo, speculazione e cattura istituzionale.",
      duration_title: "Durata",
      duration_p: "Mango ha una temporalità esplicita: non è accumulabile nel tempo. Non è un capitale.",
      footer_line: "Mango — nato il 02 febbraio 2026.",
      footer_rights: "Infrastruttura creata da Juan de Dios Annaloro Mercedes, in memoria di Larimar."
    },

    // Traduzioni “placeholder” sicure: non rompono nulla.
    // Puoi completarle quando vuoi; se una chiave manca, cade su IT.
    en: { site_title: "Mango", nav_do: "Do Mango now", nav_row: "Write a line", nav_what: "What is Mango?" },
    es: { site_title: "Mango", nav_do: "Haz Mango ahora", nav_row: "Escribe una línea", nav_what: "¿Qué es Mango?" },
    fr: { site_title: "Mango", nav_do: "Fais Mango maintenant", nav_row: "Écris une ligne", nav_what: "Qu’est-ce que Mango ?" },
    de: { site_title: "Mango", nav_do: "Mach Mango jetzt", nav_row: "Schreibe eine Zeile", nav_what: "Was ist Mango?" },
    zh: { site_title: "Mango", nav_do: "现在做 Mango", nav_row: "写一行", nav_what: "什么是 Mango？" }
  };

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const lang = (params.get("lang") || "").toLowerCase().trim();
    return SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  }

  function normalizeUrlLang() {
    const lang = getLang();
    const params = new URLSearchParams(window.location.search);

    // Se manca lang o è invalido, lo riscriviamo in URL senza ricaricare
    if ((params.get("lang") || "").toLowerCase().trim() !== lang) {
      params.set("lang", lang);
      const newUrl = window.location.pathname + "?" + params.toString() + window.location.hash;
      window.history.replaceState({}, "", newUrl);
    }
    return lang;
  }

  function withLang(url, lang) {
    // url può essere "primo-scambio.html" o "index.html#cos-e"
    if (!url) return url;
    if (url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("tel:")) return url;

    let base = url;
    let hash = "";
    const hashIdx = url.indexOf("#");
    if (hashIdx >= 0) {
      base = url.slice(0, hashIdx);
      hash = url.slice(hashIdx);
    }

    const qIdx = base.indexOf("?");
    if (qIdx >= 0) {
      return base + "&lang=" + encodeURIComponent(lang) + hash;
    }
    return base + "?lang=" + encodeURIComponent(lang) + hash;
  }

  function setLangLinks(lang) {
    document.querySelectorAll("a[data-lang-link]").forEach((a) => {
      const raw = a.getAttribute("href") || "";
      a.setAttribute("href", withLang(raw, lang));
    });
  }

  function t(lang, key) {
    const pack = I18N[lang] || I18N[DEFAULT_LANG];
    if (pack && Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    return (I18N[DEFAULT_LANG] && I18N[DEFAULT_LANG][key]) || "";
  }

  function applyI18n(lang) {
    // Testi: elementi con data-i18n="chiave"
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    // Titolo pagina (se presente)
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) titleEl.textContent = t(lang, titleEl.getAttribute("data-i18n"));

    // Meta description (se presente)
    const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) metaDesc.setAttribute("content", t(lang, metaDesc.getAttribute("data-i18n")));
  }

  function bindLangPicker(lang) {
    const select = document.querySelector("[data-lang-picker]");
    if (!select) return;

    select.value = lang;

    select.addEventListener("change", () => {
      const chosen = (select.value || DEFAULT_LANG).toLowerCase();
      const safe = SUPPORTED.includes(chosen) ? chosen : DEFAULT_LANG;

      const params = new URLSearchParams(window.location.search);
      params.set("lang", safe);
      const newUrl = window.location.pathname + "?" + params.toString() + window.location.hash;
      window.location.assign(newUrl);
    });
  }

  function preventDeadAnchors() {
    // Se un anchor non esiste, non deve “rompere”: torna in alto
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) {
      window.history.replaceState({}, "", window.location.pathname + window.location.search);
      window.scrollTo(0, 0);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = normalizeUrlLang();
    setLangLinks(lang);
    applyI18n(lang);
    bindLangPicker(lang);
    preventDeadAnchors();
  });
})();
