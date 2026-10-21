import { Question } from '../models/question';

export const PHP23B_QUESTIONS: Question[] = [
  // ───────────── THEORY (14) ─────────────
  {
    type: 'theory',
    question: 'Care afirmație despre echo și print este corectă?',
    options: [
      'print poate primi mai multe texte separate prin virgulă, iar echo întoarce mereu 1',
      'echo afișează și tipul și lungimea valorii, print afișează doar valoarea',
      'echo poate primi mai multe texte separate prin virgulă și nu întoarce nimic; print afișează un singur text și întoarce mereu 1',
      'Ambele afișează un tablou întreg pe înțelesul omului, la fel ca print_r()',
    ],
    correct: 2,
    explanation: 'echo "Ana", " ", "are" este permis (mai multe texte, separate prin virgulă) și nu întoarce nicio valoare. print afișează un singur text și întoarce mereu 1, de aceea $r = print "ok"; este valid, iar $r = echo "ok"; produce Parse error. Nici unul nu afișează un tablou: pentru asta există print_r() și var_dump().',
  },
  {
    type: 'theory',
    question: 'Un fișier conține numai cod PHP. De ce cursul recomandă să omiți eticheta de închidere ?> de la final?',
    options: [
      'Pentru că astfel se evită trimiterea accidentală a unor spații sau rânduri goale scrise după ?>, care ar ajunge în răspunsul către browser',
      'Pentru că fără ?> scriptul rulează mai repede',
      'Pentru că în PHP 8.5 eticheta ?> este interzisă și produce Parse error',
      'Pentru că fără ?> codul PHP este trimis browserului ca text',
    ],
    correct: 0,
    explanation: 'Tot ce se află după ?> este tratat ca text simplu și trimis browserului, inclusiv un rând gol rămas din greșeală la sfârșitul fișierului. Dacă fișierul conține doar PHP, eticheta de închidere poate lipsi, iar riscul dispare. Nu este nici interzisă, nici o chestiune de viteză.',
  },
  {
    type: 'theory',
    question: 'În script apar $nume = "Ana"; $Nume = "Ion"; $NUME = "Dan";. Ce înseamnă acest lucru în PHP?',
    options: [
      'Sunt aceeași variabilă, pentru că PHP ignoră majusculele din numele variabilelor, deci valoarea finală este "Dan"',
      'A doua atribuire produce o eroare fatală, pentru că variabila există deja',
      'Doar $nume este validă; celelalte două trebuie scrise cu litere mici',
      'Sunt trei variabile diferite, pentru că numele variabilelor este sensibil la litere mari și mici',
    ],
    correct: 3,
    explanation: 'Numele variabilelor din PHP face diferența între majuscule și minuscule: $nume, $Nume și $NUME sunt trei variabile separate, fiecare cu valoarea ei. De aceea o greșeală de scriere ($Nume în loc de $nume) produce „Undefined variable”, nu o eroare de sintaxă.',
  },
  {
    type: 'theory',
    question: 'Scriptul are 3 rânduri: 1) <?php  2) $pret = 250 (fără ;)  3) echo $pret;. Mesajul PHP este: Parse error: syntax error, unexpected token "echo" ... on line 3. De ce nu indică rândul 2, unde lipsește ;?',
    options: [
      'PHP numără rândurile începând de la 0',
      'Instrucțiunea de pe rândul 2 nu are sfârșit, deci PHP continuă să citească și abia la tokenul echo (rândul 3) vede că expresia nu mai poate continua',
      'Eroarea chiar este în echo, pentru că după o atribuire nu se poate scrie echo',
      'Serverul raportează mereu ultimul rând al fișierului',
    ],
    correct: 1,
    explanation: 'Fără ; PHP nu știe unde se termină instrucțiunea $pret = 250, așa că o continuă pe rândul următor. Cuvântul echo nu poate face parte din expresie, iar eroarea este semnalată acolo. Regulă practică: când mesajul arată un token neașteptat, verifică și rândul de dinainte, nu doar rândul indicat.',
  },
  {
    type: 'theory',
    question: 'Ce reprezintă numele localhost și adresa 127.0.0.1?',
    options: [
      'Serverul public al producătorului XAMPP, de unde se descarcă paginile',
      'Primul calculator din rețeaua școlii, care are mereu această adresă',
      'Propriul tău calculator: cererile trimise acolo nu pleacă pe Internet, ci sunt primite de Apache instalat local',
      'Un program care convertește fișierele .php în .html',
    ],
    correct: 2,
    explanation: 'localhost este numele calculatorului curent, iar 127.0.0.1 este adresa lui IP. Browserul trimite cererea către Apache de pe aceeași mașină. Lucrezi local pentru că este rapid, gratuit, funcționează fără Internet, iar greșelile nu le vede nimeni.',
  },
  {
    type: 'theory',
    question: 'Care dintre aceste construcții este o expresie, adică produce o valoare?',
    options: [
      'round($pret * 1.2, 2)',
      'echo "Salut";',
      'if ($a > 5) { echo "mare"; }',
      '<?php',
    ],
    correct: 0,
    explanation: 'O expresie este orice construcție care, evaluată, produce o valoare: aici valoarea returnată de round(). echo "Salut"; și if sunt instrucțiuni (comenzi: fac ceva, dar nu sunt folosite ca valoare), iar <?php este doar eticheta de deschidere. O expresie singură nu afișează nimic: trebuie atribuită, afișată sau pusă într-o condiție.',
  },
  {
    type: 'theory',
    question: 'Care șir ordonează corect operatorii de la prioritatea cea mai mare la cea mai mică?',
    options: [
      '=, ||, &&, ==, <, ., +, *, **',
      '**, !, *, +, ., <, ==, &&, ||, =',
      '*, **, !, +, <, ., &&, ==, =, ||',
      '+, *, **, ., ==, <, ||, &&, =, !',
    ],
    correct: 1,
    explanation: 'Ordinea din curs: ** (ridicarea la putere), apoi ! (și ++ --), apoi * / %, apoi + -, apoi . (în PHP 8 concatenarea este sub + și -), apoi comparațiile de mărime (<), cele de egalitate (==), && , ||, ?? și ternarul, atribuirile, iar and/xor/or sunt cele mai slabe. De aceea 2 + 3 * 4 este 14, iar când ai dubii pui paranteze.',
  },
  {
    type: 'theory',
    question: 'Când dau același rezultat $x++ și ++$x?',
    options: [
      'Niciodată: ++$x mărește variabila cu 2',
      'Numai când $x este un număr negativ',
      'Numai când $x este de tip string',
      'Când valoarea expresiei nu este folosită, de exemplu într-o instrucțiune de sine stătătoare $x++; sau ++$x;: în ambele cazuri variabila crește cu 1',
    ],
    correct: 3,
    explanation: 'Diferența dintre cele două forme este doar valoarea expresiei: $x++ întoarce valoarea veche, ++$x pe cea nouă. Variabila ajunge în ambele cazuri la valoarea mărită cu 1. Dacă rezultatul expresiei nu e folosit nicăieri (ca într-un for sau pe un rând singur), cele două sunt identice.',
  },
  {
    type: 'theory',
    question: 'Ce întoarce operatorul <=> (spaceship), de exemplu 3 <=> 2?',
    options: [
      'Un int: -1 dacă stânga este mai mică, 0 dacă sunt egale, 1 dacă stânga este mai mare; de aceea e util la sortare',
      'Un bool: true dacă valorile sunt egale, false în rest',
      'Un string: "mai mic", "egal" sau "mai mare"',
      'Un float cu diferența dintre cele două valori',
    ],
    correct: 0,
    explanation: 'Spaceship nu întoarce bool, ci unul dintre cele trei întregi -1, 0, 1. Funcțiile de sortare din PHP au nevoie exact de aceste trei valori ca să decidă ordinea a două elemente: 1 <=> 2 este -1, 2 <=> 2 este 0, 3 <=> 2 este 1.',
  },
  {
    type: 'theory',
    question: 'Cum se comportă în PHP 8.5 comparațiile "abc" == 0 și 0 == "" (față de PHP 7)?',
    options: [
      'Ambele sunt true, ca în PHP 7',
      'Prima este true, a doua este false',
      'Ambele sunt false: numărul este convertit în șir, iar șirul gol nu mai este tratat ca 0',
      'Ambele produc TypeError',
    ],
    correct: 2,
    explanation: 'În PHP 7, "abc" == 0 și 0 == "" erau true, pentru că șirul era convertit în număr. Din PHP 8, la compararea unui număr cu un șir nenumeric, numărul este convertit în șir ("0" == "abc" este false), iar șirul gol nu mai este egal cu 0. Manualele vechi spun altceva, de aceea se recomandă ===.',
  },
  {
    type: 'theory',
    question: 'Se execută $r = true and false;. Ce valoare are $r și de ce?',
    options: [
      'false, pentru că and are aceeași prioritate ca &&',
      'true, pentru că and are prioritate mai mică decât =, deci se execută ($r = true) and false',
      'false, pentru că true și false dau întotdeauna false',
      'null, pentru că and nu întoarce o valoare care poate fi atribuită',
    ],
    correct: 1,
    explanation: 'and, or și xor sunt mai slabe decât atribuirea (nivelul 13 din tabel). Deci prima dată se face $r = true, abia apoi rezultatul se combină cu false (și se pierde). Pentru comportamentul dorit folosești && sau pui paranteze: $r = (true and false);.',
  },
  {
    type: 'theory',
    question: 'Fișierul salut.php este deschis o dată cu adresa salut.php?nume=Ana și o dată cu salut.php?nume=Victor. De ce primești două pagini diferite, deși fișierul este același?',
    options: [
      'Pentru că browserul modifică fișierul înainte de a-l trimite',
      'Pentru că scriptul se execută la fiecare cerere și construiește pagina folosind datele primite în acea cerere',
      'Pentru că serverul memorează câte un fișier separat pentru fiecare vizitator',
      'Pentru că fișierul .php este citit de browser, care alege singur conținutul',
    ],
    correct: 1,
    explanation: 'O pagină dinamică este un script care se execută la fiecare cerere și construiește pagina în acel moment, în funcție de datele primite (aici parametrul nume din adresă). Fișierul se scrie o singură dată, iar browserul primește doar HTML-ul rezultat.',
  },
  {
    type: 'theory',
    question: 'Ce se întâmplă la rularea instrucțiunii $nou += 5; când variabila $nou nu a fost definită niciodată?',
    options: [
      'Warning: Undefined variable $nou, dar scriptul continuă și $nou devine 5',
      'Parse error, iar scriptul nu pornește',
      'Fatal error, iar scriptul se oprește imediat',
      'Nu apare niciun mesaj, iar $nou rămâne null',
    ],
    correct: 0,
    explanation: 'Formele compuse cer ca variabila să existe deja, pentru că $nou += 5 înseamnă $nou = $nou + 5. PHP semnalează Warning: Undefined variable, tratează valoarea lipsă ca null (adică 0) și continuă, deci rezultatul este 5. Soluția corectă este să inițializezi variabila înainte ($nou = 0;).',
  },
  {
    type: 'theory',
    question: 'Care este diferența dintre gettype($x) și is_int($x)?',
    options: [
      'gettype($x) întoarce true sau false, iar is_int($x) întoarce numele tipului',
      'gettype($x) întoarce numele tipului valorii ca text, iar is_int($x) întoarce true sau false, după cum valoarea este sau nu int',
      'Sunt identice, ambele întorc numele tipului ca text',
      'gettype($x) schimbă tipul lui $x, iar is_int($x) îl verifică',
    ],
    correct: 1,
    explanation: 'gettype() întoarce numele tipului ca text (de exemplu "boolean" pentru true). Funcțiile de verificare is_int(), is_string(), is_float(), is_bool(), is_array(), is_null() întorc doar true sau false. Niciuna nu modifică variabila.',
  },

  // ───────────── ANALYSIS (9) ─────────────
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
echo 2 ** 3 ** 2, " ", -3 ** 2, " ", (2 + 3) * 4;`,
    options: ['64 9 20', '512 -9 20', '512 9 20', '64 -9 20'],
    correct: 1,
    explanation: '** se grupează de la dreapta: 2 ** (3 ** 2) = 2 ** 9 = 512. ** are prioritate mai mare decât minusul unar, deci -3 ** 2 este -(3 ** 2) = -9. Parantezele fac întâi adunarea: 5 * 4 = 20.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
echo "Total: " . 10 - 4 . " lei";`,
    options: ['Total: 10 - 4 lei', '-4 lei', 'Total: 6 lei', 'Total: 6'],
    correct: 2,
    explanation: 'În PHP 8, - are prioritate mai mare decât punctul, deci 10 - 4 se calculează primul (6). Apoi se lipesc textele: "Total: " . 6 . " lei" dă Total: 6 lei.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos (fiecare var_dump pe rând nou)?',
    code: `<?php
var_dump("abc" == 0);
var_dump(0 == "");
var_dump("1" == "01");
var_dump([] == false);`,
    options: [
      'bool(true)\nbool(true)\nbool(true)\nbool(true)',
      'bool(false)\nbool(false)\nbool(false)\nbool(true)',
      'bool(true)\nbool(false)\nbool(true)\nbool(false)',
      'bool(false)\nbool(false)\nbool(true)\nbool(true)',
    ],
    correct: 3,
    explanation: 'În PHP 8 "abc" == 0 este false (numărul este convertit în șir) și 0 == "" este false (șirul gol nu mai e tratat ca 0). "1" == "01" este true: ambele arată a număr și se compară numeric. [] == false este true: tabloul gol este „fals” la conversie.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
echo (3 <=> 2) . (2 <=> 2) . (1 <=> 2) . (10 <=> 9);`,
    options: ['10-1-1', '1011', '10-11', '1-1-1-1'],
    correct: 2,
    explanation: 'Fiecare comparație întoarce -1, 0 sau 1: 3 <=> 2 este 1, 2 <=> 2 este 0, 1 <=> 2 este -1, iar 10 <=> 9 este 1. Punctul lipește rezultatele: 1, 0, -1, 1 devin 10-11.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos (fiecare var_dump pe rând nou)?',
    code: `<?php
$p = true;
$q = false;
var_dump($p xor $q);
var_dump(!$p || $q);
var_dump($p && !$q xor true);`,
    options: [
      'bool(true)\nbool(false)\nbool(true)',
      'bool(false)\nbool(false)\nbool(false)',
      'bool(true)\nbool(true)\nbool(false)',
      'bool(true)\nbool(false)\nbool(false)',
    ],
    correct: 3,
    explanation: 'true xor false este true (exact una e adevărată). !$p este false, iar false || false este false. La a treia, xor este mai slab decât &&: ($p && !$q) este true && true = true, apoi true xor true este false (ambele adevărate).',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos (fiecare var_dump pe rând nou)?',
    code: `<?php
var_dump(5 > 3 && 2 > 4);
var_dump("5" + "3");
var_dump("5" . "3");
var_dump(10 / 5);`,
    options: [
      'bool(false)\nint(8)\nstring(2) "53"\nfloat(2)',
      'bool(true)\nint(8)\nstring(2) "53"\nint(2)',
      'bool(false)\nint(8)\nstring(2) "53"\nint(2)',
      'bool(false)\nstring(1) "8"\nint(53)\nint(2)',
    ],
    correct: 2,
    explanation: '5 > 3 este true, 2 > 4 este false, deci true && false este bool(false). "5" + "3" adună numeric și dă int(8). "5" . "3" lipește textele și dă string(2) "53". 10 / 5 este exact, deci rezultatul este int(2), nu float.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$r = print "A";
echo $r;
echo "B", "C";`,
    options: ['A1BC', 'ABC', 'A0BC', '1ABC'],
    correct: 0,
    explanation: 'print "A" afișează A și întoarce 1, valoare păstrată în $r. echo $r afișează 1, apoi echo cu două argumente afișează B și C, unul după altul. Rezultat: A1BC.',
  },
  {
    type: 'analysis',
    question: 'Ce se afișează în pagină?',
    code: `<?php
$nume = "Ana";
$Nume = "Ion";
$NUME = $nume . $Nume;
echo "$nume-$Nume-$NUME", '-$nume';`,
    options: [
      'Ana-Ion-AnaIon-Ana',
      'Ion-Ion-Ion-$nume',
      'Ana-Ion-AnaIon-$nume',
      'Ana-Ana-Ana-$nume',
    ],
    correct: 2,
    explanation: 'Cele trei variabile sunt diferite (sensibile la litere mari și mici): $nume este Ana, $Nume este Ion, iar $NUME este "AnaIon". Între ghilimele duble se înlocuiesc toate, iar al doilea text este între ghilimele simple, deci $nume rămâne literal.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$s = 7;
$s *= 2;
$s %= 10;
$s .= "5";
$s += 1;
var_dump($s);`,
    options: ['int(16)', 'int(46)', 'string(2) "46"', 'string(2) "45"'],
    correct: 1,
    explanation: '7 *= 2 dă 14; 14 %= 10 dă 4; 4 .= "5" lipește textele și dă string "45"; "45" += 1 convertește șirul numeric și dă int(46), pentru că adunarea produce număr.',
  },

  // ───────────── FILL (9) ─────────────
  {
    type: 'fill',
    question: 'Completează codul ca să afișeze tipul lui $b ca text, apoi (cu var_dump) să verifice tipul celorlalte valori. Se afișează: boolean bool(true) bool(true) bool(true), fiecare pe rând nou.',
    code: `<?php
$b = true;
$n = null;
$t = [1, 2];
$s = "Ana";
echo ____($b), "\\n";   // tipul sub formă de text
var_dump(____($n));   // true dacă valoarea este null
var_dump(____($t));   // true dacă valoarea este tablou
var_dump(____($s));   // true dacă valoarea este string`,
    blanks: [['gettype'], ['is_null', 'empty', 'print_r'], ['is_array', 'is_countable', 'is_iterable', 'isset'], ['is_string', 'is_scalar', 'isset']],
    explanation: 'gettype() întoarce numele tipului ca text ("boolean" pentru true). Funcțiile is_null(), is_array() și is_string() întorc true sau false, după cum valoarea are exact acel tip.',
  },
  {
    type: 'fill',
    question: 'Completează codul cu ghilimelele potrivite: prima linie trebuie să înlocuiască variabila cu valoarea ei, iar a doua să afișeze textul exact cum este scris. Se afișează: Azi este luni | Azi este $zi',
    code: `<?php
$zi = "luni";
echo ____Azi este $zi____ . " | ";
echo ____Azi este $zi____;`,
    blanks: [['"'], ['"'], ["'"], ["'"]],
    explanation: 'Ghilimelele duble înlocuiesc variabilele cu valorile lor, deci "Azi este $zi" devine Azi este luni. Ghilimelele simple iau textul exact: \'Azi este $zi\' rămâne cu $zi.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca să afișeze: 20, apoi 512 (2 la puterea 3 la puterea 2), apoi restul împărțirii lui 17 la 5 (fiecare pe rând nou). Prima valoare cere ca adunarea să se facă înaintea înmulțirii.',
    code: `<?php
echo ____ 2 + 3 ____ * 4, "\\n";
echo 2 ____ 3 ____ 2, "\\n";
echo 17 ____ 5;`,
    blanks: [['(', '+('], [')'], ['**'], ['**'], ['%']],
    explanation: 'Parantezele schimbă ordinea: (2 + 3) * 4 = 20. Operatorul ** se grupează de la dreapta: 2 ** (3 ** 2) = 512. Restul împărțirii lui 17 la 5 se obține cu %, adică 2.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca să afișeze $x ca text, apoi să-l transforme prin adunare cu 1 și prin împărțire la 2, afișând de fiecare dată tipul și valoarea. Se afișează (pe rânduri separate): string(2) "12", int(13), float(6.5)',
    code: `<?php
$x = "12";
____($x);
$x = $x ____ 1;
var_dump($x);
$x = $x ____ 2;
var_dump($x);`,
    blanks: [['var_dump'], ['+', '+=', '|', '^'], ['/', '/=']],
    explanation: 'var_dump() arată tipul și lungimea: string(2) "12". Plusul convertește șirul numeric și dă int(13). Operatorul / nu este împărțire întreagă și dă float când rezultatul nu este exact: 13 / 2 este float(6.5).',
  },
  {
    type: 'fill',
    question: 'Completează codul ca să afișeze lungimea cuvântului din $cuvant și apoi mesajul: Cuvantul are 8 litere',
    code: `<?php
$cuvant = "Chisinau";
$n = ____($cuvant);
echo "Cuvantul are " ____ $n ____ " litere";`,
    blanks: [['strlen', 'mb_strlen', 'iconv_strlen'], ['.', ','], ['.', ',', '.=']],
    explanation: 'strlen() întoarce numărul de caractere al șirului (8 pentru "Chisinau"). Textele și variabila se unesc cu punctul (la echo se pot separa și prin virgulă).',
  },
  {
    type: 'fill',
    question: 'Completează codul cu operatorii de atribuire compusă: înmulțește $x cu 4, scade 2 din el, apoi adaugă valoarea lui $x la sfârșitul textului $msg. Se afișează: Nota: 10',
    code: `<?php
$x = 3;
$x ____ 4;
$x ____ 2;
$msg = "Nota: ";
$msg ____ $x;
echo $msg;`,
    blanks: [['*='], ['-='], ['.=']],
    explanation: '3 *= 4 dă 12, apoi 12 -= 2 dă 10. Operatorul .= adaugă la sfârșitul șirului, ca $msg = $msg . $x, deci rezultatul este "Nota: 10".',
  },
  {
    type: 'fill',
    question: 'Completează codul ca primul rând să LIPEASCĂ textele "5" și "3", al doilea să le ADUNE, iar al treilea să adauge textul ", Ana" la sfârșitul lui $m. Se afișează: 53, 8 și Salut, Ana (pe rânduri separate).',
    code: `<?php
$a = "5";
$b = "3";
echo $a ____ $b, "\\n";
echo $a ____ $b, "\\n";
$m = "Salut";
$m ____ ", Ana";
echo $m;`,
    blanks: [['.', ','], ['+', '+='], ['.=']],
    explanation: 'Punctul lipește texte: "5" . "3" este "53". Plusul adună numere: "5" + "3" este 8 (șirurile numerice sunt convertite). .= adaugă la sfârșitul șirului, ca $m = $m . ", Ana".',
  },
  {
    type: 'fill',
    question: 'Completează operatorii ca funcția verifica() să fie apelată doar când este nevoie: la primul if partea dreaptă nu se mai evaluează, la al doilea la fel, iar la al treilea condiția este negată (afișează ok). Se afișează: [v0][v1][v0]ok',
    code: `<?php
function verifica($n) { echo "[v$n]"; return $n > 0; }
if (verifica(0) ____ verifica(1)) { }
if (verifica(1) ____ verifica(2)) { }
if (____ verifica(0)) { echo "ok"; }`,
    blanks: [['&&', 'and', '??'], ['||', 'or', '??', '?:'], ['!']],
    explanation: 'verifica(0) este false, iar la && partea dreaptă nu se mai evaluează ([v0]). verifica(1) este true, iar la || partea dreaptă nu se mai evaluează ([v1]). La al treilea, ! inversează false în true, deci se afișează [v0] și apoi ok.',
  },
  {
    type: 'fill',
    question: 'Completează codul ca să calculeze media a două note, să o rotunjească la o zecimală și să afișeze „promovat” când media este cel puțin 5, altfel „respins”. Se afișează: 8.5 promovat',
    code: `<?php
$n1 = 9;
$n2 = 8;
$media = ($n1 ____ $n2) ____ 2;
echo ____($media, 1);
echo " " . ($media >= 5 ____ "promovat" : "respins");`,
    blanks: [['+', '+='], ['/'], ['round', 'number_format', 'print_r'], ['?']],
    explanation: 'Media este suma împărțită la 2: (9 + 8) / 2 = 8.5 (float). round($media, 1) rotunjește la o zecimală. Ternarul condiție ? valoare_true : valoare_false alege „promovat”.',
  },
];
