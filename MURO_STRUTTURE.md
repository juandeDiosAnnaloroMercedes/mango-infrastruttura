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

## Scuole, associazioni e muro principale

Il tipo di luogo distingue ospitalità, scuola, associazione e altri luoghi della comunità. Le scuole attivano sempre la modalità protetta, disponibile anche per associazioni e altri luoghi con minori. Il referente dichiara di essere adulto e autorizzato: non è una verifica indipendente dell’identità o dell’istituzione. Solo il titolare del link di gestione può inviare righe in modalità protetta. Il modulo richiede testi anonimi e una conferma specifica del referente; il servizio rifiuta recapiti e link riconoscibili nel testo protetto. Il controllo umano dei dettagli identificativi resta necessario.

Le nuove righe sono anonime in tutte le modalità. La home legge una selezione casuale di massimo sette righe reali, nella lingua selezionata: niente nomi, luogo di origine, date, punteggi o classifiche. Per comparire servono consenso specifico di chi inserisce, approvazione e scelta esplicita del gestore dopo il controllo del testo. Il ritiro, il rifiuto e l’archiviazione rimuovono la riga dal feed. Le righe preesistenti non vengono incluse senza nuovo consenso. In mancanza di contenuti condivisi la home mostra uno stato vuoto, non esempi inventati.
