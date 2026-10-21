import { Question } from '../models/question';

export const PHP23_QUESTIONS: Question[] = [
  // ───────────── THEORY (14) ─────────────
  {
    type: 'theory',
    question: 'Ai salvat un fișier index.php pe desktop și îl deschizi cu dublu clic. De ce nu se execută codul PHP?',
    options: [
      'Browserul nu are voie să deschidă fișiere cu extensia .php',
      'Adresa este de tip file:///..., deci niciun server Web și niciun interpretor PHP nu rulează codul',
      'Fișierele PHP se execută doar dacă sunt mai mici de 1 MB',
      'Codul PHP trebuie mai întâi compilat într-un fișier .html',
    ],
    correct: 1,
    explanation: 'Un fișier .php este un program, nu un document. La dublu clic browserul primește adresa file:///C:/..., fără niciun server la mijloc, deci nimeni nu execută codul: fișierul se descarcă sau se vede codul-sursă. Ai nevoie de Apache și de interpretorul PHP (de exemplu prin XAMPP) și de adresa http://localhost.',
  },
  {
    type: 'theory',
    question: 'Un script PHP conține variabila $parola_bd = "s3cret"; și generează o pagină HTML cu un titlu și ora curentă. Ce poate vedea un vizitator care apasă Ctrl+U (View Source)?',
    options: [
      'Tot fișierul .php, inclusiv variabilele, pentru că browserul îl primește întreg',
      'Doar liniile de cod PHP care nu conțin parole',
      'Doar HTML-ul generat de script; codul PHP și variabilele nu pleacă niciodată de pe server',
      'Codul PHP, dar doar dacă serverul este XAMPP',
    ],
    correct: 2,
    explanation: 'Serverul execută scriptul și trimite browserului doar rezultatul, adică HTML simplu. Nicio etichetă <?php nu mai există în răspuns, deci browserul nu vede variabile, parole sau logică.',
  },
  {
    type: 'theory',
    question: 'Ce deosebește o pagină dinamică de una statică?',
    options: [
      'Pagina dinamică conține animații CSS sau JavaScript',
      'Pagina dinamică are extensia .html, cea statică are extensia .php',
      'Pagina dinamică este un script care se execută la fiecare cerere și construiește pagina în acel moment, deci același script poate produce pagini diferite',
      'Pagina dinamică se încarcă mai repede pentru că este păstrată în browser',
    ],
    correct: 2,
    explanation: 'Pagina statică este un fișier .html gata scris, identic pentru toți vizitatorii. Pagina dinamică este rezultatul unui script rulat la fiecare cerere, iar conținutul poate depinde de vizitator, de datele trimise, de baza de date sau de dată și oră.',
  },
  {
    type: 'theory',
    question: 'În pachetul XAMPP, care este rolul fiecărei componente principale?',
    options: [
      'PHP primește cererile HTTP, iar Apache execută scripturile',
      'Apache primește cererile HTTP și întoarce răspunsuri; PHP este interpretorul care execută scripturile; MariaDB/MySQL stochează datele',
      'Apache stochează datele, MariaDB este interpretorul, iar PHP este serverul Web',
      'Apache și PHP sunt același program, iar MySQL este doar panoul de control',
    ],
    correct: 1,
    explanation: 'Apache este serverul Web (ascultă cererile HTTP), PHP este interpretorul (motorul care execută scripturile), iar MariaDB/MySQL este serverul de baze de date. XAMPP le instalează deja potrivite între ele, dar doar pentru dezvoltare, fără securitate.',
  },
  {
    type: 'theory',
    question: 'Fișierul se află la C:\\xampp\\htdocs\\magazin\\index.php. Ce adresă introduci în browser ca să-l deschizi?',
    options: [
      'http://localhost/htdocs/magazin/',
      'file:///C:/xampp/htdocs/magazin/index.php',
      'http://localhost/xampp/magazin/',
      'http://localhost/magazin/',
    ],
    correct: 3,
    explanation: 'htdocs este rădăcina site-ului, deci corespunde adresei http://localhost/. Numele dosarului htdocs nu apare în adresă, iar serverul caută singur index.php în dosarul magazin. Ce este în afara lui htdocs nu se vede în browser.',
  },
  {
    type: 'theory',
    question: 'Apasă Start pentru Apache, dar butonul rămâne „Start”, iar jurnalul afișează „Apache shutdown unexpectedly... blocked port”. Care este cea mai probabilă cauză și o soluție corectă?',
    options: [
      'Portul 80 este ocupat de alt program (de exemplu Skype sau IIS); închizi programul sau muți Apache pe 8080 și accesezi http://localhost:8080/',
      'Fișierul index.php conține o eroare de sintaxă; trebuie corectat codul',
      'MySQL nu este pornit; Apache nu poate porni fără baza de date',
      'Calculatorul nu are conexiune la Internet; trebuie reconectat',
    ],
    correct: 0,
    explanation: 'Mesajul „blocked port” arată un conflict pe portul 80, ușa implicită a serverului Web. Soluțiile din curs: închizi programul care ocupă portul sau schimbi în httpd.conf directiva Listen 80 în Listen 8080; adresa devine atunci http://localhost:8080/proiect/.',
  },
  {
    type: 'theory',
    question: 'Ai tabloul $note = [9, 8, 10]; și vrei să vezi în timpul depanării atât valorile, cât și tipul și lungimea fiecărei valori. Ce folosești?',
    options: [
      'echo $note;',
      'print_r($note);',
      'print $note;',
      'var_dump($note);',
    ],
    correct: 3,
    explanation: 'var_dump() arată în plus tipul și lungimea (array(3) { [0]=> int(9) ... }), de aceea este instrumentul de depanare al programatorului. print_r() arată conținutul pe înțelesul omului, fără tipuri. echo și print nu pot afișa un tablou întreg (ar apărea cuvântul Array și un avertisment).',
  },
  {
    type: 'theory',
    question: 'Care dintre aceste nume de variabile NU este valid în PHP și produce Parse error?',
    options: [
      '$_intern',
      '$nume_complet',
      '$nota1',
      '$nume-complet',
    ],
    correct: 3,
    explanation: 'Numele începe cu $ urmat de literă sau underscore; în rest sunt permise doar litere, cifre și underscore. Cratima nu este permisă ($nume-complet este citit ca $nume minus complet), la fel ca spațiul sau cifra la început ($1nota).',
  },
  {
    type: 'theory',
    question: 'Ce înseamnă că PHP este un limbaj cu tipizare dinamică?',
    options: [
      'Tipul este asociat valorii din acel moment, nu variabilei, deci același nume poate primi la atribuiri diferite valori de tipuri diferite',
      'Tipul fiecărei variabile trebuie declarat și nu mai poate fi schimbat niciodată',
      'PHP convertește orice variabilă în string înainte de a o afișa',
      'Variabilele se declară cu cuvântul cheie var, iar tipul se deduce la prima rulare a paginii',
    ],
    correct: 0,
    explanation: 'Tipul nu aparține variabilei, ci valorii pe care o conține în acel moment. $x poate fi mai întâi string "12", apoi int 12, apoi float 12.5, apoi bool. Avantaj: cod rapid; pericol: nu mai ești sigur ce conține variabila, de aceea var_dump() și gettype() se folosesc des.',
  },
  {
    type: 'theory',
    question: 'Dacă $nume = "Ana";, care afirmație despre ghilimele este corectă?',
    options: [
      'Ghilimelele simple înlocuiesc variabilele cu valorile lor, cele duble nu',
      'Ghilimelele duble înlocuiesc variabilele cu valorile lor și interpretează secvențele de evadare (\\n); cele simple iau textul exact cum e scris',
      'Ambele tipuri de ghilimele se comportă identic în PHP',
      'Ghilimelele duble pot fi folosite doar pentru numere, cele simple doar pentru text',
    ],
    correct: 1,
    explanation: 'În "Salut, $nume!" variabila este înlocuită cu Ana, iar în \'Salut, $nume!\' rămâne literal textul $nume. Tot așa, \\n devine rând nou doar între ghilimele duble. Pentru cazurile ambigue (precum "$pret0") se folosesc acoladele: "{$pret}0".',
  },
  {
    type: 'theory',
    question: 'Care dintre afirmațiile despre împărțire și restul împărțirii în PHP este adevărată?',
    options: [
      '10 / 5 produce întotdeauna float(2), iar 10 / 4 produce int(2)',
      'Operatorul / face împărțire întreagă, ca în C',
      'Operatorul / poate da float când rezultatul nu e exact (10 / 4 este 2.5), iar -10 % 3 este -1, pentru că restul are semnul deîmpărțitului',
      '-10 % 3 este 1, pentru că restul este mereu pozitiv',
    ],
    correct: 2,
    explanation: 'În PHP nu există împărțire întreagă cu /: 10 / 4 dă float(2.5), iar 10 / 5 dă int(2), pentru că rezultatul este exact. Câtul întreg se obține cu intdiv(). Restul are semnul deîmpărțitului: -10 % 3 este -1, iar 10 % -3 este 1.',
  },
  {
    type: 'theory',
    question: 'De ce cursul recomandă să folosești întotdeauna === și !== în loc de == și !=?',
    options: [
      '=== este mai rapid și de aceea se recomandă doar pentru numere mari',
      '=== compară și tipul, fără conversii automate, deci evită rezultate surprinzătoare precum "10" == "1e1" (true) sau null == 0 (true)',
      '== nu mai există în PHP 8 și produce eroare fatală',
      '=== compară doar tipurile, nu și valorile',
    ],
    correct: 1,
    explanation: '== compară valoarea și, dacă tipurile diferă, face mai întâi o conversie automată (7 == "7" este true, null == false este true). === este true numai dacă și valoarea, și tipul sunt identice, fără nicio conversie. Folosești == doar când vrei explicit conversia, cu un comentariu care explică de ce.',
  },
  {
    type: 'theory',
    question: 'Ce face evaluarea scurtcircuitată în expresia $b != 0 && $a / $b > 2 când $b este 0?',
    options: [
      'Evaluează ambele părți și produce o eroare la împărțirea la zero',
      'Evaluează întâi partea dreaptă, apoi pe cea stângă',
      'Transformă $b în null și continuă calculul',
      'Oprește evaluarea după partea stângă (false), deci $a / $b nu se mai execută și nu apare împărțirea la zero',
    ],
    correct: 3,
    explanation: 'La && dacă partea stângă este false, rezultatul este sigur false, iar partea dreaptă nici nu se mai execută. La || se întâmplă la fel când partea stângă este true. Se folosește ca protecție: condiția din stânga apără calculul din dreapta.',
  },
  {
    type: 'theory',
    question: 'Ce se întâmplă în PHP 8 la evaluarea expresiei "a" + "b"?',
    options: [
      'Rezultatul este șirul "ab", ca în JavaScript',
      'Rezultatul este 0',
      'Rezultatul este "a+b"',
      'Se produce eroarea fatală TypeError: Unsupported operand types: string + string; pentru lipirea textelor se folosește operatorul .',
    ],
    correct: 3,
    explanation: 'În PHP, + este numai pentru numere și nu lipește niciodată texte (diferența față de JavaScript). Pentru texte folosești punctul: "a" . "b" dă "ab". Atenție: "5" + "3" este int(8), pentru că șirurile numerice sunt convertite, în timp ce "5" . "3" este string "53".',
  },

  // ───────────── ANALYSIS (9) ─────────────
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$x = 5;
echo $x++ . "-" . $x;`,
    options: ['6-6', '5-5', '5-6', '6-5'],
    correct: 2,
    explanation: '$x++ (post-incrementare) întoarce mai întâi valoarea curentă (5) și abia apoi mărește variabila la 6. Al doilea $x este deja 6, deci se afișează 5-6.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = 5;
$b = $a++ * 2;
$c = ++$a * 2;
echo "$a $b $c";`,
    options: ['7 12 16', '7 10 16', '6 10 12', '7 10 14'],
    correct: 3,
    explanation: '$a++ * 2: se folosește 5, deci $b = 10, iar $a devine 6. ++$a * 2: întâi $a devine 7, apoi 7 * 2 = 14, deci $c = 14. La final $a este 7: se afișează "7 10 14".',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
echo 7 / 2, " ", intdiv(7, 2), " ", -7 % 3, " ", 7 % -3;`,
    options: ['3 3 -1 1', '3.5 3 1 -1', '3.5 3 -1 1', '3.5 4 -1 1'],
    correct: 2,
    explanation: '7 / 2 dă float 3.5; intdiv(7, 2) dă câtul întreg 3; restul are semnul deîmpărțitului, deci -7 % 3 este -1, iar 7 % -3 este 1.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos? (În PHP 8, + are prioritate mai mare decât .)',
    code: `<?php
echo "5" + "3" . "2";`,
    options: ['82', '532', '10', '8'],
    correct: 0,
    explanation: 'Operatorul + se evaluează înaintea punctului: "5" + "3" este 8 (șirurile numerice sunt convertite), apoi 8 . "2" lipește textele și dă șirul "82".',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$m = "Pret: ";
$m .= 10 * 2;
$m .= " lei";
echo $m;`,
    options: ['Pret: 10 * 2 lei', 'Pret: 20 lei', ' lei', 'Pret: 12 lei'],
    correct: 1,
    explanation: '.= adaugă la sfârșitul șirului. Întâi se calculează 10 * 2 = 20, care este convertit în text și lipit la "Pret: ", apoi se adaugă " lei". Rezultat: Pret: 20 lei.',
  },
  {
    type: 'analysis',
    question: 'Ce se afișează în pagină (textul exact trimis de script)?',
    code: `<?php
$nume = "Ana";
echo 'Salut, $nume!<br>';
echo "Salut, {$nume}0!";`,
    options: [
      'Salut, Ana!<br>Salut, Ana0!',
      'Salut, $nume!<br>Salut, $nume0!',
      'Salut, $nume!<br>Salut, Ana0!',
      'Salut, Ana!<br>Salut, {Ana}0!',
    ],
    correct: 2,
    explanation: 'Între ghilimele simple $nume rămâne text literal. Între ghilimele duble variabila este înlocuită, iar acoladele {$nume} delimitează numele, deci rezultă Ana0, fără acolade în ieșire.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos (fiecare var_dump pe rând nou)?',
    code: `<?php
var_dump(7 === "7", "10" == "1e1", null == 0);`,
    options: [
      'bool(true)\nbool(true)\nbool(true)',
      'bool(false)\nbool(true)\nbool(true)',
      'bool(false)\nbool(false)\nbool(true)',
      'bool(false)\nbool(true)\nbool(false)',
    ],
    correct: 1,
    explanation: '7 === "7" este false (int față de string). "10" == "1e1" este true: ambele arată a număr și sunt comparate ca numere (1e1 este 10). null == 0 este true, pentru că null se convertește la 0 la comparația cu ==.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
function f($t) {
    echo "F";
    return $t;
}
if (f(false) && f(true)) { echo "A"; }
if (f(true) || f(false)) { echo "B"; }
if (f(true) && f(false)) { echo "C"; }
echo "D";`,
    options: ['FFFFFFD', 'FBFFCD', 'FFBFFCD', 'FFBFFD'],
    correct: 3,
    explanation: 'Linia 1: f(false) afișează F, && se oprește, nu se afișează A. Linia 2: f(true) afișează F, || se oprește, apoi B. Linia 3: se apelează ambele funcții (FF), rezultatul este false, deci fără C. Final D. Total: FFBFFD.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$nota = null;
$x = $nota ?? 5;
$y = $x > 4 ? "da" : "nu";
echo $x . $y . ($z ?? "?");`,
    options: ['5da', '5nu?', '5da?', 'da?'],
    correct: 2,
    explanation: '$nota este null, deci ?? ia valoarea din dreapta: $x = 5. Condiția 5 > 4 este adevărată, deci $y = "da". $z nu există, iar ?? nu produce avertisment, ci folosește "?". Rezultat: 5da?.',
  },

  // ───────────── FILL (9) ─────────────
  {
    type: 'fill',
    question: 'Completează codul ca să afișeze conținutul tabloului pe înțelesul omului, apoi cu tipuri și lungimi, iar la final să afișeze textul "ok" cu o instrucțiune care întoarce valoarea 1 (rezultatul se păstrează în $r).',
    code: `<?php
$note = [9, 8, 10];
____($note);
____($note);
$r = ____ "ok";
echo $r;`,
    blanks: [['print_r'], ['var_dump'], ['print']],
    explanation: 'print_r() arată conținutul pe înțelesul omului, var_dump() arată în plus tipul și lungimea, iar print afișează un singur text și întoarce mereu 1 (echo nu întoarce nimic, deci nu poate fi atribuit).',
  },
  {
    type: 'fill',
    question: 'Completează codul cu operatorii de atribuire compusă: adună 20, împarte la 3, păstrează restul împărțirii la 7, apoi adaugă textul " lei" la sfârșit. Se afișează: 5 lei',
    code: `<?php
$p = 100;
$p ____ 20;
$p ____ 3;
$p ____ 7;
$p ____ " lei";
echo $p;`,
    blanks: [['+='], ['/='], ['%='], ['.=']],
    explanation: '100 += 20 dă 120; 120 /= 3 dă 40; 40 %= 7 dă 5 (restul); apoi .= lipește " lei" la sfârșit, deci rezultatul este "5 lei".',
  },
  {
    type: 'fill',
    question: 'Completează condiția pentru an bisect: divizibil cu 4 și nedivizibil cu 100, sau divizibil cu 400. Pentru 2024 se afișează bool(true).',
    code: `<?php
$an = 2024;
$bisect = ($an ____ 4 == 0 && $an ____ 100 ____ 0) || ($an % 400 == 0);
var_dump($bisect);`,
    blanks: [['%'], ['%'], ['!=', '!==']],
    explanation: 'Divizibilitatea se testează cu restul împărțirii: $an % 4 == 0. Condiția "nedivizibil cu 100" este $an % 100 != 0 (sau !==, rezultatul % fiind int). Parantezele grupează cele două cazuri.',
  },
  {
    type: 'fill',
    question: 'Într-o clasă sunt 17 elevi, iar o grupă are 5 elevi. Completează codul ca să afișeze numărul de grupe complete (câtul întreg), numărul de elevi rămași (restul) și pătratul mărimii grupei. Se afișează: 3 grupe, 2 ramasi, 25',
    code: `<?php
$total = 17;
$grupa = 5;
$complete = ____($total, $grupa);
$ramasi = $total ____ $grupa;
$patrat = $grupa ____ 2;
echo "$complete grupe, $ramasi ramasi, $patrat";`,
    blanks: [['intdiv'], ['%'], ['**']],
    explanation: 'Operatorul / ar da float (3.4). Câtul întreg se obține cu intdiv(), restul cu %, iar ridicarea la putere cu **.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca $a să primească 5 (valoarea dinainte de mărire), $b să primească 7 (valoarea după mărire), iar la final $x să scadă cu 1. Se afișează: 5 7 6',
    code: `<?php
$x = 5;
$a = $x ____;
$b = ____ $x;
$x ____;
echo "$a $b $x";`,
    blanks: [['++'], ['++'], ['--', '-= 1', '-=1']],
    explanation: '$x++ întoarce vechea valoare (5) și apoi mărește x la 6. ++$x mărește mai întâi x la 7 și abia apoi îl folosește ($b = 7). Ultimul pas scade 1 din 7, deci x este 6.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca primul mesaj să apară când valorile sunt egale chiar dacă tipurile diferă, iar al doilea când valoarea ȘI tipul sunt identice; altfel se afișează textul de pe ramura alternativă. Se afișează: egale ca valoare tipuri diferite',
    code: `<?php
$a = 7;
$b = "7";
if ($a ____ $b) { echo "egale ca valoare "; }
if ($a ____ $b) { echo "identice"; } ____ { echo "tipuri diferite"; }`,
    blanks: [['=='], ['==='], ['else']],
    explanation: '7 == "7" este true (se compară doar valoarea, după conversie). 7 === "7" este false, pentru că int și string sunt tipuri diferite, deci se execută ramura else.',
  },
  {
    type: 'fill',
    question: 'Completează condiția astfel încât împărțirea $a / $b să nu se execute niciodată când $b este 0 (folosește evaluarea scurtcircuitată). Pentru valorile date se afișează: nu se imparte',
    code: `<?php
$a = 10;
$b = 0;
if ($b ____ 0 ____ $a ____ $b > 2) {
    echo "mare";
} else {
    echo "nu se imparte";
}`,
    blanks: [['!=', '!=='], ['&&', 'and'], ['/']],
    explanation: '$b != 0 && $a / $b > 2: dacă $b este 0, partea stângă este false, iar && nu mai evaluează partea dreaptă, deci nu apare împărțirea la zero.',
  },
  {
    type: 'fill',
    question: 'Completează codul cu operatorul ternar și cu operatorul de coalescență nulă: $rezultat este "promovat" pentru nota cel puțin 5, altfel "respins", iar $prenume ia valoarea "necunoscut" când cheia lipsește din $_GET. Se afișează: promovat - necunoscut',
    code: `<?php
$nota = 8;
$rezultat = $nota >= 5 ____ "promovat" ____ "respins";
$prenume = $_GET["p"] ____ "necunoscut";
echo "$rezultat - $prenume";`,
    blanks: [['?'], [':'], ['??']],
    explanation: 'Ternarul are forma condiție ? valoare_dacă_true : valoare_dacă_false. Operatorul ?? ia valoarea din stânga dacă există și nu este null, altfel pe cea din dreapta, fără avertisment pentru cheie lipsă.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca să construiască și să afișeze mesajul: Produs: Laptop costa 250 lei, adăugând text la sfârșitul lui $mesaj și folosind acoladele în șirul cu ghilimele duble (prețul 25 este urmat direct de cifra 0).',
    code: `<?php
$produs = "Laptop";
$pret = 25;
$mesaj = "Produs: ";
$mesaj ____ $produs;
$mesaj ____ " costa ";
echo $mesaj . "{____}0 lei";`,
    blanks: [['.='], ['.='], ['$pret']],
    explanation: '.= adaugă la sfârșitul șirului ($m .= x este $m = $m . x). Fără acolade, "$pret0" ar căuta variabila $pret0 (nedefinită); {$pret}0 delimitează numele și produce 250.',
  },
];
