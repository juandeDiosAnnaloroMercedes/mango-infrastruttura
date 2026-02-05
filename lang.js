const I18N = {
  it: {
    home_title: "Mango — infrastruttura di fiducia",
    btn_do_now: "Fai Mango adesso",
    btn_write_row: "Scrivi una riga",
    btn_what_is: "Cos’è Mango",
  },
  en: {
    home_title: "Mango — trust infrastructure",
    btn_do_now: "Do Mango now",
    btn_write_row: "Write one line",
    btn_what_is: "What is Mango",
  },
  es: {
    home_title: "Mango — infraestructura de confianza",
    btn_do_now: "Haz Mango ahora",
    btn_write_row: "Escribe una línea",
    btn_what_is: "¿Qué es Mango?",
  },
  fr: {
    home_title: "Mango — infrastructure de confiance",
    btn_do_now: "Fais Mango maintenant",
    btn_write_row: "Écris une ligne",
    btn_what_is: "Qu’est-ce que Mango ?",
  },
  de: {
    home_title: "Mango — Vertrauens-Infrastruktur",
    btn_do_now: "Mach Mango jetzt",
    btn_write_row: "Schreibe eine Zeile",
    btn_what_is: "Was ist Mango?",
  },
  zh: {
    home_title: "Mango——信任基础设施",
    btn_do_now: "现在做 Mango",
    btn_write_row: "写一行",
    btn_what_is: "什么是 Mango？",
  },
};

const SUPPORTED = Object.keys(I18N);

function getLang() {
  const p = new URLSearchParams(window.location.search);
  const urlLang = p.get("lang");
  if (urlLang && SUPPORTED.includes(urlLang)) return urlLang;

  const saved = localStorage.getItem("mango_lang");
  if (saved && SUPPORTED.includes(saved)) return saved;

  return "it";
}

function setLang(lang) {
  localStorage.setItem("mango_lang", lang);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.location.replace(url.toString());
}

function translate(lang) {
  const dict = I18N[lang] || I18N.it;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("a.nav-link").forEach(a => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;
    const u = new URL(href, window.location.href);
    u.searchParams.set("lang", lang);
    a.setAttribute("href", u.pathname.split("/").pop() + u.search);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  translate(lang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
});
