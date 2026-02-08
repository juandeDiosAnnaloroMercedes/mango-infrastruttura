const translations = {
  it: {
    title: "Mango 🥭",
    subtitle: "Un’infrastruttura di fiducia locale non monetaria.\nUna riga alla volta.",
    start: "Fai Mango adesso",
    write: "Scrivi una riga",
    what: "Cos’è Mango",
    startBtn: "Inizia",
    startText: "Inizia uno scambio reale. Nessun accumulo. Nessun valore numerico.",
    writeText: "Ogni scambio si riconosce con una riga. Senza quantità. Senza equivalenze.",
    whatText: "Mango è uno spazio di fiducia non appropriabile. Non è denaro. Non è accumulabile. È un’infrastruttura creata per riconoscere scambi reali."
  },
  en: {
    title: "Mango 🥭",
    subtitle: "A non-monetary local trust infrastructure.\nOne line at a time.",
    start: "Do Mango now",
    write: "Write a line",
    what: "What is Mango",
    startBtn: "Start",
    startText: "Begin a real exchange. No accumulation. No numeric value.",
    writeText: "Each exchange is recognized with a line. No quantities. No equivalences.",
    whatText: "Mango is a non-appropriable space of trust. It is not money. It is not accumulable. It is an infrastructure created to recognize real exchanges."
  },
  es: {
    title: "Mango 🥭",
    subtitle: "Una infraestructura de confianza local no monetaria.\nUna línea a la vez.",
    start: "Haz Mango ahora",
    write: "Escribe una línea",
    what: "¿Qué es Mango?",
    startBtn: "Empezar",
    startText: "Empieza un intercambio real. Sin acumulación. Sin valor numérico.",
    writeText: "Cada intercambio se reconoce con una línea. Sin cantidades. Sin equivalencias.",
    whatText: "Mango es un espacio de confianza no apropiable. No es dinero. No es acumulable. Es una infraestructura creada para reconocer intercambios reales."
  }
};

function getLang() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("lang") || "it").toLowerCase();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value;
}

function applyLang(lang) {
  const t = translations[lang] || translations.it;

  setText("title", t.title);
  setText("subtitle", t.subtitle);
  setText("start-title", t.start);
  setText("write-title", t.write);
  setText("what-title", t.what);
  setText("start-btn", t.startBtn);
  setText("start-text", t.startText);
  setText("write-text", t.writeText);
  setText("what-text", t.whatText);

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
});
