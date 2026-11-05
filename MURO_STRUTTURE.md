# Muro Mango per le strutture — estensione facoltativa

La home aggiunge un collegamento a `muro-strutture.html`, servita dallo stesso dominio Mango. Il muro anonimo e l’archivio locale già presenti nella home mantengono il funzionamento precedente.

Questa estensione online è distinta dal nucleo statico V1 descritto in ARCHITECTURE_FREEZE_V1.md. Per condividere righe tra dispositivi usa un archivio tecnico esterno. La pagina sul dominio Mango chiama esclusivamente l’API configurata nella costante `API`; il codice del servizio è versionato nel repository del servizio Muro Mango. Non è richiesto un account ChatGPT.

- Ogni struttura crea un muro e riceve un link privato di gestione.
- Gli ospiti propongono righe, concordando testo e consenso con i partecipanti.
- Il gestore approva prima della pubblicazione.
- L’autore riceve un link privato per ritirare la propria riga.
- Le chiavi private sono conservate dal browser e possono essere scaricate in un promemoria. Il servizio conserva soltanto impronte SHA-256 delle chiavi.
- Solo il link pubblico entra nella locandina con QR.
- Il gestore può esportare il registro in JSON.

Chi possiede un link privato dispone del relativo accesso. Non condividerlo con gli ospiti. Non è disponibile un recupero automatico delle chiavi perse.

Verifica: test del servizio per consenso, separazione delle autorizzazioni, visibilità delle righe in attesa, pubblicazione, ritiro, esportazione, limiti di invio, CORS e QR. I dati di prova dei test non sono scritti nell’archivio pubblico.
