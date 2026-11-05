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

## Righe personali

La home distingue conservazione privata locale e proposta pubblica. Le proposte personali richiedono dichiarazione di maggiore età e consenso al testo anonimo. Restano in attesa fino alla moderazione del titolare del link privato riservato al sito; dopo approvazione entrano nella stessa selezione anonima delle righe dei luoghi. L’autore conserva un link di ritiro e può controllare lo stato della proposta. I dati già presenti nell’archivio locale non vengono inviati né migrati automaticamente.

La chiave di moderazione non è nel repository. Il servizio conserva l’impronta in una variabile segreta. Le operazioni concorrenti sulle righe personali usano scritture condizionali per impedire che un’approvazione sovrascriva un ritiro.

## Aggiornamento: pubblicazione personale automatica

La normale coda di approvazione personale è sostituita da un controllo deterministico di frasi anonime guidate, disponibili nelle sei lingue del sito. Il verde significa compatibilità del testo e non verifica del fatto; il rosso impedisce la pubblicazione automatica. L’autore dichiara maggiore età e consenso prima di pubblicare. Il server riconosce soltanto le frasi canoniche ammesse e rifiuta aggiunte, nomi o recapiti, anche se viene aggirata l’interfaccia. Le righe guidate vengono rese immediatamente idonee alla selezione comune; il link privato permette il ritiro. I controlli dei referenti per i luoghi e le modalità protette restano separati. Il link amministrativo rimane disponibile per rimozioni straordinarie, non è richiesto per approvare ogni nuova riga personale guidata.

## Un solo spazio personale

Il percorso normale non richiede link per singola riga. Il browser conserva un accesso privato allo spazio Le mie righe. Le nuove pubblicazioni sono associate a questo spazio; il ritiro si effettua dalla lista privata, caricata a pagine. Un solo accesso di recupero facoltativo consente di ritrovare lo stesso spazio su un altro dispositivo. Il possesso dell’accesso concede lettura e ritiro delle righe di quello spazio: deve restare privato. I vecchi accessi per singola riga restano compatibili e vengono riuniti nello spazio solo dopo verifica del possesso della relativa chiave. La scrittura libera locale non viene migrata o pubblicata automaticamente.
