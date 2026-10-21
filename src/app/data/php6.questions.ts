import { Question } from '../models/question';

export const PHP6_QUESTIONS: Question[] = [
  // ---------- THEORY (15) ----------
  {
    type: 'theory',
    question: 'Ce este, de fapt, un tablou (array) în PHP?',
    options: [
      'Un vector cu dimensiune fixă, declarată dinainte, cu indici numerici consecutivi de la 0',
      'O hartă ordonată cheie → valoare, în care cheia poate fi număr întreg sau șir de text',
      'O listă care poate conține doar valori de același tip',
      'Un tip de date special, folosit doar pentru liste cu chei numerice',
    ],
    correct: 1,
    explanation:
      'Tabloul PHP este o hartă ordonată cheie → valoare: crește singur, păstrează ordinea introducerii, cheile pot fi întregi sau șiruri, iar valorile pot avea tipuri diferite.',
  },
  {
    type: 'theory',
    question: 'Un tablou indexat $t, fără „goluri” în chei, are n elemente. Care este ultimul său indice?',
    options: ['n', 'n + 1', 'n - 1, adică count($t) - 1', '1, pentru că indicii pornesc de la 1'],
    correct: 2,
    explanation: 'Indicii pornesc de la 0, deci ultimul indice este count($t) - 1.',
  },
  {
    type: 'theory',
    question: 'Ce face instrucțiunea $note[] = 6; ?',
    options: [
      'Adaugă valoarea 6 la sfârșitul tabloului, PHP alegând singur următorul indice liber',
      'Înlocuiește primul element al tabloului cu 6',
      'Golește tabloul și îl umple cu valoarea 6',
      'Produce eroare, pentru că lipsește indicele dintre paranteze',
    ],
    correct: 0,
    explanation: 'Parantezele pătrate goale adaugă un element nou la sfârșit, cu următorul indice numeric disponibil.',
  },
  {
    type: 'theory',
    question: 'Care afirmație despre „tablou indexat” și „tablou asociativ” în PHP este corectă?',
    options: [
      'Sunt două tipuri de date diferite, cu funcții proprii',
      'Un tablou asociativ nu poate fi parcurs cu foreach',
      'Un tablou nu poate avea în același timp chei numerice și chei text',
      'Este același tip de date; diferă doar cheile: numere generate automat sau șiruri alese de programator',
    ],
    correct: 3,
    explanation: 'În PHP există un singur tip array. „Indexat” și „asociativ” descriu doar felul în care sunt folosite cheile.',
  },
  {
    type: 'theory',
    question: 'Ce se întâmplă cu cheia scrisă ca șir "3" într-un tablou, de exemplu ["3" => "trei"]?',
    options: [
      'Rămâne șirul "3", pentru că este scrisă între ghilimele',
      'Este convertită automat în numărul întreg 3',
      'Produce o eroare, deoarece cheile text nu pot arăta ca niște numere',
      'Este ignorată, iar elementul primește indicele 0',
    ],
    correct: 1,
    explanation: 'Un șir care reprezintă un număr întreg zecimal este convertit automat în cheie întreagă.',
  },
  {
    type: 'theory',
    question: 'Ce se întâmplă dacă într-un tablou folosești de două ori aceeași cheie, de exemplu ["a" => 1, "a" => 2]?',
    options: [
      'Tabloul păstrează ambele valori, într-un tablou interior',
      'PHP oprește scriptul cu o eroare fatală',
      'A doua valoare o înlocuiește pe prima; tabloul are un singur element cu cheia "a"',
      'Rămâne prima valoare, iar a doua este ignorată',
    ],
    correct: 2,
    explanation: 'Cheile sunt unice: ultima valoare scrisă pentru o cheie o înlocuiește pe cele anterioare.',
  },
  {
    type: 'theory',
    question:
      'Tabloul $produse conține trei produse, fiecare fiind un tablou asociativ cu cheile "denumire", "pret" și "cantitate". Cum accesezi prețul celui de-al treilea produs?',
    options: [
      '$produse[2]["pret"]',
      '$produse[3]["pret"]',
      '$produse["pret"][2]',
      '$produse["pret"][3]',
    ],
    correct: 0,
    explanation: 'Se citește de la stânga la dreapta: întâi rândul (al treilea produs are indicele 2), apoi câmpul "pret".',
  },
  {
    type: 'theory',
    question: 'În foreach ($elev as $k => $v), ce primesc variabilele $k și $v la fiecare pas?',
    options: [
      '$k primește numărul pasului, iar $v primește numărul de elemente ale tabloului',
      '$k primește valoarea, iar $v primește cheia',
      '$k primește valoarea elementului, iar $v primește valoarea următoare',
      '$k primește cheia perechii curente, iar $v primește valoarea ei',
    ],
    correct: 3,
    explanation: 'Forma cu => copiază la fiecare pas cheia în prima variabilă și valoarea în a doua.',
  },
  {
    type: 'theory',
    question: 'Cum verifici corect dacă array_search("mar", $a) a găsit valoarea, știind că „mar” poate fi chiar pe poziția 0?',
    options: [
      'if (array_search("mar", $a)) — 0 este o cheie validă, deci intră în if',
      'if (array_search("mar", $a) !== false) — se compară strict cu false',
      'if (array_search("mar", $a) > 0)',
      'if (array_search("mar", $a) == null)',
    ],
    correct: 1,
    explanation:
      'array_search întoarce cheia găsită sau false. Cheia 0 se comportă ca false într-un if simplu, de aceea se folosește comparația strictă !== false.',
  },
  {
    type: 'theory',
    question: 'Ce efect are unset($a[1]) asupra cheilor rămase și cum obții din nou indici consecutivi?',
    options: [
      'Cheile se renumerotează automat, iar array_values nu mai este necesară',
      'Elementul rămâne în tablou, dar primește valoarea null',
      'Cheia 1 dispare, celelalte chei rămân neschimbate; indicii 0, 1, 2 … se recapătă cu array_values($a)',
      'Se șterge tot tabloul, iar $a devine null',
    ],
    correct: 2,
    explanation: 'unset șterge elementul, dar nu renumerotează; array_values întoarce un tablou reindexat de la 0.',
  },
  {
    type: 'theory',
    question: 'Prin ce diferă sort() de asort()?',
    options: [
      'asort sortează crescător după valori și păstrează cheile; sort sortează tot după valori, dar reindexează 0, 1, 2 …',
      'sort sortează după chei, iar asort după valori',
      'sort sortează descrescător, iar asort crescător',
      'Nu diferă; sunt două nume pentru aceeași funcție',
    ],
    correct: 0,
    explanation: 'sort și asort sortează crescător după valori; doar asort păstrează asocierea cheie → valoare (sort pierde cheile).',
  },
  {
    type: 'theory',
    question: 'Ce trebuie să întoarcă funcția de comparare dată lui usort()?',
    options: [
      'true dacă primul element este mai mic, false în caz contrar',
      'Tabloul sortat',
      'Doar valorile 1 sau 2, după care element e mai mare',
      'Un număr negativ, 0 sau pozitiv; operatorul <=> face exact această comparație',
    ],
    correct: 3,
    explanation: 'Funcția primește două elemente și întoarce număr negativ, 0 sau pozitiv. Pentru ordine descrescătoare se inversează termenii.',
  },
  {
    type: 'theory',
    question: 'Care este legătura dintre explode() și implode()?',
    options: [
      'Sunt funcții identice, cu nume diferite',
      'Sunt inverse: explode taie un șir într-un tablou după un separator, implode lipește elementele unui tablou într-un șir',
      'explode lipește un tablou într-un șir, iar implode taie un șir într-un tablou',
      'Ambele întorc un tablou, dar implode îl sortează',
    ],
    correct: 1,
    explanation: 'explode(",", $sir) produce un tablou; implode(", ", $tablou) produce un șir. Sunt operații inverse.',
  },
  {
    type: 'theory',
    question: 'Ce se întâmplă când citești un element cu o cheie care nu există într-un tablou, iar cum poți evita problema?',
    options: [
      'PHP întoarce automat 0 și nu semnalează nimic',
      'PHP oprește scriptul cu o eroare fatală; nu se poate evita',
      'PHP dă avertismentul „Undefined array key”; se evită verificând întâi cu array_key_exists sau isset',
      'PHP creează cheia nouă cu valoarea false',
    ],
    correct: 2,
    explanation: 'Citirea unei chei inexistente dă avertismentul Undefined array key și valoarea null. Verifici înainte cu array_key_exists() sau isset().',
  },
  {
    type: 'theory',
    question: 'Ce face array_shift($a)?',
    options: [
      'Scoate primul element din tablou și îl întoarce; elementele rămase se reindexează',
      'Scoate ultimul element din tablou și îl întoarce',
      'Adaugă un element la începutul tabloului',
      'Sortează tabloul crescător',
    ],
    correct: 0,
    explanation: 'array_shift elimină și întoarce primul element; array_pop face același lucru pentru ultimul; array_unshift adaugă la început.',
  },

  // ---------- ANALYSIS (9) ----------
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$note = [9, 10, 8, 7];
$note[] = 6;
$note[1] = 5;
echo count($note), " ", $note[1], " ", $note[4];`,
    options: ['4 5 6', '5 5 6', '5 10 6', '5 5 7'],
    correct: 1,
    explanation: 'După adăugare sunt 5 elemente; $note[1] a fost înlocuit cu 5; $note[4] este ultimul element adăugat, 6.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$m = [10 => "zece", "a" => "A", "3" => "trei", "text"];
$m[] = "adaugat";
echo implode(",", array_keys($m));`,
    options: ['10,a,3,4,5', '3,10,a,11,12', '10,a,3,11,12', '0,1,2,3,4'],
    correct: 2,
    explanation: 'Se păstrează ordinea introducerii. Elementele fără cheie primesc maximul numeric existent plus 1: "text" are 11, "adaugat" are 12.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$elev = ["nume" => "Ana", "varsta" => 20];
foreach ($elev as $k => $v) {
    echo "$k=$v;";
}`,
    options: ['Ana=nume;20=varsta;', 'nume=Ana;varsta=20;', '0=Ana;1=20;', 'nume=Ana varsta=20'],
    correct: 1,
    explanation: '$k este cheia, $v valoarea; fiecare pereche se afișează în forma cheie=valoare; urmată de punct și virgulă.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = ["mar", "para", "prun"];
unset($a[1]);
$a[] = "cais";
echo implode(",", array_keys($a));`,
    options: ['0,1,2', '0,1,3', '0,2,1', '0,2,3'],
    correct: 3,
    explanation: 'unset nu renumerotează: rămân cheile 0 și 2. Noul element primește maximul existent plus 1, adică 3.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$a = ["mar", "para"];
$r = array_search("mar", $a);
if ($r) {
    echo "gasit";
} else {
    echo "negasit";
}`,
    options: ['gasit', 'negasit', '0', 'Nu afișează nimic'],
    correct: 1,
    explanation: 'array_search întoarce cheia 0, care într-un if se comportă ca false, deci se execută ramura else.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$stoc = ["mouse" => 30, "monitor" => 5, "tastatura" => 12];
asort($stoc);
echo implode(",", array_keys($stoc)), " ";
sort($stoc);
echo implode(",", array_keys($stoc));`,
    options: [
      'monitor,tastatura,mouse 0,1,2',
      'monitor,tastatura,mouse monitor,tastatura,mouse',
      'monitor,mouse,tastatura 0,1,2',
      'mouse,monitor,tastatura 5,12,30',
    ],
    correct: 0,
    explanation: 'asort sortează după valori (5, 12, 30) și păstrează cheile; sort sortează la fel, dar pierde cheile și reindexează 0, 1, 2.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$p = [["n" => "A", "pret" => 350], ["n" => "B", "pret" => 180], ["n" => "C", "pret" => 2400]];
usort($p, function ($a, $b) {
    return $b["pret"] <=> $a["pret"];
});
foreach ($p as $x) {
    echo $x["n"];
}`,
    options: ['ABC', 'BAC', 'CBA', 'CAB'],
    correct: 3,
    explanation: 'Termenii sunt inversați, deci ordinea este descrescătoare după preț: 2400 (C), 350 (A), 180 (B).',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$produse = [
    ["denumire" => "Tastatura", "pret" => 350, "cantitate" => 12],
    ["denumire" => "Mouse", "pret" => 180, "cantitate" => 30],
];
$total = 0;
foreach ($produse as $p) {
    $total += $p["pret"] * $p["cantitate"];
}
echo $total;`,
    options: ['530', '9600', '5400', '42'],
    correct: 1,
    explanation: '350 * 12 = 4200 și 180 * 30 = 5400; suma este 9600.',
  },
  {
    type: 'analysis',
    question: 'Ce afișează codul de mai jos?',
    code: `<?php
$c = explode(",", "rosu,verde,albastru");
echo count($c), ":", $c[2], ":", implode("+", array_slice($c, 1));`,
    options: [
      '3:albastru:verde+albastru',
      '3:verde:rosu+verde',
      '2:albastru:verde+albastru',
      '3:albastru:rosu+verde+albastru',
    ],
    correct: 0,
    explanation: 'explode dă 3 elemente; $c[2] este "albastru"; array_slice($c, 1) pornește de la indicele 1 și ia restul: verde, albastru.',
  },

  // ---------- FILL (8) ----------
  {
    type: 'fill',
    question:
      'Completează codul: adaugă valoarea 10 la sfârșitul tabloului, apoi afișează numărul de elemente și, separat prin spațiu, ultima valoare (aflată pe indicele 4).',
    code: `<?php
$note = [9, 10, 8, 7];
$note____ = 10;
echo ____($note), " ", $note[____];`,
    blanks: [['[]'], ['count', 'sizeof'], ['4']],
    explanation: '$note[] = 10 adaugă la sfârșit; count dă 5; ultimul indice este count - 1 = 4.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: creează un tablou asociativ cu perechi cheie → valoare, adaugă cheia "media" și afișează fiecare pereche în forma cheie = valoare, câte una pe linie.',
    code: `<?php
$elev = ["nume" ____ "Ana", "varsta" => 20];
$elev["media"] ____ 9.35;
foreach ($elev ____ $cheie => $valoare) {
    echo "$cheie = $valoare\\n";
}`,
    blanks: [['=>'], ['='], ['as']],
    explanation: '=> leagă cheia de valoare, = atribuie valoarea noii chei, iar foreach ... as $cheie => $valoare parcurge perechile.',
  },
  {
    type: 'fill',
    question:
      'Completează foreach-ul imbricat care afișează, pentru fiecare produs, toate câmpurile sale în forma câmp -> valoare.',
    code: `<?php
$produse = [
    ["denumire" => "Tastatura", "pret" => 350],
    ["denumire" => "Mouse", "pret" => 180],
];
foreach ($produse as $i => $p) {
    echo "Produsul $i:\\n";
    ____ ($p ____ $camp ____ $val) {
        echo "  $camp -> $val\\n";
    }
}`,
    blanks: [['foreach'], ['as'], ['=>']],
    explanation: 'Bucla interioară parcurge câmpurile produsului curent cu forma foreach ($p as $camp => $val).',
  },
  {
    type: 'fill',
    question:
      'Completează codul: caută valoarea "mar" (aflată pe poziția 0) și afișează cheia ei doar dacă a fost găsită; verificarea trebuie să funcționeze corect și când cheia este 0.',
    code: `<?php
$a = ["mar", "para", "prun"];
$pos = ____("mar", $a);
if ($pos ____ false) {
    echo "Gasit la cheia ", ____;
}`,
    blanks: [['array_search'], ['!=='], ['$pos']],
    explanation: 'array_search întoarce cheia; comparația strictă !== false tratează corect și cheia 0.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: șterge elementul cu cheia 1, apoi renumerotează cheile de la 0 și afișează elementele rămase separate prin virgulă și spațiu.',
    code: `<?php
$a = ["mar", "para", "prun"];
unset($a[____]);
$a = ____($a);
echo ____(", ", $a);`,
    blanks: [['1'], ['array_values'], ['implode', 'join']],
    explanation: 'unset($a[1]) șterge "para"; array_values reindexează; implode lipește elementele într-un șir: mar, prun.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: sortează crescător după valori păstrând cheile, apoi sortează descrescător după chei, apoi sortează produsele crescător după preț cu usort. Afișează cheile după primele două sortări și denumirile după a treia.',
    code: `<?php
$stoc = ["mouse" => 30, "monitor" => 5, "tastatura" => 12];
____($stoc);
echo implode(",", array_keys($stoc)), " ";
____($stoc);
echo implode(",", array_keys($stoc)), " ";
$p = [["n" => "A", "pret" => 350], ["n" => "B", "pret" => 180]];
usort($p, function ($a, $b) {
    return $a["pret"] ____ $b["pret"];
});
echo $p[0]["n"], $p[1]["n"];`,
    blanks: [['asort'], ['krsort'], ['<=>']],
    explanation: 'asort: valori crescător cu chei păstrate; krsort: chei descrescător; <=> compară două valori și întoarce -1, 0 sau 1.',
  },
  {
    type: 'fill',
    question:
      'Completează codul: transformă șirul într-un tablou folosind virgula ca separator, afișează câte elemente are, apoi lipește elementele înapoi într-un șir cu separatorul " - ".',
    code: `<?php
$sir = "periferice,componente,accesorii";
$c = ____(",", $sir);
echo ____($c), "\\n";
echo ____(" - ", $c);`,
    blanks: [['explode'], ['count', 'sizeof'], ['implode', 'join']],
    explanation: 'explode taie șirul într-un tablou cu 3 elemente; count le numără; implode le lipește cu " - ".',
  },
  {
    type: 'fill',
    question:
      'Completează codul: parcurge produsele și adună în $total valoarea (preț * cantitate) doar pentru cele din categoria "periferice", apoi afișează totalul.',
    code: `<?php
$produse = [
    ["pret" => 350, "cantitate" => 12, "categorie" => "periferice"],
    ["pret" => 4800, "cantitate" => 3, "categorie" => "componente"],
    ["pret" => 180, "cantitate" => 30, "categorie" => "periferice"],
];
$total = 0;
____ ($produse as $p) {
    if ($p["categorie"] ____ "periferice") {
        $total ____ $p["pret"] * $p["cantitate"];
    }
}
____ $total;`,
    blanks: [['foreach'], ['===', '=='], ['+='], ['echo', 'print']],
    explanation: 'foreach parcurge produsele, === compară categoria, += adună la total (4200 + 5400 = 9600), echo afișează rezultatul.',
  },
];
