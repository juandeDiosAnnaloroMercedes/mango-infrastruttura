(() => {
  const DEFAULT_LANG = "it";
  const SUPPORTED = ["it", "en", "es", "fr", "de", "zh"];

  const STRINGS = {
    it: {
      site_title: "Mango",
      nav_do: "Fai Mango adesso",
      nav_row: "Scrivi una riga",
      nav_what: "Cos’è Mango",
      nav_faq: "FAQ",
      hero_title: "Mango è un’infrastruttura di fiducia locale",
      hero_sub: "Non monetaria. Non appropriabile. Senza numeri. Senza accumulo."
    },
    en: {
      site_title: "Mango",
      nav_do: "Do Mango now",
      nav_row: "Write a line",
      nav_what: "What is Mango?",
      nav_faq: "FAQ",
      hero_title: "Mango is a local trust infrastructure",
      hero_sub: "Non-monetary. Non-appropriable. Without numbers. Without accumulation."
    }
  };

  function getLang() {
    const p = new URLSearchParams(window.location.search);
    const l = (p.get("lang") || DEFAULT_LANG).toLowerCase();
    return SUPPORTED.includes(l) ? l : DEFAULT_LANG;
  }

  function applyI18n(lang) {
    const dict = STRINGS[lang] || STRINGS[DEFAULT_LANG];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const picker = document.querySelector("[data-lang-picker]");
    if (picker) picker.value = lang;
  }

  function propagateLang(lang) {
    document.querySelectorAll("[data-lang-link]").forEach(a => {
      const url = new URL(a.getAttribute("href"), window.location.href);
      url.searchParams.set("lang", lang);
      a.setAttribute("href", url.pathname + "?" + url.searchParams.toString());
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLang();
    applyI18n(lang);
    propagateLang(lang);
  });
})();
