import { Question } from '../models/question';

export const PHP1B_QUESTIONS: Question[] = [
  // ---------- THEORY (18) ----------
  { type: 'theory', question: 'Care este rolul unui server de baze de date (de exemplu MySQL sau PostgreSQL)?', options: [
    'Afișează pagini web direct în browser',
    'Răspunde la interogări și returnează date',
    'Trimite și primește mesaje de poștă electronică',
    'Execută codul HTML și CSS al paginii'], correct: 1,
    explanation: 'Serverul de baze de date primește interogări de la alte aplicații (de exemplu de la un script PHP) și returnează datele cerute.' },
  { type: 'theory', question: 'Apache și Nginx sunt exemple de:', options: [
    'Limbaje de programare client-side',
    'Servere de baze de date',
    'Browsere web',
    'Servere web'], correct: 3,
    explanation: 'Apache și Nginx sunt servere web: răspund la cererile browserelor cu pagini web. MySQL și PostgreSQL sunt servere de baze de date.' },
  { type: 'theory', question: 'O aplicație de poștă electronică de pe telefon cere de la furnizor mesajele noi. Cum se descrie corect situația?', options: [
    'Aplicația este clientul, iar serverul de e-mail este cel care răspunde',
    'Aplicația este serverul, iar furnizorul este clientul',
    'Niciuna dintre părți nu este client, pentru că nu se folosește browserul',
    'Clientul poate fi doar un browser web'], correct: 0,
    explanation: 'Clientul este orice program sau dispozitiv care solicită servicii sau date de la un server, nu numai browserul.' },
  { type: 'theory', question: 'Un utilizator completează un formular și apasă „Trimite”. Unde ajung datele introduse?', options: [
    'Rămân doar în browser și nu sunt transmise',
    'Sunt trimise în răspunsul serverului',
    'Sunt trimise serverului în cererea HTTP',
    'Sunt scrise direct în baza de date de către browser'], correct: 2,
    explanation: 'Datele introduse de utilizator fac parte din cerere (alături de adresa resursei, metodă, parametri și antete). Serverul le procesează și apoi trimite un răspuns.' },
  { type: 'theory', question: 'Ce poate conține un răspuns HTTP trimis de server?', options: [
    'Doar cod HTML',
    'Doar un cod de stare',
    'Doar imagini',
    'Cod de stare, antete și conținut precum HTML, JSON, imagini sau fișiere'], correct: 3,
    explanation: 'Răspunsul include codul de stare și antete, iar corpul poate fi HTML, JSON, imagini sau alte fișiere.' },
  { type: 'theory', question: 'Care dintre următoarele limbaje sunt folosite pentru programarea server-side?', options: [
    'HTML, CSS și JavaScript',
    'PHP, Python, Java și C#',
    'Doar CSS și PHP',
    'Doar HTML și Java'], correct: 1,
    explanation: 'HTML, CSS și JavaScript construiesc interfața în browser (client-side). PHP, Python, Java și C# rulează pe server și procesează datele.' },
  { type: 'theory', question: 'De ce codul scris în browser (client-side) nu poate accesa direct baza de date a unui site?', options: [
    'Pentru că rulează la utilizator, iar accesul la baza de date se face prin codul care rulează pe server',
    'Pentru că JavaScript nu poate afișa date',
    'Pentru că baza de date poate fi folosită doar de HTML',
    'Pentru că browserul nu are conexiune la Internet'], correct: 0,
    explanation: 'Codul client-side nu accesează direct baza de date; serverul (de exemplu cu PHP) face această legătură și trimite clientului doar rezultatul.' },
  { type: 'theory', question: 'Ce se întâmplă cu codul sursă într-o aplicație server-side?', options: [
    'Este trimis integral browserului, unde se execută',
    'Rămâne pe server, iar clientul primește doar rezultatul execuției',
    'Este copiat pe calculatorul utilizatorului pentru a funcționa offline',
    'Este afișat utilizatorului în fereastra de instrumente a browserului'], correct: 1,
    explanation: 'La programarea server-side codul sursă rămâne pe server. La programarea client-side, codul ajunge în browser.' },
  { type: 'theory', question: 'Care dintre instrumentele de mai jos este necesar pentru a rula local o aplicație PHP?', options: [
    'Doar un editor de imagini',
    'Un server web cu interpretor PHP și un browser pentru testare',
    'Doar un server de e-mail',
    'Un program de mesagerie instantanee'], correct: 1,
    explanation: 'Fișierele PHP sunt executate de un server web cu interpretor PHP, iar rezultatul se vede într-un browser. Pentru scris cod este util și un editor.' },
  { type: 'theory', question: 'Care afirmație descrie corect o pagină web statică?', options: [
    'Conținutul este generat diferit pentru fiecare utilizator',
    'Folosește obligatoriu PHP și o bază de date',
    'Procesează pe server datele introduse de utilizator',
    'Afișează același conținut fix pentru toți și nu necesită bază de date'], correct: 3,
    explanation: 'Pagina statică este scrisă în HTML și CSS și arată la fel pentru toți vizitatorii. Pagina dinamică poate procesa date pe server și poate folosi o bază de date.' },
  { type: 'theory', question: 'De ce este pagina de autentificare, care verifică email-ul și parola în baza de date, o pagină dinamică?', options: [
    'Pentru că folosește culori diferite',
    'Pentru că este scrisă doar în HTML',
    'Pentru că serverul procesează datele introduse și generează un răspuns care depinde de ele',
    'Pentru că nu are nevoie de server'], correct: 2,
    explanation: 'Rezultatul (acces permis sau respins, informații personalizate) depinde de datele trimise, deci conținutul este generat la cerere de server.' },
  { type: 'theory', question: 'Care dintre informațiile de mai jos este potrivită pentru a fi păstrată într-un cookie?', options: [
    'Istoricul complet al comenzilor utilizatorului',
    'Un identificator de sesiune, de exemplu session_id=123abc',
    'Toate rolurile și preferințele detaliate ale utilizatorului',
    'Datele complete ale bazei de date'], correct: 1,
    explanation: 'Cookie-urile sunt limitate ca dimensiune și vizibile utilizatorului, deci conțin doar informații esențiale precum un ID de sesiune. Datele complexe rămân pe server.' },
  { type: 'theory', question: 'Cum ajunge cookie-ul de sesiune înapoi la server la fiecare cerere nouă către același site?', options: [
    'Utilizatorul îl introduce manual de fiecare dată',
    'Serverul îl cere printr-o întrebare separată înainte de fiecare pagină',
    'Browserul îl trimite automat odată cu cererile către acel site',
    'Nu ajunge niciodată înapoi, rămâne doar pe server'], correct: 2,
    explanation: 'Browserul stochează cookie-ul primit prin Set-Cookie și îl atașează automat cererilor următoare către același site.' },
  { type: 'theory', question: 'Ce s-ar întâmpla pe un site cu autentificare dacă serverul nu ar putea folosi cookie-uri de sesiune?', options: [
    'Utilizatorul ar trebui să se autentifice din nou la fiecare pagină accesată',
    'Site-ul ar funcționa la fel, dar mai rapid',
    'Parola ar fi memorată automat de HTTP',
    'Serverul ar trimite numai pagini statice'], correct: 0,
    explanation: 'HTTP nu reține informații între cereri, deci fără cookie serverul nu ar recunoaște utilizatorul de la o pagină la alta.' },
  { type: 'theory', question: 'În adresa https://shop.ro/produse/telefon?cod=7, care este domeniul?', options: [
    'https',
    'shop.ro',
    '/produse/telefon',
    'cod=7'], correct: 1,
    explanation: 'Protocolul este https, domeniul shop.ro, calea /produse/telefon, iar cod=7 este parametrul.' },
  { type: 'theory', question: 'Prin ce se caracterizează World Wide Web?', options: [
    'Este rețeaua fizică de cabluri dintre calculatoare',
    'Este un sistem de pagini și resurse interconectate prin hyperlinkuri, accesibile cu ajutorul unui browser',
    'Este un limbaj de programare folosit pe server',
    'Este un program care stochează mesaje de e-mail'], correct: 1,
    explanation: 'Web-ul este un serviciu al Internetului. Resursele sale pot fi text, imagini, audio, video, formulare sau aplicații interactive.' },
  { type: 'theory', question: 'Care este rolul limbajului PHP într-o aplicație web?', options: [
    'Rulează în browser și construiește aspectul paginii',
    'Înlocuiește protocolul HTTP',
    'Se execută pe server, procesează datele și generează pagina trimisă clientului',
    'Stochează cookie-urile pe calculatorul utilizatorului'], correct: 2,
    explanation: 'PHP este un limbaj server-side: serverul îl execută, poate accesa baza de date, iar browserul primește doar rezultatul (de exemplu HTML).' },

  { type: 'theory', question: 'Ce înseamnă că protocolul HTTP este „stateless”?', options: [
    'Nu poate transmite imagini sau fișiere',
    'Funcționează doar fără conexiune la Internet',
    'Cere utilizatorului să trimită parola la fiecare cerere',
    'Nu reține informații între cereri, fiecare cerere fiind tratată independent'], correct: 3,
    explanation: 'Serverul nu își amintește cererile anterioare. De aceea se folosesc cookie-uri de sesiune pentru a recunoaște utilizatorul.' },

  // ---------- ANALYSIS (4) ----------
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$a = "5";
$b = 3;
echo $a . $b;
echo " | ";
echo $a + $b;`, options: ['8 | 8', '53 | 53', '8 | 53', '53 | 8'], correct: 3,
    explanation: 'Punctul concatenează ("5" . 3 dă "53"), iar + adună numeric (5 + 3 = 8).' },
  { type: 'analysis', question: 'Fișierul de mai jos este rulat de serverul web. Ce text HTML primește browserul?', code: `<?php $v = 4; ?>
<ul>
<li><?= $v * 10 ?></li>
<li><?php echo $v . "0"; ?></li>
</ul>`, options: [
    '<ul>\n<li>40</li>\n<li>40</li>\n</ul>',
    '<ul>\n<li>$v * 10</li>\n<li>40</li>\n</ul>',
    '<ul>\n<li>4</li>\n<li>40</li>\n</ul>',
    '<ul>\n<li>40</li>\n<li>$v0</li>\n</ul>'], correct: 0,
    explanation: 'Forma scurtă <?= ... ?> afișează valoarea expresiei (4 * 10 = 40), iar $v . "0" produce textul "40". Rândul nou aflat imediat după ?> este eliminat de PHP, de aceea nu apare o linie goală la început.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$x = 10;
$x .= 5;
echo $x + 1;`, options: ['16', '1051', '106', '105'], correct: 2,
    explanation: '$x .= 5 concatenează: $x devine "105". Apoi "105" + 1 = 106 (adunare numerică).' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
echo "Total: ", 2 * 3, " lei";
print "!";`, options: ['Total: 6 lei!', 'Total: 2 * 3 lei!', 'Total: 23 lei!', 'Total: 6 lei'], correct: 0,
    explanation: 'echo acceptă mai multe valori separate prin virgulă, iar 2 * 3 se calculează (6). print afișează apoi semnul exclamării.' },

  // ---------- FILL (4) ----------
  { type: 'fill', question: 'Adresa cerută de browser este .../profil.php?id=25&nume=Ana. Completează codul ca să citească cei doi parametri din cerere (simulată aici în $_GET) și să afișeze „Studentul Ana are id-ul 25”.', code: `<?php
$_GET = ["id" => "25", "nume" => "Ana"];
$id = $_GET[____];
$nume = $_GET[____];
echo "Studentul " ____ $nume ____ " are id-ul " . $id;`, blanks: [['"id"', "'id'"], ['"nume"', "'nume'"], ['.', ','], ['.', ',', '.=']],
    explanation: 'Parametrii din URL ajung pe server în $_GET, accesați după cheie. Textele și variabila se unesc cu punctul (sau se separă prin virgulă în echo).' },
  { type: 'fill', question: 'Completează codul ca pagina dinamică să calculeze prețul cu TVA și să afișeze: Total: 120 lei', code: `<?php
$pret = 100;
$tva = 20;
$total = $pret ____ $tva;
echo "Total: " ____ $total ____ " lei";`, blanks: [['+', '+='], ['.', ','], ['.', ',', '.=']],
    explanation: 'Valoarea se calculează pe server: 100 + 20 = 120. Apoi textele și variabila se unesc cu punctul (sau se separă prin virgulă în echo), iar browserul primește doar rezultatul.' },
  { type: 'fill', question: 'Completează codul ca serverul să creeze un identificator de sesiune doar dacă parola este corectă (1234), altfel „nimic”, apoi să afișeze rezultatul. Pentru parola introdusă aici se afișează: nimic', code: `<?php
$parola = "9999";
$sesiune = $parola ____ "1234" ____ "session_id=123abc" : "nimic";
____ $sesiune;`, blanks: [['==', '===', '<', '<=', '<<', '>>'], ['?'], ['echo', 'print']],
    explanation: '== compară valorile (parola 9999 nu este 1234, deci rezultatul este „nimic”), iar ternarul condiție ? valoare_true : valoare_false alege între cele două texte. echo afișează valoarea variabilei.' },
  { type: 'fill', question: 'Completează codul ca să construiască antetul trimis de server și să afișeze: Set-Cookie: session_id=123abc', code: `<?php
$nume = "session_id";
$valoare = "123abc";
$cookie = $nume ____ "=" ____ $valoare;
echo "Set-Cookie: " ____ $cookie;`, blanks: [['.', '.='], ['.'], ['.', ',']],
    explanation: 'Numele și valoarea cookie-ului se unesc cu = prin concatenare (operatorul .). La echo, textul și variabila pot fi separate și prin virgulă.' },
];
