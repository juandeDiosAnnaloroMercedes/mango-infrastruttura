/* Mango — Footer ufficiale (multilingua) | IT EN ES FR DE ZH-TW
   Uso: includi <script src="footer.js" defer></script> in ogni pagina.
*/

(function () {
  // Legge ?lang=xx (it|en|es|fr|de|zh). Default: it
  const params = new URLSearchParams(window.location.search);
  let lang = (params.get("lang") || "it").toLowerCase();
  const allowed = new Set(["it", "en", "es", "fr", "de", "zh"]);
  if (!allowed.has(lang)) lang = "it";

  const t = {
    it: {
      title: "Contatti ufficiali",
      emailLabel: "Email:",
      siteLabel: "Sito:",
      note: "Per stampa e richieste: scrivere all’email ufficiale."
    },
    en: {
      title: "Official contacts",
      emailLabel: "Email:",
      siteLabel: "Website:",
      note: "For press and enquiries, please write to the official email."
    },
    es: {
      title: "Contactos oficiales",
      emailLabel: "Correo:",
      siteLabel: "Sitio:",
      note: "Para prensa y consultas, escribe al correo oficial."
    },
    fr: {
      title: "Contacts officiels",
      emailLabel: "Email :",
      siteLabel: "Site :",
      note: "Pour la presse et les demandes, écrivez à l’email officiel."
    },
    de: {
      title: "Offizielle Kontakte",
      emailLabel: "E-Mail:",
      siteLabel: "Website:",
      note: "Für Presse und Anfragen bitte an die offizielle E-Mail schreiben."
    },
    zh: {
      title: "官方聯絡方式",
      emailLabel: "電子郵件：",
      siteLabel: "網站：",
      note: "媒體與合作洽詢請寄至官方信箱。"
    }
  }[lang];

  // Evita doppioni se lo script viene caricato due volte
  if (document.getElementById("mango-footer")) return;

  // Stili (inline, così funziona ovunque senza dipendenze)
  const style = document.createElement("style");
  style.textContent = `
    #mango-footer {
      margin: 2.5rem 0 0 0;
      padding: 1.25rem 1.25rem;
      border-top: 1px solid rgba(0,0,0,0.12);
    }
    #mango-footer .mf-inner {
      max-width: 980px;
      margin: 0 auto;
    }
    #mango-footer h2 {
      margin: 0 0 0.75rem 0;
      font-size: 1.1rem;
      line-height: 1.25;
    }
    #mango-footer p {
      margin: 0.35rem 0;
      line-height: 1.45;
    }
    #mango-footer .mf-label {
      font-weight: 700;
      margin-right: 0.35rem;
    }
    #mango-footer a {
      text-decoration: underline;
      word-break: break-word;
    }
    #mango-footer .mf-note {
      margin-top: 0.75rem;
      opacity: 0.85;
      font-size: 0.95rem;
    }
  `;
  document.head.appendChild(style);

  // Footer HTML
  const footer = document.createElement("footer");
  footer.id = "mango-footer";
  footer.setAttribute("role", "contentinfo");

  footer.innerHTML = `
    <div class="mf-inner">
      <h2>${t.title}</h2>
      <p><span class="mf-label">${t.emailLabel}</span>
        <a href="mailto:info@mangoinfrastruttura.org">info@mangoinfrastruttura.org</a>
      </p>
      <p><span class="mf-label">${t.siteLabel}</span>
        <a href="https://mangoinfrastruttura.org">mangoinfrastruttura.org</a>
      </p>
      <p class="mf-note">${t.note}</p>
    </div>
  `;

  // Inserisce in fondo al body
  document.body.appendChild(footer);
})();
