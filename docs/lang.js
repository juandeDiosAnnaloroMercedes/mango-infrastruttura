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
  },

  fr: {
    title: "Mango 🥭",
    subtitle: "Une infrastructure locale de confiance non monétaire. Une ligne à la fois.",
    start: "Faire Mango maintenant",
    write: "Écrire une ligne",
    what: "Qu’est-ce que Mango",
    startBtn: "Commencer",
    startText: "Commencez un échange réel. Pas d’accumulation. Pas de valeur numérique.",
    writeText: "Chaque échange est reconnu par une ligne. Sans quantités. Sans équivalences.",
    whatText: "Mango est un espace de confiance non appropriable.",
    psTitle: "Premier échange",
    psSubtitle: "C’est ici qu’un échange réel commence. Une ligne à la fois.",
    psAction: "Retour à l’accueil"
  },

  de: {
    title: "Mango 🥭",
    subtitle: "Eine nicht-monetäre lokale Vertrauensinfrastruktur. Eine Zeile nach der anderen.",
    start: "Jetzt Mango machen",
    write: "Eine Zeile schreiben",
    what: "Was ist Mango",
    startBtn: "Starten",
    startText: "Beginne einen echten Austausch. Keine Akkumulation. Kein Zahlenwert.",
    writeText: "Jeder Austausch wird mit einer Zeile anerkannt. Ohne Mengen. Ohne Gleichwertigkeit.",
    whatText: "Mango ist ein nicht aneignbarer Raum des Vertrauens.",
    psTitle: "Erster Austausch",
    psSubtitle: "Hier beginnt ein echter Austausch. Eine Zeile nach der anderen.",
    psAction: "Zurück zur Startseite"
  },

  zh: {
    title: "Mango 🥭",
    subtitle: "一個非貨幣性的在地信任基礎設施。一行一行地建立。",
    start: "現在開始 Mango",
    write: "寫下一行",
    what: "什麼是 Mango",
    startBtn: "開始",
    startText: "開始一次真實的交換。沒有累積。沒有數值。",
    writeText: "每一次交換都用一行來確認。沒有數量。沒有等價。",
    whatText: "Mango 是一個不可佔有的信任空間。",
    psTitle: "第一次交換",
    psSubtitle: "真實的交換從這裡開始。一行一行。",
    psAction: "返回首頁"
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
