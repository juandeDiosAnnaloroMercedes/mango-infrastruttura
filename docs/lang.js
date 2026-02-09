(function () {
  const allowed = new Set(['it','en','es','fr','de','zh']);
  const params = new URLSearchParams(location.search);
  const lang = allowed.has(params.get('lang')) ? params.get('lang') : 'it';

  document.documentElement.lang = lang;

  const T = {
    it: {
      title: "Mango 🥭",
      subtitle: "Un’infrastruttura di fiducia locale non monetaria.<br>Una riga alla volta.",
      startTitle: "Fai Mango adesso",
      startText: "Inizia uno scambio reale. Nessun accumulo. Nessun valore numerico.",
      startBtn: "Inizia",
      writeTitle: "Scrivi una riga",
      writeText: "Ogni scambio si riconosce con una riga. Senza quantità. Senza equivalenze.",
      whatTitle: "Cos’è Mango",
      whatText: "Mango è uno spazio di fiducia non appropriabile. Non è denaro. Non è accumulabile.",
      footer: "Creato da Juan de Dios Annaloro Mercedes – 02 Febbraio 2026"
    },
    en: {
      title: "Mango 🥭",
      subtitle: "A local, non-monetary trust infrastructure.<br>One line at a time.",
      startTitle: "Do Mango now",
      startText: "Start a real exchange. No hoarding. No numeric value.",
      startBtn: "Start",
      writeTitle: "Write a line",
      writeText: "Each exchange is recognized with a line. No quantities. No equivalences.",
      whatTitle: "What is Mango",
      whatText: "Mango is a non-appropriable space of trust. It is not money. It is not accumulable.",
      footer: "Created by Juan de Dios Annaloro Mercedes – 02 February 2026"
    },
    es: {
      title: "Mango 🥭",
      subtitle: "Una infraestructura local de confianza no monetaria.<br>Una línea a la vez.",
      startTitle: "Haz Mango ahora",
      startText: "Inicia un intercambio real. Sin acumulación. Sin valor numérico.",
      startBtn: "Iniciar",
      writeTitle: "Escribe una línea",
      writeText: "Cada intercambio se reconoce con una línea. Sin cantidades. Sin equivalencias.",
      whatTitle: "Qué es Mango",
      whatText: "Mango es un espacio de confianza no apropiable. No es dinero. No es acumulable.",
      footer: "Creado por Juan de Dios Annaloro Mercedes – 02 febrero 2026"
    },
    fr: {
      title: "Mango 🥭",
      subtitle: "Une infrastructure locale de confiance non monétaire.<br>Une ligne à la fois.",
      startTitle: "Fais Mango maintenant",
      startText: "Commence un échange réel. Pas d’accumulation. Pas de valeur numérique.",
      startBtn: "Démarrer",
      writeTitle: "Écris une ligne",
      writeText: "Chaque échange est reconnu par une ligne. Sans quantités. Sans équivalences.",
      whatTitle: "Qu’est-ce que Mango",
      whatText: "Mango est un espace de confiance non appropriable. Ce n’est pas de l’argent. Ce n’est pas accumulable.",
      footer: "Créé par Juan de Dios Annaloro Mercedes – 02 février 2026"
    },
    de: {
      title: "Mango 🥭",
      subtitle: "Eine lokale, nicht-monetäre Vertrauens-Infrastruktur.<br>Eine Zeile nach der anderen.",
      startTitle: "Mach Mango jetzt",
      startText: "Starte einen echten Austausch. Kein Horten. Kein Zahlenwert.",
      startBtn: "Start",
      writeTitle: "Schreibe eine Zeile",
      writeText: "Jeder Austausch wird mit einer Zeile anerkannt. Keine Mengen. Keine Äquivalenzen.",
      whatTitle: "Was ist Mango",
      whatText: "Mango ist ein nicht aneignbarer Vertrauensraum. Es ist kein Geld. Es ist nicht akkumulierenbar.",
      footer: "Erstellt von Juan de Dios Annaloro Mercedes – 02. Februar 2026"
    },
    zh: {
      title: "Mango 🥭",
      subtitle: "一种本地、非货币的信任基础设施。<br>一次一行。",
      startTitle: "立即做 Mango",
      startText: "开始一次真实交换。不囤积。没有数字价值。",
      startBtn: "开始",
      writeTitle: "写一行",
      writeText: "每次交换用“一行”来确认。无数量。无等价换算。",
      whatTitle: "什么是 Mango",
      whatText: "Mango 是不可占有的信任空间。它不是金钱。它不可累积。",
      footer: "创作：Juan de Dios Annaloro Mercedes – 2026年2月2日"
    }
  };

  const t = T[lang] || T.it;

  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('title', t.title);
  setHTML('subtitle', t.subtitle);

  setText('start-title', t.startTitle);
  setText('start-text', t.startText);
  setText('start-btn', t.startBtn);

  setText('write-title', t.writeTitle);
  setText('write-text', t.writeText);

  setText('what-title', t.whatTitle);
  setText('what-text', t.whatText);

  setText('footer-text', t.footer);
})();
