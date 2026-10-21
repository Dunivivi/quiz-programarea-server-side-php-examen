import { Question } from '../models/question';

export const PHP4_QUESTIONS: Question[] = [
  // ---------- THEORY (13) ----------
  { type: 'theory', question: 'Un if este scris fără acolade, iar sub el sunt două instrucțiuni echo indentate la fel. Care dintre ele aparține lui if?',
    options: ['Doar prima instrucțiune de după condiție', 'Ambele, deoarece sunt indentate la fel', 'Doar ultima instrucțiune dinaintea următoarei linii goale', 'Niciuna, PHP cere obligatoriu acolade și dă eroare'],
    correct: 0, explanation: 'Fără acolade, if controlează numai prima instrucțiune. Indentarea nu înseamnă nimic pentru PHP, de aceea a doua instrucțiune se execută întotdeauna. Regula de lucru: pune acoladele mereu.' },
  { type: 'theory', question: 'Variabila $d = "0" este testată cu isset($d) și cu empty($d). Ce rezultate se obțin?',
    options: ['isset = false, empty = false', 'isset = true, empty = false', 'isset = false, empty = true', 'isset = true, empty = true'],
    correct: 3, explanation: 'Șirul "0" există și nu este null, deci isset dă true. Totuși "0" este una dintre valorile considerate false, deci empty dă true. Acesta este rândul care produce cele mai multe erori la validarea formularelor.' },
  { type: 'theory', question: 'Ce se întâmplă dacă apelezi is_null($z) pentru o variabilă $z care nu a fost definită deloc?',
    options: ['Returnează false, fără niciun mesaj', 'Returnează true, fără niciun mesaj', 'Afișează mai întâi Warning: Undefined variable și apoi returnează true', 'Oprește scriptul cu o eroare fatală'],
    correct: 2, explanation: 'is_null() este o funcție obișnuită: variabila nedefinită produce Warning, apoi valoarea ei este tratată ca null și rezultatul este true. isset() și empty() nu produc niciodată Warning.' },
  { type: 'theory', question: 'Cu ce operator compară instrucțiunea switch valoarea expresiei cu fiecare case?',
    options: ['Cu ===, adică valoare și tip', 'Cu <=>, adică operatorul spaceship', 'Cu instanceof', 'Cu ==, adică o comparație slabă'],
    correct: 3, explanation: 'switch folosește comparația slabă ==. De aceea "0" se potrivește cu case 0. Dacă ai nevoie de comparație strictă, folosești match.' },
  { type: 'theory', question: 'Într-un switch, ramura unui case nu se termină cu break. Ce se întâmplă când acel case se potrivește?',
    options: ['PHP dă o eroare de sintaxă', 'Se execută numai instrucțiunile acelui case, apoi switch se termină oricum', 'Execuția continuă cu instrucțiunile cazurilor următoare, până la primul break sau până la sfârșitul switch-ului', 'Se execută și ramura default, dar numai aceasta'],
    correct: 2, explanation: 'Fără break, execuția „cade” în cazurile următoare, fără să mai compare valorile. Este cea mai frecventă greșeală la switch.' },
  { type: 'theory', question: 'Care dintre afirmațiile despre expresia match (PHP 8) este adevărată?',
    options: ['Compară strict, cu ===, și nu are nevoie de break', 'Compară slab, cu ==, la fel ca switch', 'Compară strict, dar fiecare ramură trebuie încheiată cu break', 'Este o instrucțiune care nu poate fi atribuită unei variabile'],
    correct: 0, explanation: 'match verifică și valoarea, și tipul, deci "0" nu se potrivește niciodată cu 0. Nu există cădere prin cazuri, deci nici break. Este o expresie, de aceea se atribuie unei variabile și se închide cu };.' },
  { type: 'theory', question: 'Ce se întâmplă când niciuna dintre ramurile unui match nu se potrivește și nu există ramura default?',
    options: ['match întoarce null și scriptul merge mai departe', 'match întoarce primul rezultat din listă', 'PHP aruncă UnhandledMatchError și oprește scriptul dacă eroarea nu este prinsă', 'Se afișează doar un Notice, iar variabila rămâne nedefinită'],
    correct: 2, explanation: 'match cere acoperirea tuturor cazurilor. Dacă nu se potrivește nimic și lipsește default, apare Fatal error: Uncaught UnhandledMatchError. La switch aceeași situație ar trece în tăcere.' },
  { type: 'theory', question: 'Ce rol are valoarea true în construcția match (true) { $nota >= 9 => ..., $nota >= 5 => ... }?',
    options: ['Face ca match să compare slab, nu strict', 'Este un parametru care înlocuiește ramura default', 'Obligă toate ramurile să se execute, nu doar prima', 'Este expresia comparată: se alege prima ramură a cărei condiție dă exact true'],
    correct: 3, explanation: 'Expresia comparată este true, iar fiecare ramură este o condiție. Se alege prima care dă true, exact ca la if...elseif. Se poate scrie la fel și switch (true), dar cu break la fiecare caz.' },
  { type: 'theory', question: 'Care este singura formă de „else if” care funcționează și în sintaxa alternativă (cu două puncte și endif;)?',
    options: ['else if (...):', 'elif (...):', 'elseif (...):', 'else: if (...):'],
    correct: 2, explanation: 'În sintaxa alternativă se scrie elseif într-un cuvânt. Cu else if: PHP dă Parse error (unexpected token "if", expecting ":").' },
  { type: 'theory', question: 'Ce face operatorul de coalescență în expresia $nume = $_GET["nume"] ?? "vizitator";, când cheia "nume" lipsește din $_GET?',
    options: ['Atribuie "vizitator", fără niciun Warning', 'Produce Warning: Undefined array key și atribuie null', 'Atribuie șirul gol, fără Warning', 'Atribuie false și continuă scriptul'],
    correct: 0, explanation: '$a ?? $b întoarce $a dacă acesta există și nu este null, altfel întoarce $b. Se comportă ca isset(), deci nu produce Warning dacă lipsește variabila sau cheia.' },
  { type: 'theory', question: 'Ce diferență esențială există între while și do...while?',
    options: ['do...while nu are condiție de oprire', 'do...while poate fi folosit numai cu tablouri', 'while verifică condiția după corp, do...while înainte', 'do...while verifică condiția după corp, deci corpul se execută cel puțin o dată'],
    correct: 3, explanation: 'La while condiția se verifică înainte, deci corpul poate să nu ruleze niciodată. La do...while corpul rulează cel puțin o dată, chiar dacă condiția este falsă de la început. După while (...) final este obligatoriu ;.' },
  { type: 'theory', question: 'Într-un foreach ($note as $nota) { $nota = $nota + 1; } ce se întâmplă cu elementele tabloului $note după buclă?',
    options: ['Toate cresc cu 1', 'Rămân neschimbate, pentru că $nota este o copie a elementului', 'Se modifică doar ultimul element', 'PHP dă eroare, pentru că nu poți schimba variabila din antet'],
    correct: 1, explanation: '$valoare este o copie a elementului. Dacă îi schimbi valoarea în corp, tabloul rămâne neschimbat.' },
  { type: 'theory', question: 'Ce înseamnă break 2; într-o buclă for aflată în interiorul altei bucle for?',
    options: ['Iese din ambele bucle, cea interioară și cea exterioară', 'Repetă de două ori bucla interioară', 'Sare peste doi pași ai buclei interioare', 'Iese doar din bucla interioară, ca break simplu'],
    correct: 0, explanation: 'Cifra de după break spune din câte niveluri de bucle se iese. break este același lucru cu break 1. La fel merge și continue 2.' },

  // ---------- ANALYSIS (8) ----------
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$stoc = 0;
if ($stoc > 0)
    echo "A";
    echo "B";
echo "C";`,
    options: ['ABC', 'B', 'C', 'BC'],
    correct: 3, explanation: 'Fără acolade, doar echo "A" aparține lui if și nu se execută (stocul este 0). echo "B" și echo "C" se execută întotdeauna, deci se afișează BC.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$cod = "0";
switch ($cod) {
    case 0:
        echo "numar";
        break;
    case "0":
        echo "text";
        break;
}`,
    options: ['text', 'numartext', 'numar', 'Nu afișează nimic'],
    correct: 2, explanation: 'switch compară cu ==, iar "0" == 0 este true. Execuția se oprește la primul case potrivit (case 0), deci se afișează numar.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$n = 2;
switch ($n) {
    case 1:
        echo "a";
    case 2:
        echo "b";
    case 3:
        echo "c";
        break;
    case 4:
        echo "d";
}`,
    options: ['bc', 'b', 'bcd', 'abc'],
    correct: 0, explanation: 'case 2 se potrivește, dar nu are break, deci execuția continuă în case 3. Acolo break oprește switch-ul. Se afișează bc.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$nota = 6;
$calificativ = match (true) {
    $nota >= 9 => "Excelent",
    $nota >= 7 => "Bine",
    $nota >= 5 => "Satisfacator",
    default => "Nesatisfacator",
};
echo "Nota $nota -> $calificativ";`,
    options: ['Nota 6 -> Bine', 'Nota 6 -> Nesatisfacator', 'Nota 6 -> Satisfacator', 'Nota 6 -> Excelent'],
    correct: 2, explanation: 'Se alege prima ramură a cărei condiție este true. 6 >= 9 și 6 >= 7 sunt false, iar 6 >= 5 este true. Se afișează Nota 6 -> Satisfacator.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$x = "0";
echo isset($x) ? "I" : "-";
echo empty($x) ? "E" : "-";
$y = null;
echo isset($y) ? "I" : "-";
echo empty($y) ? "E" : "-";`,
    options: ['IE-E', 'I-IE', 'IEI-', '-E-E'],
    correct: 0, explanation: 'Pentru "0": isset este true (I), empty este true (E). Pentru null: isset este false (-), empty este true (E). Rezultat: IE-E.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$a = null;
$b = 0;
echo $a ?? "x";
echo $b ?? "y";
echo $c ?? "z";`,
    options: ['xyz', '0yz', 'xz', 'x0z'],
    correct: 3, explanation: '$a este null, deci se ia "x". $b este 0, dar 0 nu este null, deci ?? îl păstrează și afișează 0. $c nu există, deci se ia "z", fără Warning. Rezultat: x0z.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$i = 10;
do {
    echo "A";
    $i++;
} while ($i < 5);
echo $i;`,
    options: ['10', 'A11', 'A10', '11'],
    correct: 1, explanation: 'Corpul do...while rulează o dată înainte de verificarea condiției: se afișează A și $i devine 11. Condiția 11 < 5 este falsă, deci bucla se oprește. Apoi se afișează 11.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= 3; $j++) {
        if ($j == 2) {
            continue 2;
        }
        echo "$i$j,";
    }
}`,
    options: ['11,13,21,23,31,33,', '11,21,31,', '11,12,13,', '11,'],
    correct: 1, explanation: 'La fiecare $i se afișează $j = 1, apoi la $j = 2 continue 2 sare la pasul următor al buclei exterioare. Rezultat: 11,21,31,.' },

  // ---------- FILL (9) ----------
  { type: 'fill', question: 'Completează codul ca să afișeze Minor pentru o persoană sub 18 ani, Adult pentru 18–64 de ani și Senior în rest. Pentru $varsta = 17 se afișează Minor.', code: `<?php
$varsta = 17;
if ($varsta ____ 18) {
    echo "Minor";
} ____ ($varsta < 65) {
    echo "Adult";
} ____ {
    echo "Senior";
}`,
    blanks: [['<'], ['elseif', 'else if'], ['else']],
    explanation: 'Prima condiție verifică minoratul ($varsta < 18), a doua ramură este elseif, iar ramura care acoperă restul cazurilor este else.' },
  { type: 'fill', question: 'Completează switch-ul ca ambele zile, sâmbătă și duminică, să afișeze Weekend, iar celelalte zile să afișeze Zi lucratoare.', code: `<?php
$zi = "duminica";
switch ($zi) {
    ____ "sambata":
    ____ "duminica":
        echo "Weekend";
        ____;
    default:
        echo "Zi lucratoare";
}`,
    blanks: [['case'], ['case'], ['break']],
    explanation: 'Fiecare etichetă se scrie cu case. Primul case este lăsat intenționat fără instrucțiuni, ca execuția să cadă în al doilea. După echo urmează break, ca să nu se ajungă și în default.' },
  { type: 'fill', question: 'Completează expresia care transformă codul HTTP într-un text. Pentru 404 trebuie să se afișeze Negasit, iar pentru orice alt cod necunoscut Cod necunoscut.', code: `<?php
$cod = 404;
$text = ____ ($cod) {
    200 ____ "OK",
    404 => "Negasit",
    ____ => "Cod necunoscut",
};
echo $text;`,
    blanks: [['match'], ['=>'], ['default']],
    explanation: 'match este expresia care întoarce o valoare. Ramurile se scriu cu =>, iar ramura pentru „niciun alt caz” este default (altfel un cod neacoperit ar produce UnhandledMatchError).' },
  { type: 'fill', question: 'Completează match-ul ca să stabilească calificativul după notă: Bine pentru 7 sau mai mult, Satisfacator pentru 5 sau mai mult, altfel Slab. Pentru $nota = 6 se afișează Satisfacator.', code: `<?php
$nota = 6;
$c = match (____) {
    $nota >= 7 => "Bine",
    ____ >= 5 => "Satisfacator",
    ____ => "Slab",
};
echo $c;`,
    blanks: [['true'], ['$nota'], ['default']],
    explanation: 'Cu match (true) fiecare ramură este o condiție, iar prima care dă true este aleasă. A doua condiție compară tot $nota, iar default prinde restul cazurilor.' },
  { type: 'fill', question: 'Completează codul ca vârsta să fie 18 când cheia "varsta" lipsește din $_GET, iar mesajul să fie Major pentru 18 ani sau mai mult, altfel Minor.', code: `<?php
$varsta = $_GET["varsta"] ____ 18;
$msg = ($varsta >= 18) ____ "Major" ____ "Minor";
echo $msg;`,
    blanks: [['??'], ['?'], [':']],
    explanation: '?? alege valoarea implicită când cheia lipsește sau este null, fără Warning. Ternarul se scrie conditie ? daca_adevarat : daca_fals.' },
  { type: 'fill', question: 'Completează fișierul PHP cu sintaxa alternativă, ca să afișeze o linie în funcție de stoc: Stoc mare pentru peste 5, Ultimele bucati pentru 1–5, Stoc epuizat la 0. Pentru $stoc = 3 se afișează Ultimele bucati.', code: `<?php $stoc = 3; ?>
<?php if ($stoc > 5): ?>
Stoc mare
<?php ____ ($stoc > 0): ?>
Ultimele bucati
<?php ____: ?>
Stoc epuizat
<?php ____; ?>`,
    blanks: [['elseif'], ['else'], ['endif']],
    explanation: 'În sintaxa alternativă acoladele devin : și endif;. Pentru a doua ramură se scrie elseif într-un cuvânt, apoi else:, iar structura se închide cu endif;.' },
  { type: 'fill', question: 'Completează bucla care afișează numerele 1, 2, 3 și apoi, după un |, valoarea finală a lui $i. Corpul trebuie să se execute cel puțin o dată, iar $i se mărește cu 1 la fiecare pas.', code: `<?php
$i = 1;
____ {
    echo $i;
    $i____;
} while ($i <= 3);
echo "|" . ____;`,
    blanks: [['do'], ['++', '+= 1', '+=1'], ['$i']],
    explanation: 'Bucla do...while începe cu do și verifică condiția după corp. Contorul se incrementează cu $i++. La final $i păstrează ultima valoare, adică 4, deci se afișează 123|4.' },
  { type: 'fill', question: 'Completează bucla for ca să afișeze doar numerele pare de la 1 la 10, separate prin spațiu: numerele impare trebuie sărite.', code: `<?php
for ($i = ____; $i <= 10; $i____) {
    if ($i % 2 == 1) {
        ____;
    }
    echo $i . " ";
}`,
    blanks: [['1'], ['++', '+= 1', '+=1'], ['continue']],
    explanation: 'Contorul pornește de la 1 și crește cu $i++. La numerele impare, continue sare peste restul corpului pentru pasul curent, dar bucla merge mai departe.' },
  { type: 'fill', question: 'Completează foreach-ul care parcurge prețurile cu cheie și valoare și se oprește definitiv la primul produs mai scump de 100 lei, fără să-l afișeze. Se afișează doar paine și lapte.', code: `<?php
$preturi = ["paine" => 12, "lapte" => 18, "cascaval" => 145];
____ ($preturi ____ $produs ____ $pret) {
    if ($pret > 100) {
        ____;
    }
    echo "$produs: $pret ";
}`,
    blanks: [['foreach'], ['as'], ['=>'], ['break']],
    explanation: 'Forma cu cheie și valoare este foreach ($tablou as $cheie => $valoare). break iese definitiv din buclă, deci cascaval nu mai este afișat.' },
];
