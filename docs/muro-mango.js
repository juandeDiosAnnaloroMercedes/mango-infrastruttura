/* Muro Mango — renderer definitivo (usa .muro-box[lang], non data-lang) */

const MURO_POOL = {
  it: [
    "Qualcuno ha accompagnato qualcuno a una visita.",
    "Qualcuno ha cucinato per qualcuno.",
    "Qualcuno ha prestato ascolto a qualcuno.",
    "Qualcuno ha riparato qualcosa per qualcuno.",
    "Qualcuno ha tradotto un documento per qualcuno.",
    "Qualcuno ha insegnato qualcosa di difficile a qualcuno.",
    "Qualcuno ha fatto una telefonata importante per qualcuno.",
    "Qualcuno ha aiutato qualcuno a fare ordine.",
    "Qualcuno ha portato qualcosa a qualcuno che non poteva uscire.",
    "Qualcuno ha dato un passaggio a qualcuno.",
    "Qualcuno ha fatto compagnia a qualcuno.",
    "Qualcuno ha aiutato qualcuno con una pratica."
  ],
  en: [
    "Someone accompanied someone to an appointment.",
    "Someone cooked for someone.",
    "Someone listened to someone.",
    "Someone fixed something for someone.",
    "Someone translated a document for someone.",
    "Someone taught something difficult to someone.",
    "Someone made an important phone call for someone.",
    "Someone helped someone get organized.",
    "Someone brought something to someone who couldn’t go out.",
    "Someone gave someone a ride.",
    "Someone kept someone company.",
    "Someone helped someone with paperwork."
  ],
  es: [
    "Alguien acompañó a alguien a una cita.",
    "Alguien cocinó para alguien.",
    "Alguien escuchó a alguien.",
    "Alguien arregló algo para alguien.",
    "Alguien tradujo un documento para alguien.",
    "Alguien enseñó algo difícil a alguien.",
    "Alguien hizo una llamada importante por alguien.",
    "Alguien ayudó a alguien a ordenar cosas.",
    "Alguien llevó algo a alguien que no podía salir.",
    "Alguien dio un aventón a alguien.",
    "Alguien acompañó a alguien con su presencia.",
    "Alguien ayudó a alguien con un trámite."
  ],
  fr: [
    "Quelqu’un a accompagné quelqu’un à un rendez-vous.",
    "Quelqu’un a cuisiné pour quelqu’un.",
    "Quelqu’un a écouté quelqu’un.",
    "Quelqu’un a réparé quelque chose pour quelqu’un.",
    "Quelqu’un a traduit un document pour quelqu’un.",
    "Quelqu’un a expliqué quelque chose de difficile à quelqu’un.",
    "Quelqu’un a passé un appel important pour quelqu’un.",
    "Quelqu’un a aidé quelqu’un à mettre de l’ordre.",
    "Quelqu’un a apporté quelque chose à quelqu’un qui ne pouvait pas sortir.",
    "Quelqu’un a donné un trajet à quelqu’un.",
    "Quelqu’un a tenu compagnie à quelqu’un.",
    "Quelqu’un a aidé quelqu’un avec une démarche."
  ],
  de: [
    "Jemand hat jemanden zu einem Termin begleitet.",
    "Jemand hat für jemanden gekocht.",
    "Jemand hat jemandem zugehört.",
    "Jemand hat etwas für jemanden repariert.",
    "Jemand hat ein Dokument für jemanden übersetzt.",
    "Jemand hat jemandem etwas Schwieriges erklärt.",
    "Jemand hat für jemanden einen wichtigen Anruf erledigt.",
    "Jemand hat jemandem beim Ordnen geholfen.",
    "Jemand hat jemandem etwas gebracht, der nicht raus konnte.",
    "Jemand hat jemanden gefahren.",
    "Jemand hat jemandem Gesellschaft geleistet.",
    "Jemand hat jemandem bei einem Formular geholfen."
  ],
  "zh-Hant": [
    "有人陪同某人去看診。",
    "有人為某人煮了一頓飯。",
    "有人傾聽了某人。",
    "有人替某人修好了某樣東西。",
    "有人替某人翻譯了一份文件。",
    "有人教會某人一件很難的事。",
    "有人替某人打了一通重要電話。",
    "有人幫某人整理與收納。",
    "有人把東西送給無法出門的某人。",
    "有人載了某人一程。",
    "有人陪伴了某人。",
    "有人協助某人處理一項申請。"
  ]
};

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function renderWall(){
  const boxes = document.querySelectorAll(".muro-box[lang]");
  if (!boxes.length) return;

  boxes.forEach(box=>{
    const lang = box.getAttribute("lang");
    const ul = box.querySelector(".muro-list");
    if (!ul || !MURO_POOL[lang]) return;

    const picked = shuffle(MURO_POOL[lang].slice()).slice(0,7);
    ul.innerHTML = "";
    picked.forEach(t=>{
      const li=document.createElement("li");
      li.textContent=t;
      ul.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", renderWall);
