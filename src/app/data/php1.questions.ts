import { Question } from '../models/question';

export const PHP1_QUESTIONS: Question[] = [
  // ---------- THEORY (18) ----------
  { type: 'theory', question: 'Care este relația corectă dintre Internet și World Wide Web?', options: [
    'Internetul este doar un alt nume pentru Web',
    'Web-ul este un serviciu disponibil prin Internet, alături de poșta electronică, transferul de fișiere etc.',
    'Internetul este un serviciu oferit de Web',
    'Web-ul este rețeaua fizică de cabluri, iar Internetul sunt paginile'], correct: 1,
    explanation: 'Internetul este infrastructura globală care conectează dispozitive, iar Web-ul (pagini legate prin hyperlinkuri, accesate cu browserul) este doar unul dintre serviciile care o folosesc.' },
  { type: 'theory', question: 'Care dintre următoarele este un serviciu disponibil pe Internet, dar NU face parte din World Wide Web?', options: [
    'O pagină cu orarul unui eveniment',
    'Un formular de contact deschis în browser',
    'Poșta electronică (e-mail)',
    'Un hyperlink către o imagine'], correct: 2,
    explanation: 'E-mailul este un serviciu separat de Internet. Paginile, formularele și hyperlinkurile sunt resurse ale Web-ului.' },
  { type: 'theory', question: 'Ce este un server, conform lecției?', options: [
    'Un sistem hardware sau software care oferă servicii și resurse altor aplicații sau dispozitive, numite clienți',
    'Orice program care afișează pagini web pe ecran',
    'Doar calculatorul pe care lucrează utilizatorul',
    'Un limbaj de programare executat în browser'], correct: 0,
    explanation: 'Serverul oferă servicii (pagini web, date, e-mail) clienților care le cer. Poate fi hardware sau software.' },
  { type: 'theory', question: 'În modelul client–server, când tastezi www.google.com în browser, cine este clientul?', options: [
    'Serverele Google',
    'Baza de date a Google',
    'Browserul, care trimite cererea',
    'Router-ul de acasă'], correct: 2,
    explanation: 'Clientul este programul care solicită date. Browserul trimite request-ul, iar serverul răspunde cu un response.' },
  { type: 'theory', question: 'Care este ordinea corectă a pașilor într-o interacțiune client–server?', options: [
    'Serverul trimite răspunsul, browserul trimite cererea, serverul procesează cererea',
    'Browserul trimite cererea, serverul o procesează, serverul trimite răspunsul, browserul afișează rezultatul',
    'Serverul procesează cererea, browserul trimite cererea, browserul afișează rezultatul',
    'Browserul afișează pagina, apoi trimite cererea către server'], correct: 1,
    explanation: 'Fluxul este: request de la client, procesare pe server, response, afișare în browser.' },
  { type: 'theory', question: 'Care dintre elementele de mai jos poate face parte dintr-un răspuns HTTP, dar NU face parte dintr-o cerere HTTP?', options: [
    'Metoda HTTP (de exemplu GET)',
    'Codul de stare',
    'Antetele',
    'Parametrii'], correct: 1,
    explanation: 'Codul de stare (de exemplu 200 sau 404) este trimis de server în răspuns. Metoda, parametrii și antetele apar în cerere (antetele apar și în răspuns).' },
  { type: 'theory', question: 'Pentru adresa https://universitate.md/studenti/profil?id=25, ce reprezintă „id=25”?', options: [
    'Protocolul',
    'Domeniul',
    'Calea către resursă',
    'Un parametru trimis serverului'], correct: 3,
    explanation: 'După semnul ? urmează parametrii. Aici serverul primește parametrul id cu valoarea 25. Protocolul este https, domeniul universitate.md, iar calea /studenti/profil.' },
  { type: 'theory', question: 'În adresa https://universitate.md/studenti/profil?id=25, ce reprezintă „/studenti/profil”?', options: [
    'Calea către resursa cerută de pe server',
    'Protocolul de comunicare',
    'Numele domeniului',
    'Valoarea parametrului'], correct: 0,
    explanation: 'Calea indică resursa cerută pe server. Protocolul este https, domeniul universitate.md.' },
  { type: 'theory', question: 'Care afirmație despre diferența dintre o pagină web și un site web este corectă?', options: [
    'Pagina web este o colecție de site-uri',
    'Pagina web este un document individual accesibil printr-un URL, iar site-ul este o colecție de pagini și resurse, de regulă pe același domeniu',
    'Site-ul web se accesează prin HTTP, iar pagina web doar prin DNS',
    'Nu există nicio diferență, termenii sunt identici'], correct: 1,
    explanation: 'Site-ul este un ansamblu organizat de pagini și resurse ale aceluiași domeniu; pagina este un singur document.' },
  { type: 'theory', question: 'Un site are paginile https://exemplu.com/blog/index.html și https://exemplu.com/proiecte/index.html. Ce se poate spune despre ele?', options: [
    'Sunt greșite, deoarece două pagini nu pot avea același nume',
    'Aparțin unor site-uri diferite, pentru că au același nume',
    'Sunt pagini diferite, deoarece se află în foldere diferite, deși au același nume de fișier',
    'Serverul le va afișa pe amândouă la fel'], correct: 2,
    explanation: 'Calea completă diferă, deci sunt două resurse distincte ale aceluiași site.' },
  { type: 'theory', question: 'Care este caracteristica unei pagini web dinamice?', options: [
    'Conține doar HTML și CSS și arată la fel pentru toți',
    'Nu poate folosi o bază de date',
    'Conținutul este generat la cerere și poate diferi în funcție de utilizator, acțiuni sau date de pe server',
    'Este întotdeauna mai rapidă decât o pagină statică'], correct: 2,
    explanation: 'Pagina dinamică se construiește la cerere pe server (de exemplu cu PHP) și poate folosi o bază de date.' },
  { type: 'theory', question: 'Care dintre următoarele pagini este cel mai probabil STATICĂ?', options: [
    'Inbox-ul din Gmail',
    'Feed-ul de pe Instagram',
    'Pagina de autentificare care verifică parola în baza de date',
    'Un CV online simplu, fără formulare'], correct: 3,
    explanation: 'Un CV online afișează același conținut fix pentru toți. Celelalte se schimbă în funcție de utilizator și de datele din server.' },
  { type: 'theory', question: 'De ce este nevoie de modificări manuale pe fiecare pagină atunci când se schimbă datele unui produs pe un site static?', options: [
    'Pentru că browserul nu poate citi datele din baza de date',
    'Pentru că informația este scrisă direct în fiecare pagină, nu într-o bază de date centrală',
    'Pentru că HTTP nu permite actualizarea paginilor',
    'Pentru că serverul web nu acceptă fișiere noi'], correct: 1,
    explanation: 'La paginile statice conținutul e fix în fișier. La cele dinamice, informațiile se păstrează într-o bază de date centrală și paginile se generează din ea.' },
  { type: 'theory', question: 'Care dintre afirmațiile despre programarea client-side este corectă?', options: [
    'Codul se execută pe server, iar utilizatorul nu îl vede',
    'Se folosește pentru a accesa direct baza de date',
    'Codul (HTML, CSS, JavaScript) ajunge în browser și se execută acolo, construind interfața',
    'Folosește exclusiv limbajul PHP'], correct: 2,
    explanation: 'Codul client-side este trimis browserului și rulat acolo; nu accesează direct baza de date.' },
  { type: 'theory', question: 'De ce utilizatorul NU poate vedea codul PHP al unei pagini, ci doar rezultatul lui (HTML)?', options: [
    'Pentru că browserul ascunde automat codul PHP',
    'Pentru că PHP este criptat în timpul transmiterii',
    'Pentru că PHP se execută pe server, iar către browser ajunge doar rezultatul generat',
    'Pentru că PHP funcționează doar offline'], correct: 2,
    explanation: 'La programarea server-side codul sursă rămâne pe server; clientul primește doar ieșirea (HTML, JSON etc.).' },
  { type: 'theory', question: 'Ce este un host?', options: [
    'Orice calculator sau dispozitiv conectat la o rețea, cu o adresă unică (IP), care poate comunica cu alte dispozitive',
    'Doar un server web care găzduiește site-uri',
    'Un program de navigare pe Internet',
    'Un limbaj folosit pentru formulare'], correct: 0,
    explanation: 'Laptopul, telefonul, imprimanta de rețea sau serverul web sunt toate hosturi, fiindcă au adresă IP în rețea.' },
  { type: 'theory', question: 'Care este motivul principal pentru care serverul folosește cookie-uri într-o sesiune de autentificare?', options: [
    'HTTP este stateless, adică nu reține informații între cereri, iar cookie-ul permite serverului să recunoască utilizatorul',
    'Cookie-urile accelerează conexiunea la Internet',
    'Cookie-urile conțin parola în clar, pe care serverul o verifică de fiecare dată',
    'Cookie-urile înlocuiesc baza de date a serverului'], correct: 0,
    explanation: 'Fără cookie-ul de sesiune (de exemplu session_id=123abc), utilizatorul ar trebui să introducă parola la fiecare pagină.' },
  { type: 'theory', question: 'Alice s-a autentificat pe un site. Care este ordinea corectă a pașilor legați de cookie?', options: [
    'Browserul creează cookie-ul, serverul îl stochează, serverul îl trimite înapoi',
    'Serverul creează cookie-ul (Set-Cookie), browserul îl stochează, browserul îl trimite automat la cererile următoare',
    'Browserul stochează cookie-ul, apoi serverul îl creează, apoi Alice se autentifică',
    'Serverul trimite parola, browserul o stochează și o retrimite manual'], correct: 1,
    explanation: 'Serverul trimite Set-Cookie, browserul îl păstrează și îl atașează automat la cererile către același site.' },

  // ---------- ANALYSIS (4) ----------
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$nume = "Ana";
echo "Salut, " . $nume . "!";`, options: ['Salut, $nume!', 'Salut, Ana!', 'Salut,Ana!', 'Salut, . Ana . !'], correct: 1,
    explanation: 'Operatorul . concatenează textele; $nume este înlocuit cu valoarea "Ana".' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$oras = "Chișinău";
echo "Oraș: $oras";
echo ' | ';
echo 'Oraș: $oras';`, options: ['Oraș: Chișinău | Oraș: Chișinău', 'Oraș: $oras | Oraș: $oras', 'Oraș: $oras | Oraș: Chișinău', 'Oraș: Chișinău | Oraș: $oras'], correct: 3,
    explanation: 'În ghilimele duble variabila este înlocuită cu valoarea; în ghilimele simple $oras rămâne text literal.' },
  { type: 'analysis', question: 'Fișierul de mai jos este rulat de serverul web. Ce text HTML primește browserul?', code: `<h1>Rezultat</h1>
<p>Total: <?php echo 2 + 3; ?> lei</p>
<?php echo "<p>Gata</p>"; ?>`, options: [
    '<h1>Rezultat</h1>\n<p>Total: 2 + 3 lei</p>\n<p>Gata</p>',
    '<h1>Rezultat</h1>\n<p>Total: 5 lei</p>\n<p>Gata</p>',
    '<h1>Rezultat</h1>\n<p>Total: <?php echo 2 + 3; ?> lei</p>\n<?php echo "<p>Gata</p>"; ?>',
    '<h1>Rezultat</h1>\n<p>Total: 5 lei</p>\n"<p>Gata</p>"'], correct: 1,
    explanation: 'Serverul execută blocurile PHP și le înlocuiește cu ieșirea lor; HTML-ul din afara lor rămâne neschimbat. Browserul nu vede niciodată codul PHP.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$pret = 4;
echo "Total: " . $pret + 6;`, options: ['Total: 46', 'Total: 10', 'Total: 4 + 6', 'Total: 6'], correct: 1,
    explanation: 'În PHP 8 operatorul + are prioritate mai mare decât punctul, deci se calculează mai întâi 4 + 6 = 10 și apoi se concatenează cu "Total: ".' },

  // ---------- FILL (4) ----------
  { type: 'fill', question: 'Completează codul ca să afișeze titlul <h1>Salut, Ana</h1> folosind variabila $nume.', code: `<?php
$nume = "Ana";
____ "<h1>Salut, " ____ $nume ____ "</h1>";`, blanks: [['echo', 'print'], ['.'], ['.']],
    explanation: 'echo afișează textul, iar operatorul . concatenează părțile.' },
  { type: 'fill', question: 'Completează codul ca pagina să afișeze numele produsului și dublul prețului, inserând PHP în HTML.', code: `<?php
$produs = "Laptop";
$pret = 3000;
____
<p>Produs: <?php echo ____; ?></p>
<p>Preț: <?php ____ $pret * 2; ?></p>`, blanks: [['?>'], ['$produs'], ['echo', 'print']],
    explanation: 'Blocul PHP se închide cu ?>, apoi variabilele se afișează în HTML cu echo.' },
  { type: 'fill', question: 'Completează codul ca să afișeze „Majoră” dacă vârsta este cel puțin 18, altfel „Minoră”, urmat de vârstă.', code: `<?php
$varsta = 17;
____ ($varsta >= 18) {
    echo "Majoră";
} ____ {
    echo "Minoră";
}
echo "<br>Vârsta: " ____ $varsta;`, blanks: [['if'], ['else'], ['.']],
    explanation: 'if verifică condiția, else se execută în caz contrar, iar punctul concatenează textul cu variabila.' },
  { type: 'fill', question: 'Completează codul ca pagina dinamică să afișeze un mesaj în funcție de oră: dimineața (înainte de 12), ziua (înainte de 18), altfel seara.', code: `<?php
$ora = 14;
if ($ora < 12) {
    $mesaj = "Bună dimineața";
} ____ ($ora < 18) {
    $mesaj = "Bună ziua";
} else {
    $mesaj = "Bună seara";
}
____ ____;`, blanks: [['elseif', 'else if'], ['echo', 'print'], ['$mesaj']],
    explanation: 'elseif adaugă o a doua condiție; echo afișează mesajul ales.' },
];
