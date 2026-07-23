# SEO-, AI-, GEO-, UX- und Conversion-Audit

Website: https://www.xn--tierarztpraxis-mckmhl-wec5l.de/
Marke: Tierarztpraxis Dr. Thomas Buss, Möckmühl
Auditdatum: 23. Juli 2026
Auditumfang: gesamter statischer Quellbestand, alle öffentlich verlinkten Hauptseiten, Live-Statuscodes, interne Links, Metadaten, strukturierte Daten, Core Web Vitals im Lab, Accessibility-Automation, Content, Conversion, lokale Wettbewerbslandschaft und AI-Retrieval-Grundlagen.

## 1. Executive Summary

Die Website hat eine starke lokale Grundposition: klarer Praxisbezug, vollständige Kontaktdaten, direkte Termin- und Notfallwege, sichtbares Team, echte Leistungsinformationen und umfangreicher Ratgeber. Vor dem Audit fehlten jedoch fast alle technischen Discovery-Signale: Canonicals, Sitemap, robots.txt, strukturierte Daten, Social-Metadaten und AI-Indexdateien. Zusätzlich existierten crawlbare HTML-Dubletten.

Die produktionsreifen Quick-Wins sind umgesetzt. Alle Hauptseiten besitzen nun Canonicals, Beschreibungen, robots-Direktiven und Social-Metadaten. Die Startseite enthält `WebSite`, `VeterinaryCare`, `WebPage`, `Person`, `ContactPoint` und Öffnungszeiten als JSON-LD. Leistungen, Notfall, Ratgeber und Booking enthalten passende Seiten-, Listen- und Breadcrumb-Daten. `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, AI-, Entity-, Content- und Knowledge-Index sind erstellt. Dubletten werden über Vercel weitergeleitet.

Automatisierte Nachmessung auf mobilem Lighthouse-Profil:

- SEO: 100/100
- Accessibility: 100/100
- Best Practices: 100/100
- Performance: 78/100
- FCP: 2,0 s
- LCP: 3,2 s
- TBT: 460 ms
- CLS: 0

`NO_LCP` wird von Lighthouse 13 zusätzlich als interner Lantern-Fehler ausgegeben. Der Report enthält dennoch einen gemessenen LCP-Wert. Das Verhalten entspricht einem dokumentierten Lighthouse-Problem und ist nicht gleichbedeutend mit fehlendem LCP im Browser.

Größte verbleibende Risiken:

1. Cookie-Auswahl steuert die Google-Einbettungen nicht. Kalender und Karte laden unabhängig von der Auswahl.
2. Das Kontaktformular kann technisch keinen bestätigten Versand nachweisen, zeigt wegen `no-cors` aber Erfolg an.
3. Die eigenständige Booking-Seite simuliert Slots, prüft keine echte Verfügbarkeit und übergibt nur Datum und E-Mail an Google Calendar.
4. Zehn Ratgebertexte liegen auf einer URL in Modals. Dadurch fehlen direkte URLs, eigenständige Suchintentionen, saubere Article-Signale und teilbare Einstiege.
5. INP und reale Nutzerdaten können ohne Search Console beziehungsweise CrUX nicht seriös bewertet werden.

## 2. Bewertungsmodell

Die strategischen Scores berücksichtigen mehr als Lighthouse. Sie verbinden technische Implementierung, Inhaltsabdeckung, Vertrauenssignale, Nutzerweg und verbleibende Risiken.

| Bereich | Score | Begründung |
|---|---:|---|
| Website gesamt | 84/100 | Gute lokale Basis und umgesetzte technische Discovery; offene Datenschutz-, Formular- und Content-Architektur-Risiken |
| SEO | 91/100 | Technische Grundsignale vollständig; Ratgeber-URLs und Service-Tiefe fehlen |
| AI SEO | 83/100 | Entity-Graph, klare Fakten und AI-Dateien vorhanden; Retrieval wird durch Modal-Artikel begrenzt |
| GEO | 81/100 | Zitierbare Fakten und Quellenrangfolge vorhanden; externe Autorität und tiefe Einzelfragen fehlen |
| UX | 85/100 | Klare primäre Wege, responsive Oberfläche; Popup, lange Startseite und doppelte Terminlogik erhöhen Reibung |
| Accessibility | 100/100 automatisiert | Lighthouse nach Quick-Wins; manuelle Prüfung von Fokusfallen und Screenreader-Abläufen bleibt nötig |
| Performance | 78/100 mobil Lab | CLS 0 und kleine Kernbilder; Google Calendar, JavaScript und ungenutztes CSS belasten Hauptthread |
| Conversion | 80/100 | Viele Kontaktwege und Social Proof; unbestätigter Formularversand und simulierte Slots sind kritisch |
| Content | 79/100 | Ratgeberbreite gut; separate URLs, Autorenschaft, Aktualisierung und Service-Landingpages fehlen |
| Trust | 84/100 | Team, Impressum, Kontaktdaten und Rezensionen sichtbar; Datenschutztechnik und Belegführung ausbaufähig |

## 3. Arbeitsgrundlage für Design und Conversion

### 3.1 Funnel-Phase und Awareness

- Primäre Phase: lokale Auswahl und Terminabsicht.
- Awareness: problem-aware bis solution-aware. Nutzer kennen ein Symptom oder brauchen Vorsorge und suchen erreichbare Hilfe.
- Emotionaler Zustand: Sorge um das Tier, Zeitdruck bei akuten Symptomen, Wunsch nach verständlicher Orientierung.
- Primärer Einwand: „Bekomme ich hier schnell die richtige Hilfe und kann ich der Praxis vertrauen?“

### 3.2 Psychologische Hebel

- Cognitive Ease: Telefon, Termin, Notfall und Route müssen ohne Interpretation erreichbar sein.
- Spezifität und Risikoreduktion: konkrete Leistungen, Öffnungszeiten, Teamrollen und klare Notfallgrenzen senken Unsicherheit.

### 3.3 Designkonzept

- Grid: asymmetrische Praxis- und Leistungsbereiche statt wiederholter Gleichraster.
- Hierarchie: Notfall rot, reguläre Aktionen grün, Information neutral.
- Kontrast: CTA-Farben tragen eine eindeutige Funktion.
- Whitespace: lange medizinische Inhalte werden in kurze, scannbare Abschnitte getrennt.
- Signaturdetail: Tiermedizinische Symbole und organische grüne Akzente, ohne zusätzliche visuelle Effekte.

### 3.4 Copy und CTA

- Primäre Intents erhalten je einen eindeutigen CTA: „Termin buchen“, „Praxis anrufen“, „Route planen“ und „Notfall-Informationen“.
- Medizinische Texte bleiben ruhig, konkret und begrenzen Online-Ratschläge sichtbar.
- Keine künstliche Dringlichkeit. Dringlichkeit nur bei realen Notfallzeichen.

## 4. Crawl und Inhaltsinventar

### 4.1 Indexierbare Hauptseiten

| Seite | Zweck | Wörter ungefähr | H1 | Status |
|---|---|---:|---:|---|
| `/` | Praxis, Team, Kontakt, Termin, Standort | 1.022 | 1 | indexierbar |
| `/leistungen.html` | zehn Leistungsbereiche | 671 | 1 | indexierbar |
| `/notfall.html` | Warnzeichen, Dienst, Kliniken | 486 | 1 | indexierbar |
| `/ratgeber.html` | zehn Ratgebertexte | 3.123 | 1 | indexierbar |
| `/booking.html` | Terminvorbereitung | 214 | 1 nach Fix | indexierbar |
| `/Impressum.html` | Anbieterangaben | 450 | 1 | indexierbar |
| `/Datenschutz.html` | Datenschutzhinweise | 650 | 1 | indexierbar |

`/Startseite.html` war eine vollständige Dublette der Homepage. Sie ist jetzt `noindex`, canonicalisiert und wird nach Deployment per 308/301-Regel auf `/` weitergeleitet.

### 4.2 Weitere Ressourcen

- Blog: als Ratgeber-Sammlung vorhanden, aber keine separaten Artikel-URLs.
- FAQ: kein eigenständiger FAQ-Bereich.
- Glossar: nicht vorhanden.
- Produkte, Shop, Kategorien: nicht vorhanden und für aktuelle Geschäftslogik nicht erforderlich.
- Suche: nicht vorhanden; bei sieben Seiten derzeit nicht zwingend.
- Downloads/PDFs: keine öffentlichen Angebote gefunden.
- RSS/Feed: nicht vorhanden; nach Aufteilung des Ratgebers sinnvoll.
- Öffentliche API: nicht vorhanden.
- Videos: nicht vorhanden.
- Pagination: nicht erforderlich.
- hreflang: nicht erforderlich, da nur deutsche Version.

Vollständiger Baum: [`website-tree.md`](../website-tree.md)
Interne Linkstruktur: [`internal-link-structure.md`](../internal-link-structure.md)

## 5. Business-Analyse

### 5.1 Verifizierte Grundlage

- Branche: Tierarztpraxis für Kleintiere.
- Standort: Möckmühl.
- Öffentlich sichtbares Team: drei Personen.
- Unternehmensgröße: nicht verifiziert. Aus der Teamdarstellung lässt sich nur eine kleine lokale Praxis ableiten; Personalumfang kann größer sein.
- Leistungen: Labor, Dermatologie/Allergiediagnostik, Ultraschall, Röntgen, Tierkennzeichnung, stationäre Unterbringung, Zahnheilkunde, Gynäkologie/Andrologie, Weichteilchirurgie, chemische Kastration.
- Hauptziele: Anruf, Online-Termin, Kontaktformular, Route, Notfallhilfe.

### 5.2 Zielgruppen

1. Hunde- und Katzenhalter in Möckmühl und erreichbarem Umland.
2. Bestandskunden mit Termin-, Öffnungszeiten- oder Notfallfrage.
3. Neukunden, die Leistungen, Vertrauen und Erreichbarkeit vergleichen.
4. Nutzer mit akuten Symptomen und hoher Zeitkritik.
5. Informationssuchende zu Vorsorge, Parasiten, Magen-Darm, Zähnen und saisonalen Risiken.

### 5.3 Positionierung und USP

Stärkste belegbare Differenzierung: persönliche lokale Versorgung plus mehrere diagnostische und operative Leistungen unter einer Praxisadresse, digitales Terminangebot und konkrete Notfallorientierung. Die sichtbare Aussage „25+ Jahre Erfahrung“ sollte mit einem nachvollziehbaren Startjahr oder einer Teamvita belegt werden, bevor sie breiter in Schema oder externe Profile übernommen wird.

### 5.4 Markensprache

Warm, direkt und beruhigend. Stellenweise zu werblich oder unpräzise, etwa „auf höchstem Niveau“, „modernste Medizintechnik“ und „alles aus einer Hand“. Besser sind belegbare Aussagen zu Ausstattung, Ablauf und Nutzen.

### 5.5 Customer Journey

1. Suche nach Praxis, Symptom, Leistung oder Notfall.
2. Sofortige Prüfung von Ort, Telefon, Sprechzeiten und Relevanz.
3. Vertrauensbildung über Team, Leistungen, Bewertungen und konkrete Erklärungen.
4. Aktion über Termin, Telefon, Formular oder Route.
5. Nach dem Besuch fehlen noch systematische Nachsorgeinhalte, Erinnerungen und klar zugeordnete Ratgeberlinks.

## 6. Technisches Audit

### 6.1 Architektur

Statische HTML-Seiten mit lokalem Tailwind-Build, eigenem CSS und Vanilla JavaScript. Vorteile: einfache Auslieferung, geringe Serverkomplexität und gute Crawlability. Nachteile: duplizierte Layouts, manuelle Metadatenpflege und fehlende Content-Templates.

### 6.2 Behobene Punkte

- Canonical auf jeder Hauptseite.
- `noindex,follow` für die Homepage-Dublette.
- XML-Sitemap und robots.txt.
- eindeutige Meta-Descriptions auf allen Seiten.
- Open Graph, Twitter Card und Theme Color.
- passendes JSON-LD ohne erfundene Bewertungen oder Preise.
- zwei iFrames mit beschreibendem `title`.
- doppelte H1 in Booking entfernt.
- Skip-Link, sichtbarer Fokus und Live-Region für Formularstatus.
- Heading-Reihenfolge der Footerbereiche korrigiert.
- Touchziele der Bewertungsnavigation auf mindestens 24 px erweitert.
- kritische Kontrastfehler korrigiert.
- lokales, 12,6 KB großes WebP-Logo statt 168 KB PNG im sichtbaren Layout.
- Favicon ergänzt; Konsolen-404 entfernt.
- externe Notfallbilder durch lokale Bilder ersetzt.
- feste Bilddimensionen auf wichtigen lokalen Medien.
- 404-Seite erstellt.
- Security Header und Asset-Caching für Vercel vorbereitet.
- Redirects für sichtbare HTML-Dubletten vorbereitet.

### 6.3 Offene technische Punkte

| Priorität | Befund | Wirkung | Empfehlung |
|---|---|---|---|
| P0 | Consent-Auswahl lädt externe Dienste nicht kontrolliert | Datenschutz- und Vertrauensrisiko | Google Calendar/Maps erst nach Einwilligung laden oder datensparsame Platzhalter nutzen; rechtlich prüfen lassen |
| P0 | Kontaktformular nutzt Google Forms mit `no-cors` und nimmt Erfolg an | Falsche Erfolgsmeldung möglich | serverseitigen Endpoint mit verifizierter Antwort und Spam-Schutz einsetzen |
| P0 | Booking-Slots sind lokal erzeugt, nicht mit Google-Verfügbarkeit synchron | Nutzer kann vermeintlich freien Slot wählen, der nicht verfügbar ist | entweder direkt Google Calendar nutzen oder echte Verfügbarkeits-API integrieren |
| P1 | Zehn Ratgebertexte teilen eine URL | schwache Indexierung und keine Deep Links | je Artikel eine URL mit eigener H1, Canonical, Datum, Autor und Links |
| P1 | Inline-`tailwind-config` ist als JSON deklariert, enthält aber JavaScript | ungültiger und unnötiger Block | Block auf allen Seiten entfernen, da kompiliertes CSS geladen wird; vorher visueller Regressionstest |
| P1 | Unbenutztes CSS und unminifiziertes eigenes JS | TBT und Payload | seitenweise CSS reduzieren, JS minifizieren und nicht benötigte Module bedingt laden |
| P1 | Google Calendar lädt reCAPTCHA und verhindert im Lab teils bfcache | Navigation und Main-Thread | Calendar click-to-load oder erst im sichtbaren Bereich nach Consent laden |
| P2 | Stale Duplikate unter `/assets` und `/assets/assets` | Deployment-Bloat, Wartungsrisiko | nach Backup und Redirect-Prüfung aus Repository entfernen |
| P2 | Externes Bild im Impressum | Drittanbieter-Abhängigkeit | lokal hosten oder durch echten Lageplan ersetzen |
| P2 | CSP fehlt | Schutz gegen Injection unvollständig | CSP nach Inventar aller Inline-Skripte und Google-Domains schrittweise im Report-Only-Modus einführen |

### 6.4 Statuscodes und Host

- `https://tierarztpraxis-möckmühl.de/` leitet permanent auf den kanonischen `www`-Host.
- Alle sieben Hauptseiten lieferten vor Änderung HTTP 200.
- `robots.txt`, `sitemap.xml` und `llms.txt` lieferten vor Änderung HTTP 404.
- Unbekannte URL lieferte HTTP 404; künftig wird die eigene `404.html` ausgeliefert.
- Lokale Dateiprüfung fand keine fehlenden internen Dateien oder Zielanker.

### 6.5 Core Web Vitals

Aktueller Mobile-Lab-Test auf lokaler statischer Auslieferung:

| Metrik | Wert | Bewertung |
|---|---:|---|
| FCP | 2,0 s | verbesserungsfähig |
| LCP | 3,2 s | verbesserungsfähig |
| TBT | 460 ms | verbesserungsfähig |
| CLS | 0 | gut |
| Performance | 78/100 | solide, aber nicht fertig |

INP ist eine Feldmetrik. Ohne reale Nutzerwerte aus CrUX oder Search Console ist keine belastbare INP-Aussage möglich. TBT ist nur ein Lab-Proxy.

Nächste Performance-Hebel:

1. Google Calendar erst nach Nutzeraktion laden.
2. Startseiten-JavaScript seitenweise teilen und minifizieren.
3. Tailwind-Ausgabe stärker purgen.
4. responsive `srcset`-Varianten für Hero- und Praxisbild erzeugen.
5. Produktionsmessung nach Vercel-Deployment durchführen; lokaler Python-Server besitzt keine produktionsnahen Cache-Header.

## 7. Accessibility-Audit

Automatisierter Lighthouse-Score nach Fixes: 100/100.

Behoben:

- iFrame-Namen.
- H1-Duplikat.
- Skip-Link und Main-Landmarks.
- Fokusdarstellung.
- Live-Status des Kontaktformulars.
- Kontrast in Notfallhinweis, Servicekarten, Footer und Popup.
- Touchzielgröße der Carousel-Punkte.
- Heading-Sprünge in Startseite und Footer.

Manuell noch zu testen:

1. Fokusfalle und Fokus-Rückgabe im Öffnungszeiten-, Termin- und Ratgeber-Modal.
2. Screenreader-Ansage beim Öffnen eines Ratgeberartikels.
3. Kalenderbedienung vollständig per Tastatur.
4. Formularfehler inline statt nur Browser-Validierung beziehungsweise `alert`.
5. Zoom bei 200 % und Reflow bei 320 CSS px.
6. Kontrast in allen Hover-, Active- und Disabled-Zuständen.
7. Sinnvolle Alternativtexte für dekorative und informative Bilder.

Automatisierte 100 Punkte sind kein WCAG-Konformitätsnachweis. Zielstandard sollte WCAG 2.2 AA sein.

## 8. Content-, OnPage- und EEAT-Audit

### 8.1 Stärken

- klare lokale Entity mit konsistentem Name, Adresse und Telefon.
- sichtbare Personen und Rollen.
- konkrete Leistungen statt reiner Image-Texte.
- Notfallseite mit Handlungsbezug.
- zehn Ratgeberthemen mit hoher Nutzerrelevanz.
- Impressum und Datenschutz gut erreichbar.
- Bewertungen als externe Nutzerstimmen erkennbar.

### 8.2 Schwächen

- Ratgebertexte ohne eigene URL, Veröffentlichungsdatum, Aktualisierungsdatum und fachliche Autor-/Reviewer-Zuordnung.
- Leistungsseite nennt Bereiche, beantwortet aber wenige Auswahlfragen: für welche Tiere, typischer Ablauf, Vorbereitung, Grenzen, Nachsorge.
- keine eigene Team-/Praxis-Seite mit Ausbildung, Berufserfahrung, Fortbildungen und Verantwortlichkeiten.
- keine sichtbare redaktionelle Richtlinie für medizinische Inhalte.
- keine Quellen an medizinischen Artikeln.
- generische Aussagen ohne Beleg.
- Startseite sehr lang; mehrere Ziele konkurrieren.

### 8.3 Duplicate Content und Kannibalisierung

- Homepage und `Startseite.html` waren identisch; technisch behoben.
- Kopien unter `/assets/*.html` werden per Redirect abgefangen.
- Modal-Artikel haben keine eigene Kannibalisierung, weil sie eine URL teilen; genau das verhindert aber gezielte Rankings.
- Themen „Notfall“ auf Startseite und Notfallseite sind sinnvoll, wenn die Startseite kurz zusammenfasst und konsequent auf die Detailseite verweist.

### 8.4 Lesbarkeit und Chunking

Ratgebertexte sind durch Zwischenüberschriften gut segmentiert. Für Search und LLM-Retrieval fehlt jedoch pro Thema ein stabiler Dokumentkontext. Jede Artikel-URL sollte vorne eine 40–70 Wörter lange Kurzantwort, danach Warnzeichen, mögliche Ursachen, Handlung bis zum Termin, Grenzen und fachliche Prüfung enthalten.

## 9. SEO-Audit

### 9.1 Technical und OnPage SEO

Nach Quick-Wins technisch stark. Priorität verschiebt sich von Tags zu Informationsarchitektur und Qualität. Titles und Descriptions sind eindeutig. Canonicals nutzen den tatsächlichen `www`-Host. Sitemap enthält nur kanonische Hauptseiten.

### 9.2 Local SEO

Wichtigste nächste Aufgaben außerhalb des Codes:

1. Google Business Profile vollständig prüfen: primäre Kategorie, Leistungen, Terminlink, Öffnungszeiten, Sonderöffnungszeiten, Bilder und Fragen.
2. Name, Adresse und Telefon exakt mit Website, Stadtverzeichnis, Kammer- und Branchenprofilen abgleichen.
3. Bewertungsprozess nach Behandlungen als neutralen, freiwilligen Hinweis gestalten; keine Gegenleistung.
4. lokale Seiten nur für echte Einzugsgebiete und mit eigenem Nutzen erstellen, nicht als Orts-Dubletten.
5. Search Console und Bing Webmaster Tools einrichten, Sitemap einreichen und Indexierung beobachten.

### 9.3 Image, Video, News und International SEO

- Image SEO: Alt-Texte vorhanden; responsive Größen fehlen teils. Dateinamen einiger Assets sind generisch oder enthalten Leerzeichen.
- Video SEO: nicht anwendbar, da keine Videos.
- News SEO: nicht anwendbar; Praxis ist kein News-Publisher.
- International SEO: hreflang nicht nötig, solange nur Deutsch angeboten wird.
- Voice/Zero Click: Öffnungszeiten, Telefon, Adresse und kurze Warnzeichen sind gut geeignet; klare Kurzantworten und sichtbare FAQ würden helfen.

### 9.4 OffPage-Hinweise

Backlinkprofil, Zitationen und lokale Rankings wurden mangels Search-Console-, Business-Profile- und Linkdaten nicht quantitativ bewertet. Ein seriöser OffPage-Score erfordert Exporte aus Search Console, Business Profile und einem Linkindex.

## 10. AI SEO und GEO

Google erklärt ausdrücklich, dass für AI Overviews und AI Mode dieselben SEO-Grundlagen gelten und keine spezielle AI-Schemaart nötig ist. `llms.txt` ist ein ergänzendes, nicht von Google erforderliches Discovery-Format. Deshalb liegt Priorität auf indexierbaren Seiten, klaren Fakten, internen Links und sichtbarem Content.

### 10.1 Verbesserte Machine Readability

- einheitliche kanonische Entity-ID `/#praxis`.
- `VeterinaryCare`, Adresse, Telefon, Öffnungszeiten, Team und WebSite als JSON-LD.
- vollständige AI- und Entity-Indizes.
- klare Quellenrangfolge und Grenzen in `llms-full.txt`.
- keine erfundenen Ratings, Preise, Geo-Koordinaten oder Qualifikationen.

### 10.2 Retrieval-Lücken

- Ratgeberartikel benötigen Einzel-URLs.
- Leistungsfragen brauchen eigene, zitierbare Absätze.
- Fakten sollten sichtbare Aktualisierungsdaten erhalten.
- Personen brauchen belastbare Biografien und fachliche Zuständigkeiten.
- medizinische Aussagen brauchen nachvollziehbare Quellen und Reviewer.
- keine Originaldaten oder Studien; für lokale GEO-Sichtbarkeit können eigene aggregierte, anonymisierte Praxisbeobachtungen nur nach rechtlicher und methodischer Prüfung veröffentlicht werden.

### 10.3 Bewertung nach Systemen

ChatGPT, Claude, Perplexity, Gemini, Copilot, Mistral und Meta AI unterscheiden sich in Index, Retrieval und Quellenanzeige. Universell wirksam sind:

1. frei crawlbarer Text.
2. eindeutige Entity-Beziehungen.
3. kurze direkte Antworten mit belastbarer Quelle.
4. stabile URLs.
5. konsistente lokale Daten.
6. fachlich geprüfte Aktualisierung.

Eine Aufnahme oder Zitierung kann nicht garantiert werden.

## 11. Schema-Audit

### 11.1 Implementiert

- `WebSite`
- `WebPage`
- `VeterinaryCare`
- `PostalAddress`
- `OpeningHoursSpecification`
- `ContactPoint`
- `Person`
- `Service`
- `ItemList`
- `CollectionPage`
- `BreadcrumbList`

### 11.2 Bewusst nicht implementiert

| Typ | Grund |
|---|---|
| `AggregateRating` | Durchschnitt und Anzahl nicht verifiziert; selbstbezogene LocalBusiness-Review-Snippets sind bei Google eingeschränkt |
| `Review` | sichtbare Zitate haben keine vollständigen strukturierten Primärdaten; kein Rich-Result-Versprechen |
| `FAQPage` | kein sichtbarer FAQ-Bereich; Markup ohne passende Inhalte wäre falsch |
| `Article` | Modaltexte besitzen keine eigenen URLs, Daten und belastbare Autorenangaben |
| `SearchAction` | Website besitzt keine Suchfunktion |
| `Offer`/`Product` | keine veröffentlichten Preise oder Produkte |
| `Event`, `Course`, `Recipe`, `HowTo`, `SoftwareApplication` | nicht zutreffend |
| `VideoObject` | keine Videos |

Schema soll sichtbaren Inhalt beschreiben, nicht fehlende Inhalte ersetzen.

## 12. UX- und Conversion-Audit

### 12.1 Stärken

- Notfall, Termin, Telefon und Route sind deutlich erkennbar.
- mobile Navigation vorhanden.
- Notfallfarbe unterscheidet kritische von regulären Aktionen.
- Social Proof ist sichtbar und als Google-Rezension gekennzeichnet.
- Kontaktformular enthält Labels und Datenschutz-Zustimmung.
- Öffnungszeiten stehen mehrfach an relevanten Stellen.

### 12.2 Conversion-Barrieren

1. Zwei Terminwege: eingebetteter Kalender und eigenständiger Slot-Assistent. Nutzer können nicht erkennen, welcher verbindlich ist.
2. Slot-Assistent zeigt statische Sprechstunden, keine tatsächliche Verfügbarkeit.
3. Kontaktformular kann Zustellung nicht bestätigen.
4. Termin-Popup erscheint nach fünf Sekunden und kann in einer frühen Orientierungsphase stören.
5. Sehr lange Homepage erhöht Weglänge auf Mobilgeräten.
6. „Termin anfragen“, „Termin buchen“ und „Termin vereinbaren“ sind drei Labels für denselben Intent.
7. Leistungs-Flipcards verstecken wichtige Texte hinter Interaktion.
8. Ratgeber-Modals verhindern Teilen, Zurück-Navigation und direkten Sucheinstieg.

### 12.3 Empfohlener Zielzustand

- Ein verbindlicher Terminweg: direkter Google-Kalender oder echte API, nicht beide.
- Ein CTA-Label pro Intent: „Termin buchen“.
- Kontaktformular mit echtem Server-Response.
- Popup nur nach Intent-Signal oder gar nicht; stattdessen persistenter mobiler Termin-/Anrufbereich.
- Service-Texte sichtbar und nicht nur auf Rückseiten.
- Ratgeber auf Einzel-URLs.

## 13. Keyword-, Topic- und Entity-Strategie

### 13.1 Keyword-Cluster

| Cluster | Suchintention | Zielseite |
|---|---|---|
| Tierarzt Möckmühl, Tierarztpraxis Möckmühl | lokal/transaktional | Startseite |
| Tierarzt Notdienst Möckmühl, Tier Notfall Möckmühl | dringend | Notfall |
| Tierarzt Termin Möckmühl, Tierarzt online Termin | transaktional | Booking oder zentraler Kalender |
| Tierarzt Labor/Ultraschall/Röntgen Möckmühl | kommerziell | einzelne Leistungsseiten |
| Tierarzt Zahnheilkunde Möckmühl | kommerziell | Zahnheilkunde-Landingpage |
| Hautprobleme Hund/Katze Tierarzt | problem-aware | Dermatologie plus Ratgeber |
| Hund Durchfall, Katze frisst nicht, Tier erbricht | informativ/dringend | einzelne Ratgeberartikel |
| Impfungen Hund/Katze, Zecken, Flöhe, Wurmkur | Vorsorge | einzelne Ratgeberartikel |

Keywordvolumen und Wettbewerb wurden nicht erfunden. Für Priorisierung sind Search-Console-Daten und ein Keywordtool nötig.

### 13.2 Topic Cluster

- Praxis und lokales Vertrauen.
- Vorsorge und Impfungen.
- Diagnostik und Bildgebung.
- Haut und Allergien.
- Zahnmedizin.
- Chirurgie und Vor-/Nachsorge.
- Parasiten.
- Magen-Darm und Futteraufnahme.
- saisonale Gefahren.
- Notfall und Triage.

### 13.3 Entity Cluster

- Praxis, Team, Möckmühl, Adresse, Telefon.
- Tierarten: Hund, Katze, Kleintiere; Umfang für Heimtiere muss verifiziert werden.
- Leistungen und dazugehörige Symptome.
- externe Notfallkliniken.
- regionale Institutionen: Stadt Möckmühl, Landestierärztekammer oder Notdienstorganisation nur nach verifizierter Beziehung.

## 14. Fehlende Seiten und Inhalte

Priorisierte Landingpages:

1. Labor und Blutuntersuchung.
2. Ultraschall.
3. Röntgen.
4. Dermatologie und Allergiediagnostik.
5. Zahnheilkunde.
6. Weichteilchirurgie.
7. Vorsorge und Impfungen.
8. Kennzeichnung und Heimtierausweis, sofern angeboten.
9. Team und Praxis mit Qualifikationen.
10. Neukunden: Ablauf des ersten Termins.

FAQ-Fragen, nur mit fachlich geprüften sichtbaren Antworten:

1. Behandelt die Praxis neue Patienten?
2. Welche Tierarten werden behandelt?
3. Wie kurzfristig sind Termine möglich?
4. Was soll ich zum ersten Termin mitbringen?
5. Wie erkenne ich einen tierärztlichen Notfall?
6. Muss ich vor einem Notfallbesuch anrufen?
7. Welche Zahlungsarten werden akzeptiert?
8. Wie bereite ich mein Tier auf Blutabnahme, Ultraschall oder Operation vor?
9. Werden Hausbesuche angeboten?
10. Ist die Praxis barrierefrei und gibt es Parkmöglichkeiten?

Die letzten vier Punkte sind derzeit nicht verifiziert und dürfen erst nach Praxisfreigabe beantwortet werden.

Glossar-Kandidaten: Anamnese, Blutbild, Allergiediagnostik, Ultraschall, Röntgen, Mikrochip, Zahnstein, Weichteilchirurgie, Kastration, Kotprobe, Parasitenprophylaxe.

## 15. Wettbewerb

### 15.1 Beobachtbare Wettbewerbslandschaft

- Die offizielle Stadtseite listet Dr. Buss und eine Mobile Pferdepraxis in Möckmühl. Die Pferdepraxis adressiert ein anderes Kernsegment und ist nur teilweise direkter Wettbewerb.
- Pferdepraxis Häussermann in Bad Friedrichshall kommuniziert Pferde- und Kleintierpraxis, lange Historie, Öffnungszeiten und ein breites Leistungsfeld. Sie ist regionaler Vergleich für fachliche Tiefe.
- Naturheilkunde für 4 Pfoten in Neuenstadt ist keine Tierarztpraxis, konkurriert aber bei informations- und beratungsorientierten Tierhaltern mit Online-Termin und Fragebögen.
- Ein Neuenstädter Tierarzt ist über Verzeichnisse auffindbar; mangels belastbarer offizieller Website wurde kein tiefer Websitevergleich vorgenommen.

### 15.2 Vergleich

| Faktor | Dr. Buss | Beobachtete Alternativen |
|---|---|---|
| lokale Eindeutigkeit | stark in Möckmühl | mobile Pferdepraxis anderes Segment |
| Online-Termin | vorhanden | teils vorhanden |
| Notfallorientierung | sehr sichtbar | unterschiedlich tief |
| Ratgeberbreite | stark, zehn Themen | meist schwächer sichtbar |
| fachliche Biografien | dünn | Häussermann kommuniziert Historie/Spezialisierung stärker |
| technische Suchsignale | nach Fix stark | nicht vollständig technisch geprüft |
| individuelle Service-Seiten | fehlen | teils vorhanden |

### 15.3 Differenzierungschance

„Verständliche Kleintiermedizin vor Ort mit direkter Diagnostik und klaren nächsten Schritten.“ Diese Position lässt sich mit konkreten Abläufen, Teamkompetenz, transparenten Grenzen und lokaler Erreichbarkeit belegen. Keine nicht belegbaren Überlegenheitsclaims verwenden.

### 15.4 Grenzen des Vergleichs

Keine personalisierten Google-Local-Pack-Rankings, Bewertungszahlen, Preise oder Keywordvolumen wurden als Fakt übernommen. Für einen quantitativen Benchmark sind definierter Radius, Inkognito-Grid-Messung, Business-Profile-Daten und Search Console erforderlich.

## 16. Top 20 Probleme

| Nr. | Problem | Impact | Status |
|---:|---|---|---|
| 1 | Drittanbieter laden ohne wirksame Consent-Steuerung | Recht/Trust | offen |
| 2 | Formular meldet Versand ohne Bestätigung | Conversion/Trust | offen |
| 3 | Booking zeigt keine echte Verfügbarkeit | Conversion | offen |
| 4 | Ratgeberartikel ohne Einzel-URLs | SEO/AI | offen |
| 5 | Canonicals fehlten | SEO | behoben |
| 6 | Sitemap fehlte | SEO | behoben |
| 7 | robots.txt fehlte | SEO | behoben |
| 8 | Strukturierte Daten fehlten | SEO/Entity | behoben |
| 9 | Social-Metadaten fehlten | Sharing/Trust | behoben |
| 10 | Homepage-Dubletten crawlbar | SEO | Redirect vorbereitet |
| 11 | Meta-Descriptions auf vier Seiten fehlten | CTR | behoben |
| 12 | iFrames ohne Namen | Accessibility | behoben |
| 13 | Booking mit zwei H1 | Semantik | behoben |
| 14 | Kontrastfehler | Accessibility | behoben |
| 15 | Carousel-Ziele zu klein | Mobile/A11y | behoben |
| 16 | Logo massiv überdimensioniert | Performance | behoben |
| 17 | ungültiger Tailwind-Konfigurationsblock | Qualität | offen |
| 18 | ungenutztes CSS und Google-JS belasten TBT | Performance | offen |
| 19 | medizinische Inhalte ohne Autor/Reviewdatum/Quellen | EEAT/GEO | offen |
| 20 | keine Search-Console-/CrUX-Daten | Messbarkeit | offen |

## 17. Top 20 Chancen

1. Ratgeber in zehn indexierbare Artikel aufteilen.
2. sechs Kernleistungen als Landingpages ausbauen.
3. Teamkompetenz mit verifizierten Profilen belegen.
4. einen verbindlichen Terminfluss schaffen.
5. Kontaktformular serverseitig bestätigen.
6. Consent technisch korrekt steuern.
7. Google Business Profile vollständig synchronisieren.
8. kurze, zitierbare Antworten am Anfang jeder Wissensseite.
9. sichtbare FAQ mit fachlicher Freigabe.
10. Autoren- und Reviewprozess für medizinische Inhalte.
11. Search Console, Bing Webmaster Tools und Sitemap-Einreichung.
12. Conversion-Events für Anruf, Termin, Route und Formular.
13. mobile persistente Kontaktleiste testen.
14. Service-Ratgeber-Verlinkung als Topic Cluster.
15. saisonale Inhalte rechtzeitig aktualisieren.
16. Bildvarianten und `srcset` für mobile Geräte.
17. Calendar click-to-load für Leistung und Datenschutz.
18. lokale Erwähnungen bei Stadt, Kammer und seriösen Partnern konsistent halten.
19. echte Praxisfragen aus Telefon und Empfang in Content überführen.
20. jährlicher Fakten-, Notfall- und Schema-Review.

## 18. Maßnahmenplan

### 18.1 Sofortmaßnahmen

Bereits erledigt:

- Meta, Canonical, Open Graph, robots, Sitemap, Schema.
- AI-Dateien und Maps.
- grundlegende Accessibility- und Bild-Fixes.
- 404, Redirect- und Header-Konfiguration.

Vor Veröffentlichung prüfen:

1. Praxis bestätigt Namen, Teamrollen, Öffnungszeiten, E-Mail, Telefon und alle Leistungen.
2. Notfallnummern und Klinikinformationen werden tagesaktuell verifiziert.
3. Vercel-Preview prüfen; danach Deployment.
4. Rich Results Test und Schema Validator mit Live-URLs ausführen.

### 18.2 30-Tage-Plan

1. Consent Management technisch und juristisch klären.
2. Formular auf verifizierbaren Endpoint umstellen.
3. einen Terminweg auswählen und Booking-Dublette entfernen oder integrieren.
4. Search Console und Bing Webmaster Tools verbinden.
5. Sitemap einreichen und URL-Prüfung für fünf Kernseiten starten.
6. Ratgeberartikel 1–3 auf Einzel-URLs migrieren.
7. Teamdaten und redaktionelle Verantwortlichkeit freigeben.
8. Analytics nur mit passender Einwilligung; vier Conversion-Events definieren.

### 18.3 90-Tage-Plan

1. alle zehn Ratgeberartikel migrieren.
2. Labor, Ultraschall, Röntgen, Dermatologie, Zahnheilkunde und Chirurgie als Seiten veröffentlichen.
3. sichtbare Breadcrumbs ergänzen.
4. FAQ nach Praxisfreigabe veröffentlichen und nur dann markieren.
5. CSS/JS auf Seitenbedarf reduzieren.
6. mobile/desktop reale CWV in Search Console auswerten.
7. Business Profile und lokale Zitationen abgleichen.
8. CTR, Terminklick, Anruf, Route und Formular nach Landingpage auswerten.

### 18.4 12-Monats-Themenplan

| Monat | Schwerpunkt | Hauptinhalt |
|---|---|---|
| 1 | Neukunden | erster Termin, Unterlagen, Transport und Ablauf |
| 2 | Vorsorge | Impfstatus bei Hund und Katze fachlich aktualisieren |
| 3 | Zahngesundheit | Warnzeichen, Untersuchung und Nachsorge |
| 4 | Parasiten | Zecken, Flöhe, Kotprobe und individuelle Prophylaxe |
| 5 | Haut | Juckreiz, Allergiediagnostik und Terminvorbereitung |
| 6 | Sommer | Hitzeschutz und klare Notfallzeichen |
| 7 | Seniorentiere | Vorsorgefragen und beobachtbare Veränderungen |
| 8 | Jungtiere | Eingewöhnung, Kennzeichnung und Vorsorgeplan |
| 9 | Trinken/Urin | Beobachtung, Dokumentation und Warnzeichen |
| 10 | Operation | Vorbereitung, Abholung und Nachsorge |
| 11 | Feiertage | typische Gefahren und erreichbare Notfallwege |
| 12 | Jahresreview | Öffnungszeiten, Notdienst, Team, Leistungen und Artikel aktualisieren |

Jeder Inhalt erhält verantwortlichen fachlichen Reviewer, Veröffentlichungsdatum, letztes Reviewdatum, Quellen und eine passende interne Verlinkung.

## 19. Produktionsdateien

- [`robots.txt`](../robots.txt)
- [`sitemap.xml`](../sitemap.xml)
- [`llms.txt`](../llms.txt)
- [`llms-full.txt`](../llms-full.txt)
- [`ai-sitemap.md`](../ai-sitemap.md)
- [`entity-index.md`](../entity-index.md)
- [`content-index.md`](../content-index.md)
- [`knowledge-index.md`](../knowledge-index.md)
- [`website-tree.md`](../website-tree.md)
- [`internal-link-structure.md`](../internal-link-structure.md)
- `vercel.json` mit Redirects, Security Headern und Caching
- JSON-LD inline in Startseite, Leistungen, Notfall, Ratgeber und Booking
- `404.html`

## 20. Quellen und aktuelle Best Practices

- Google Search Central, AI Features: https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central, Generative AI Guide: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Central, LocalBusiness Structured Data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google Search Central, Organization Structured Data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google Search Central, Structured Data Introduction: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Central, Robots Meta: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C Technique H64 für iFrame-Titel: https://www.w3.org/WAI/WCAG22/Techniques/html/H64
- Stadt Möckmühl, Tierärzte: https://www.moeckmuehl.de/leben-wohnen/gesundheit-pflege/tieraerzte
- Pferdepraxis Häussermann: https://www.pferdepraxishaeussermann.de/
- Naturheilkunde für 4 Pfoten: https://www.4pfotenpraxis.de/
- Lighthouse `NO_LCP` Issue: https://github.com/GoogleChrome/lighthouse/issues/16934

## 21. Nicht bewertbare Daten

Folgende Angaben fehlen und wurden nicht angenommen:

- Search Console, Analytics, CrUX und Conversion-Raten.
- Google Business Profile-Zugriff und vollständige Bewertungsdaten.
- Keywordvolumen, Rank-Grid und Backlinkprofil.
- verifizierte Praxisgründung, Fachbezeichnungen, Mitgliedschaften und Zertifikate.
- tatsächliche Terminverfügbarkeit.
- Zahlungsarten, Barrierefreiheit der Praxisräume, Parken, Hausbesuche und vollständiger Tierartenumfang.
- juristische Freigabe der Datenschutztexte und Consent-Implementierung.

Diese Daten sind Voraussetzung für die nächste belastbare Optimierungsrunde.
