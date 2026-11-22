# Tilgjengelig søk

Liten nettside der brukeren kan søke etter fiktive aktiviteter, kurs og møteplasser. Bygget med Next.js (App Router) og TypeScript. Frontend og serverdel ligger i samme prosjekt.

## Slik starter du løsningen

```bash
npm install
npm run dev
```

Åpne http://localhost:3000. API-et kan også testes direkte, for eksempel http://localhost:3000/api/search?q=tur

## Oppbygging

* `data/activities.ts`: fast datasett med fiktive oppføringer og typene.
* `lib/search.ts`: ren søkefunksjon (trim, små bokstaver, delstrengmatching på tittel). Tomt søk gir alle oppføringer.
* `app/api/search/route.ts`: GET endepunkt som leser `q` og kaller søkefunksjonen.
* `components/SearchForm.tsx`: skjema med label, søkefelt og knapp.
* `components/SearchResults.tsx`: antall treff og liste.
* `app/page.tsx`: setter sammen skjema, fetch og resultater.
* `app/globals.css`: enkel grunnstil med synlig fokus.

## Universell utforming

* Ekte `form`, `input` og `button`, så Tab, Shift+Tab og Enter fungerer uten ekstra kode.
* Label koblet til søkefeltet. Landemerker: `main`, `search`, `section`. Overskriftsstruktur h1, h2, h3.
* `lang="nb"` og beskrivende sidetittel.
* Antall treff annonseres via `role="status"` uten at fokus flyttes.
* Synlig fokusring med `:focus-visible`. Klikkflater på minst 44px. Støtte for `forced-colors` og `prefers-reduced-motion`.

## Hva jeg har kontrollert

* Hele søkeflyten kun med tastatur (Tab, Shift+Tab, Enter).
* Fokusringen er synlig på felt og knapp.
* Treff, ingen treff og tomt søk, også direkte mot API-et.
* Skjermleser: antall treff blir lest opp etter søk. (Fyll inn hvilken skjermleser du brukte.)

## Prioritert, gjenstår og tid

* Prioritert: søkeflyt, tastaturbruk, skjermleserbeskjed og lesbar kode. Styling er holdt enkel og støtter UU.
* Gjenstår: feilhåndtering og lastestatus, håndtering av raske søk etter hverandre (AbortController), automatiske tester, søk på sted og type.