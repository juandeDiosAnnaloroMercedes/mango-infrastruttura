(function () {

  const SUPPORTED = ["it","en","es","fr","de","zh"];
  const KEY = "mango_lang";

  function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return SUPPORTED.includes(lang) ? lang : null;
  }

  function getLang() {
    return getLangFromUrl() ||
           localStorage.getItem(KEY) ||
           "it";
  }

  function applyLang(lang) {

    if (!SUPPORTED.includes(lang)) lang = "it";

    localStorage.setItem(KEY, lang);

    document.querySelectorAll("[data-lang]").forEach(el => {
      el.style.display =
        (el.getAttribute("data-lang") === lang)
        ? ""
        : "none";
    });

    const url = new URL(window.location);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url);

  }

  document.addEventListener("DOMContentLoaded", function () {

    const current = getLang();
    applyLang(current);

    const select = document.getElementById("langSelect");
    if (select) {
      select.value = current;
      select.addEventListener("change", function () {
        applyLang(this.value);
      });
    }

  });

})();
