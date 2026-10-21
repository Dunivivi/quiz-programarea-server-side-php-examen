import { Question } from '../models/question';

export const PHP6B_QUESTIONS: Question[] = [
  // ---------- THEORY (15) ----------
  {
    type: 'theory',
    question: 'Ce înseamnă faptul că foreach lucrează „pe o copie” a valorii în forma foreach ($note as $n) { $n = $n * 2; }?',
    options: [
      'Fiecare element din tablou este dublat, pentru că $n este chiar elementul',
      'Tabloul $note rămâne neschimbat; modificarea afectează doar variabila $n',
      'PHP dă eroare, pentru că $n nu poate fi modificată în buclă',
      'Doar ultimul element al tabloului este dublat',
    ],
    correct: 1,
    explanation: 'La fiecare pas valoarea elementului este copiată în $n. Schimbarea lui $n nu atinge tabloul original.',
  },
  {
    type: 'theory',
    question: 'Ce întoarce array_pop($a) și ce se întâmplă cu tabloul?',
    options: [
      'Întoarce primul element și îl lasă în tablou',
      'Întoarce numărul de elemente rămase',
      'Întoarce un tablou nou, fără ultimul element, iar $a rămâne neschimbat',
      'Întoarce ultimul element, iar $a rămâne fără el',
    ],
    correct: 3,
    explanation: 'array_pop scoate ultimul element din tabloul dat prin referință și îl întoarce ca rezultat.',
  },
  {
    type: 'theory',
    question: 'Care expresie calculează media notelor din $note = [9, 10, 8, 7], adică 8.5?',
    options: [
      'array_sum($note) * count($note)',
      'array_sum($note) / count($note)',
      'count($note) / array_sum($note)',
      'array_sum($note) + count($note)',
    ],
    correct: 1,
    explanation: 'Media este suma valorilor împărțită la numărul lor: array_sum($note) / count($note) = 34 / 4 = 8.5.',
  },
  {
    type: 'theory',
    question: 'Ce întoarce array_keys($elev) pentru $elev = ["nume" => "Ana", "varsta" => 20], iar array_values($elev)?',
    options: [
      'array_keys dă ["Ana", 20], iar array_values dă ["nume", "varsta"]',
      'array_keys dă ["nume", "varsta"], iar array_values dă ["Ana", 20]',
      'Ambele dau tabloul ["nume", "varsta"]',
      'array_keys dă [0, 1], iar array_values dă ["Ana", 20]',
    ],
    correct: 1,
    explanation: 'array_keys întoarce tabloul cheilor, iar array_values tabloul valorilor, reindexat de la 0.',
  },
  {
    type: 'theory',
    question: 'Tabloul $e = ["nume" => "Ana", "tel" => null]. Prin ce diferă isset($e["tel"]) de array_key_exists("tel", $e)?',
    options: [
      'isset dă false (valoarea este null), iar array_key_exists dă true (cheia există)',
      'Ambele dau true, pentru că cheia există',
      'isset dă true, iar array_key_exists dă false',
      'Ambele dau false, pentru că valoarea este null',
    ],
    correct: 0,
    explanation: 'isset consideră „nesetată” o valoare null; array_key_exists verifică doar prezența cheii, indiferent de valoare.',
  },
  {
    type: 'theory',
    question: 'De ce se pune print_r($tablou) între etichetele <pre> și </pre> când rezultatul se vede în browser?',
    options: [
      'Fără <pre>, print_r nu afișează nimic',
      'Fără <pre>, print_r afișează doar prima cheie',
      'Pentru că <pre> păstrează rândurile noi și spațiile din ieșire, iar tabloul devine lizibil',
      'Pentru că <pre> sortează tabloul înainte de afișare',
    ],
    correct: 2,
    explanation: 'print_r pune structura pe mai multe rânduri cu spații, dar HTML le comprimă într-un singur rând; <pre> păstrează formatarea.',
  },
  {
    type: 'theory',
    question: 'Cum se interpretează array_slice($a, 1, 2)?',
    options: [
      'Elementele de la indicele 1 până la indicele 2 inclusiv',
      'Elementele cu cheile 1 și 2, chiar dacă tabloul este asociativ',
      'Primele 2 elemente, după ce se șterge elementul de la indicele 1',
      'Începând de la poziția 1, se iau 2 elemente; al treilea parametru este lungimea, nu indicele final',
    ],
    correct: 3,
    explanation: 'Al doilea parametru este poziția de start, al treilea este câte elemente se iau. Tabloul original nu se modifică.',
  },
  {
    type: 'theory',
    question: 'Care este efectul funcției ksort() asupra unui tablou asociativ?',
    options: [
      'Sortează crescător după chei, iar fiecare cheie rămâne legată de valoarea ei',
      'Sortează crescător după valori și pierde cheile',
      'Sortează descrescător după chei',
      'Sortează după valori și păstrează cheile',
    ],
    correct: 0,
    explanation: 'ksort ordonează după chei și păstrează perechile; krsort face același lucru, descrescător. asort/arsort sortează după valori.',
  },
  {
    type: 'theory',
    question: 'Ce face array_unshift($a, "x")?',
    options: [
      'Adaugă "x" la sfârșitul tabloului',
      'Adaugă "x" la începutul tabloului; cheile numerice existente sunt renumerotate',
      'Scoate primul element și îl înlocuiește cu "x"',
      'Șterge elementul "x", dacă există în tablou',
    ],
    correct: 1,
    explanation: 'array_unshift pune elementul în față și reindexează cheile numerice. array_push adaugă la sfârșit.',
  },
  {
    type: 'theory',
    question: 'Ce fel de valori poate conține un același tablou PHP?',
    options: [
      'Numai valori de același tip, de exemplu numai numere',
      'Numai numere și șiruri de text',
      'Valori de tipuri diferite: numere, șiruri, valori logice și chiar alte tablouri',
      'Orice, dar numai dacă tabloul este asociativ',
    ],
    correct: 2,
    explanation: 'Valorile unui tablou pot fi de tipuri diferite în același tablou, inclusiv alte tablouri (tablouri multidimensionale).',
  },
  {
    type: 'theory',
    question: 'Ce valoare întoarce count($gol) după $gol = [];?',
    options: [
      '1, pentru că există o variabilă',
      'PHP dă eroare, pentru că tabloul nu are elemente',
      '0, pentru că un tablou gol nu are elemente',
      'null',
    ],
    correct: 2,
    explanation: 'Un tablou gol se scrie [], iar count([]) este 0.',
  },
  {
    type: 'theory',
    question:
      'Pentru $a = ["x", "y", "z"], după unset($a[1]) se rulează: for ($i = 0; $i < count($a); $i++) { echo $a[$i]; }. Care este problema?',
    options: [
      'Bucla se execută de trei ori și citește și cheia 2, care nu mai există',
      'Bucla nu se execută deloc, pentru că unset golește tabloul',
      'Nu există nicio problemă; PHP renumerotează automat cheile',
      'Cheile rămase sunt 0 și 2, dar bucla cere 0 și 1; la $a[1] apare avertismentul „Undefined array key”, iar elementul "z" nu este afișat',
    ],
    correct: 3,
    explanation: 'unset nu renumerotează. count dă 2, deci bucla citește $a[0] și $a[1]; cheia 1 lipsește. foreach evită problema.',
  },
  {
    type: 'theory',
    question: 'Pentru $produse cu 3 rânduri, fiecare având 3 câmpuri, ce întoarce count($produse)?',
    options: [
      '3, numărul de rânduri (elemente de pe primul nivel)',
      '9, numărul total de valori',
      '6, suma dintre rânduri și câmpuri',
      '1, pentru că este un singur tablou',
    ],
    correct: 0,
    explanation: 'count numără implicit doar elementele de pe primul nivel; fiecare rând, deși este un tablou, contează ca un singur element.',
  },
  {
    type: 'theory',
    question: 'Prin ce diferă arsort() de rsort()?',
    options: [
      'rsort sortează după chei, iar arsort după valori',
      'arsort sortează crescător, rsort descrescător',
      'Sunt identice',
      'Ambele sortează descrescător după valori, dar arsort păstrează cheile, iar rsort le pierde și reindexează de la 0',
    ],
    correct: 3,
    explanation: 'Litera „a” din asort/arsort vine de la „asociativ”: păstrează legătura cheie → valoare.',
  },
  {
    type: 'theory',
    question: 'Ce este corect despre scrierea unui tablou cu array(...) față de [...]?',
    options: [
      'Sunt două sintaxe pentru același lucru; cea cu [] este cea recomandată',
      'array() creează tablou asociativ, iar [] doar tablou indexat',
      'array() este mai rapid, iar [] a fost eliminat în PHP 8',
      'Doar [] permite valori de tipuri diferite',
    ],
    correct: 0,
    explanation: 'array(1, 2) și [1, 2] produc exact același tablou; cursul recomandă forma scurtă [].',
  },

  // ---------- ANALYSIS (9) ----------
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = ["mar", "para", "prun"];
array_push($a, "cais");
array_shift($a);
array_unshift($a, "kiwi");
echo implode(",", $a), "|", count($a);`,
    options: ['kiwi,mar,para,prun,cais|5', 'kiwi,para,prun,cais|4', 'para,prun,cais,kiwi|4', 'kiwi,mar,para,prun|4'],
    correct: 1,
    explanation: 'array_push adaugă "cais" la sfârșit (4 elemente), array_shift scoate "mar", array_unshift adaugă "kiwi" la început. Rezultat: kiwi,para,prun,cais cu 4 elemente.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = ["a", "b", "c", "d"];
$x = array_pop($a);
$y = array_shift($a);
echo $x, $y, count($a);`,
    options: ['ad2', 'da2', 'da4', 'ad3'],
    correct: 1,
    explanation: 'array_pop scoate "d", array_shift scoate "a"; rămân "b" și "c", deci count dă 2. Se afișează d, a, 2.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$n = [1, 2, 3];
foreach ($n as $v) {
    $v = $v * 2;
}
echo implode(",", $n), " ", $v;`,
    options: ['2,4,6 6', '1,2,3 3', '1,2,3 6', '2,4,6 3'],
    correct: 2,
    explanation: '$v este o copie, deci $n rămâne 1,2,3. După buclă, $v păstrează ultima valoare atribuită: 3 * 2 = 6.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = [5 => "x", "y", "k" => "z"];
$a[] = "w";
$a["5"] = "v";
echo count($a), $a[5], $a[7];`,
    options: ['4vw', '5vw', '4xw', '4vy'],
    correct: 0,
    explanation: '"y" primește cheia 6, iar "w" cheia 7 (cel mai mare indice numeric plus unu). Cheia "5" este convertită în întregul 5, deci "v" o înlocuiește pe "x". Rămân 4 elemente: 4, v (cheia 5), w (cheia 7).',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$stoc = ["mouse" => 30, "monitor" => 5];
echo in_array(5, $stoc) ? "da" : "nu";
echo in_array("monitor", $stoc) ? "da" : "nu";
echo array_key_exists("monitor", $stoc) ? "da" : "nu";`,
    options: ['dadada', 'nunuda', 'danuda', 'danunu'],
    correct: 2,
    explanation: 'in_array caută printre valori: 5 există (da), dar "monitor" este o cheie, nu o valoare (nu). array_key_exists caută printre chei: da. Rezultat: danuda.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$e = ["nume" => "Ana", "tel" => null];
echo isset($e["tel"]) ? 1 : 0;
echo array_key_exists("tel", $e) ? 1 : 0;
echo isset($e["x"]) ? 1 : 0;`,
    options: ['110', '001', '010', '011'],
    correct: 2,
    explanation: 'isset este false pentru valoarea null (0); array_key_exists este true, cheia există (1); cheia "x" nu există (0).',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = [10, 20, 30, 40, 50];
$s = array_slice($a, 2, 2);
echo implode(",", $s), "|", $s[0], "|", count($a);`,
    options: ['30,40|30|2', '30,40|40|5', '30,40|30|5', '20,30|30|5'],
    correct: 2,
    explanation: 'array_slice($a, 2, 2) începe de la poziția 2 și ia 2 elemente: 30, 40. Rezultatul are cheile 0 și 1, deci $s[0] este 30. Tabloul $a rămâne neschimbat, cu 5 elemente.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$t = [[1, 2, 3], [4, 5], [6]];
$s = 0;
foreach ($t as $r) {
    $s += count($r) * array_sum($r);
}
echo count($t), " ", $s;`,
    options: ['3 21', '6 42', '3 42', '3 6'],
    correct: 2,
    explanation: 'count($t) este 3. Suma: 3 * 6 + 2 * 9 + 1 * 6 = 18 + 18 + 6 = 42.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$x = explode(" ", "rosu verde albastru");
echo count($x), "|", $x[2], "|", implode("-", $x);`,
    options: ['3|albastru|rosu-verde-albastru', '3|verde|rosu-verde-albastru', '3|albastru|rosu verde albastru', '2|albastru|rosu-verde'],
    correct: 0,
    explanation: 'explode taie șirul la fiecare spațiu în 3 elemente. $x[2] este "albastru", iar implode le lipește cu "-".',
  },
  {
    type: 'fill',
    question:
      'Completează codul: adaugă "c" la sfârșitul tabloului cu o funcție, scoate apoi ultimul element în $u și afișează câte elemente au rămas.',
    code: `<?php
$s = ["a", "b"];
____($s, "c");
$u = ____($s);
echo ____($s);`,
    blanks: [['array_push'], ['array_pop'], ['count', 'sizeof']],
    explanation: 'array_push adaugă "c", array_pop îl scoate înapoi, iar count dă 2.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: dacă tabloul are cheia "email", afișează valoarea ei; altfel afișează „lipsa”. La final afișează numărul de elemente al tabloului.',
    code: `<?php
$user = ["nume" => "Ana", "email" => "ana@ex.ro"];
if (____("email", $user)) {
    echo $user["email"];
} ____ {
    echo "lipsa";
}
echo " ", ____($user);`,
    blanks: [['array_key_exists', 'key_exists'], ['else'], ['count', 'sizeof']],
    explanation: 'array_key_exists verifică prezența cheii, else acoperă cazul contrar, count dă 2.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: pentru fiecare elev afișează numele și media notelor sale, în forma „Ana: 9.5”.',
    code: `<?php
$clasa = ["Ana" => [9, 10], "Dan" => [7, 8]];
____ ($clasa as ____ => $note) {
    echo $nume, ": ", ____($note) / count($note), "\\n";
}`,
    blanks: [['foreach'], ['$nume'], ['array_sum']],
    explanation: 'foreach parcurge perechile nume => note; $nume este cheia; array_sum / count dă media.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: sortează elevii descrescător după notă, păstrând numele, ia primii doi din clasament și afișează numele lor separate prin virgulă (Dan,Eva).',
    code: `<?php
$v = ["Ana" => 7, "Dan" => 10, "Eva" => 9];
____($v);
$top = ____($v, 0, 2);
echo implode(",", ____($top));`,
    blanks: [['arsort'], ['array_slice'], ['array_keys']],
    explanation: 'arsort ordonează descrescător după valori păstrând cheile; array_slice ia primele 2; array_keys dă numele.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: transformă șirul într-un tablou de numere, apoi afișează suma lor și numărul lor, în forma „27 din 3”.',
    code: `<?php
$str = "4,8,15";
$n = ____(",", $str);
echo ____($n), " din ", ____($n);`,
    blanks: [['explode'], ['array_sum'], ['count', 'sizeof']],
    explanation: 'explode taie șirul în 3 elemente; suma este 27; count dă 3.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: ia cheile tabloului, verifică dacă "mouse" se află printre ele și afișează suma tuturor stocurilor.',
    code: `<?php
$stoc = ["mouse" => 30, "monitor" => 5];
$nume = ____($stoc);
if (____("mouse", $nume)) {
    echo "Exista ";
}
echo ____($stoc);`,
    blanks: [['array_keys'], ['in_array'], ['array_sum']],
    explanation: 'array_keys dă ["mouse", "monitor"], in_array găsește "mouse" în acest tablou de valori, iar array_sum dă 35. Se afișează Exista 35.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: adaugă "a" la început, unește tabloul cu ["d"], șterge elementul cu cheia 1, renumerotează cheile și afișează literele lipite (acd).',
    code: `<?php
$a = ["b", "c"];
____($a, "a");
$b = ____($a, ["d"]);
unset($b[1]);
$b = ____($b);
echo implode("", $b);`,
    blanks: [['array_unshift'], ['array_merge'], ['array_values']],
    explanation: 'După array_unshift: a,b,c; după array_merge: a,b,c,d; unset($b[1]) șterge "b"; array_values reindexează; rezultatul este acd.',
  },
  {
    type: 'fill',
    question:
      'Completează codul care numără de câte ori apare fiecare literă: dacă litera are deja o cheie în $nr, mărește contorul cu 1, altfel îl creează cu 1. La final afișează numărul de apariții ale literei "a".',
    code: `<?php
$litere = ["a", "b", "a", "c", "a"];
$nr = [];
foreach ($litere as $l) {
    if (____($l, $nr)) {
        $nr[$l]____;
    } else {
        $nr[$l] = 1;
    }
}
echo $nr[____];`,
    blanks: [['array_key_exists', 'key_exists'], ['++', '+= 1', '+=1'], ['"a"', "'a'"]],
    explanation: 'array_key_exists verifică dacă litera are deja contor; ++ îl mărește; $nr["a"] este 3.',
  },
];
