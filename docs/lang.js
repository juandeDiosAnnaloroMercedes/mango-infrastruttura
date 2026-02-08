const translations = {
  it: {
    title: "Mango 🥭",
    subtitle: "Un’infrastruttura di fiducia locale non monetaria. Una riga alla volta.",
    start: "Fai Mango adesso",
    write: "Scrivi una riga",
    what: "Cos’è Mango",
    startBtn: "Inizia",
    startText: "Inizia uno scambio reale. Nessun accumulo. Nessun valore numerico.",
    writeText: "Ogni scambio si riconosce con una riga. Senza quantità. Senza equivalenze.",
    whatText: "Mango è uno spazio di fiducia non appropriabile. Non è denaro. Non è accumulabile.",
    psTitle: "Primo scambio",
    psSubtitle: "Qui inizia uno scambio reale. Una riga alla volta.",
    psAction: "Torna alla home"
  },
  en: {
    title: "Mango 🥭",
    subtitle: "A non-monetary local trust infrastructure. One line at a time.",
    start: "Do Mango now",
    write: "Write a line",
    what: "What is Mango",
    startBtn: "Start",
    startText: "Begin a real exchange. No accumulation. No numeric value.",
    writeText: "Each exchange is recognized with a line. No quantities. No equivalences.",
    whatText: "Mango is a non-appropriable space of trust. It is not money. It is not accumulable.",
    psTitle: "First exchange",
    psSubtitle: "This is where a real exchange begins. One line at a time.",
    psAction: "Back to home"
  },
  es: {
    title: "Mango 🥭",
    subtitle: "Una infraestructura de confianza local no monetaria. Una línea a la vez.",
    start: "Haz Mango ahora",
    write: "Escribe una línea",
    what: "¿Qué es Mango?",
    startBtn: "Empezar",
    startText: "Empieza un intercambio real. Sin acumulación. Sin valor numérico.",
    writeText: "Cada intercambio se reconoce con una línea. Sin cantidades. Sin equivalencias.",
    whatText: "Mango es un espacio de confianza no apropiable. No es dinero. No es acumulable.",
    psTitle: "Primer intercambio",
    psSubtitle: "Aquí empieza un intercambio real. Una línea a la vez.",
    psAction: "Volver al inicio"
  }
};

function getLang() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("lang") || "it").toLowerCase();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
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

  setText("ps-title", t.psTitle);
  setText("ps-subtitle", t.psSubtitle);
  setText("ps-action", t.psAction);

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
});
