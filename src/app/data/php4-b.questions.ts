import { Question } from '../models/question';

export const PHP4B_QUESTIONS: Question[] = [
  // ---------- THEORY (13) ----------
  { type: 'theory', question: 'Variabila $e conține un singur spațiu: $e = " ";. Ce rezultate dau isset($e) și empty($e)?',
    options: ['isset = true, empty = false', 'isset = true, empty = true', 'isset = false, empty = true', 'isset = false, empty = false'],
    correct: 0, explanation: 'Șirul " " există și nu este null, deci isset dă true. Este însă un șir nevid și diferit de "0", deci nu este considerat gol și empty dă false. Doar "" și "0" sunt șiruri „goale”.' },
  { type: 'theory', question: 'Cu ce expresie este echivalent apelul empty($x)?',
    options: ['isset($x) && $x', 'is_null($x)', '!isset($x) || !$x', '!isset($x) && !$x'],
    correct: 2, explanation: 'empty($x) este true dacă variabila lipsește sau conține una dintre valorile considerate false. Adică !isset($x) || !$x, iar spre deosebire de is_null(), nu produce niciodată Warning.' },
  { type: 'theory', question: 'În expresia $a || $b && $c, care operație se evaluează prima?',
    options: ['$a || $b, pentru că este scrisă prima', '$b && $c, pentru că && are prioritate mai mare decât ||', 'Se evaluează simultan, de la stânga la dreapta', 'Depinde de valorile lui $a, $b și $c'],
    correct: 1, explanation: '&& are prioritate mai mare decât ||, deci expresia se citește $a || ($b && $c). Parantezele fac intenția explicită și evită confuziile.' },
  { type: 'theory', question: 'Fie condiția if ($n != 0 && 100 / $n > 5). De ce nu apare eroare de împărțire la zero când $n = 0?',
    options: ['Pentru că PHP întoarce 0 la orice împărțire la zero', 'Pentru că operatorul != oprește scriptul înainte de if', 'Pentru că PHP ignoră erorile din interiorul condițiilor', 'Pentru că primul operand este false, iar evaluarea se oprește imediat: a doua parte nu mai este calculată'],
    correct: 3, explanation: 'La && , dacă primul operand este false, rezultatul este deja hotărât și al doilea nu se mai evaluează (scurtcircuit). Așa se protejează împărțirea. Fără această ordine, PHP ar arunca DivisionByZeroError.' },
  { type: 'theory', question: 'Ce se întâmplă dacă folosești foreach pe o variabilă care conține un număr întreg, de exemplu foreach (5 as $x)?',
    options: ['Se parcurg cifrele numărului', 'PHP convertește numărul într-un tablou cu un singur element', 'Bucla rulează de 5 ori', 'PHP dă Warning: foreach() argument must be of type array|object și sare peste buclă'],
    correct: 3, explanation: 'foreach merge numai pe tablouri și obiecte. Pe orice altceva (număr, șir) apare Warning, iar corpul buclei nu se execută.' },
  { type: 'theory', question: 'Ce valoare are contorul $i imediat după terminarea buclei while ($i <= 5) { $i++; }, dacă a pornit de la 1?',
    options: ['Variabila $i nu mai există după buclă', '5, ultima valoare pentru care corpul s-a executat', '6, valoarea pentru care condiția a devenit falsă', '0, pentru că bucla își resetează contorul'],
    correct: 2, explanation: 'Contorul rămâne definit după buclă și păstrează ultima valoare verificată. Bucla se oprește abia când $i = 6, deoarece 6 <= 5 este false.' },
  { type: 'theory', question: 'Ce se întâmplă cu o buclă while ($x < 10) { echo "a"; } în care corpul nu modifică niciodată $x, iar $x = 3?',
    options: ['Condiția rămâne mereu adevărată și bucla nu se mai oprește (buclă infinită)', 'PHP modifică automat $x', 'Se oprește după prima execuție', 'PHP dă eroare de sintaxă'],
    correct: 0, explanation: 'Ceva din corp trebuie să schimbe condiția, de obicei un contor incrementat cu $i++. Altfel condiția rămâne true la nesfârșit, iar scriptul nu se mai oprește.' },
  { type: 'theory', question: 'Ce reprezintă semnul => într-un foreach ($preturi as $produs => $pret)?',
    options: ['Operator de comparație „mai mare sau egal”', 'Leagă cheia elementului (în $produs) de valoarea lui (în $pret)', 'Atribuie variabilei $produs valoarea lui $pret', 'Operator care mărește $pret cu o unitate'],
    correct: 1, explanation: '=> leagă o cheie de valoarea ei: la scrierea tablourilor asociative și în forma a doua a lui foreach. Nu are nicio legătură cu >=.' },
  { type: 'theory', question: 'De ce este nepotrivit să parcurgi un tablou asociativ cu for ($i = 0; $i < count($t); $i++) și $t[$i]?',
    options: ['Pentru că tabloul asociativ nu are indici 0, 1, 2, ..., ci chei text, deci $t[$i] nu găsește elementele', 'Pentru că for nu poate număra elementele unui tablou', 'Pentru că for rulează numai de 10 ori', 'Pentru că count() nu funcționează pe tablouri asociative'],
    correct: 0, explanation: 'Cheile unui tablou asociativ sunt texte (de exemplu "paine"), nu numere consecutive. $t[0] nu există, deci apar Warning-uri. foreach ia automat fiecare element, indiferent de chei.' },
  { type: 'theory', question: 'Un script conține o buclă care generează 100 de rânduri de tabel HTML. Unde rulează bucla și ce primește browserul?',
    options: ['Bucla rulează în browser, iar serverul trimite doar codul PHP', 'Bucla rulează în browser, iar serverul trimite doar datele', 'Bucla rulează pe server, iar browserul primește rezultatul ei, adică text HTML', 'Bucla rulează pe server, iar browserul primește și codul PHP, ca să-l afișeze'],
    correct: 2, explanation: 'PHP se execută pe server. Vizitatorul nu vede codul, ci doar HTML-ul generat (poți verifica cu Ctrl+U în browser).' },
  { type: 'theory', question: 'Pentru ce este făcută sintaxa alternativă a buclelor (while: ... endwhile;, foreach: ... endforeach;)?',
    options: ['Pentru a rula bucla mai repede', 'Pentru a evita folosirea variabilelor', 'Pentru a permite bucle fără condiție', 'Pentru a face codul mai lizibil când bucla este intercalată cu blocuri HTML'],
    correct: 3, explanation: 'Sintaxa cu două puncte și endwhile;/endforeach; este făcută pentru a intercala HTML în buclă, fără acolade care se pierd printre etichete. Comportamentul este același ca la forma cu acolade.' },
  { type: 'theory', question: 'Ce valori are cheia $cheie într-un foreach ($culori as $cheie => $c) când $culori = ["rosu", "verde", "albastru"]?',
    options: ['"rosu", "verde", "albastru"', '1, 2, 3', '0, 1, 2', 'Nu are valori, pentru că tabloul nu e asociativ'],
    correct: 2, explanation: 'La un tablou obișnuit cheia este indicele numeric, care începe de la 0: 0, 1, 2. Valorile sunt cele din $c.' },
  { type: 'theory', question: 'Ce face instrucțiunea continue; într-o buclă?',
    options: ['Sare peste restul corpului pentru pasul curent și trece la pasul următor', 'Repetă pasul curent încă o dată', 'Oprește definitiv bucla', 'Încheie scriptul'],
    correct: 0, explanation: 'continue renunță la restul instrucțiunilor din pasul curent și trece la următorul pas (la for, întâi se execută pasul din antet). break este cel care iese din buclă.' },

  // ---------- ANALYSIS (8) ----------
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$e = " ";
$f = [];
echo empty($e) ? "1" : "0";
echo empty($f) ? "1" : "0";
echo isset($f) ? "1" : "0";`,
    options: ['010', '001', '011', '111'],
    correct: 2, explanation: 'empty(" ") este false (spațiul nu este o valoare goală) și dă 0. empty([]) este true și dă 1. isset($f) este true, tabloul există și nu este null, deci 1. Rezultat: 011.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$a = true;
$b = false;
$c = false;
echo ($a || $b && $c) ? "1" : "0";
echo (($a || $b) && $c) ? "1" : "0";`,
    options: ['11', '00', '01', '10'],
    correct: 3, explanation: 'Prima expresie este $a || ($b && $c) = true || false = true, deci 1. A doua are paranteze: (true || false) && false = false, deci 0. Rezultat: 10.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$i = 0;
if (false && ++$i) { }
if (true || ++$i) { }
if (true && ++$i) { }
echo $i;`,
    options: ['1', '0', '2', '3'],
    correct: 0, explanation: 'La false && ... și la true || ... rezultatul este hotărât de primul operand, deci ++$i nu se execută. Doar în al treilea if (true && ++$i) trebuie evaluat și al doilea operand. $i devine 1.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$i = 1;
$s = 0;
while ($i <= 4) {
    $s += $i;
    $i++;
}
echo "$s-$i";`,
    options: ['10-4', '10-5', '4-10', '6-4'],
    correct: 1, explanation: 'Suma 1+2+3+4 este 10. Bucla se oprește când $i devine 5 (5 <= 4 este false), iar $i păstrează această valoare. Se afișează 10-5.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
for ($i = 1; $i <= 8; $i++) {
    if ($i == 3) {
        continue;
    }
    if ($i == 6) {
        break;
    }
    echo $i;
}
echo "|$i";`,
    options: ['1245|6', '12456|6', '1245|5', '12345|6'],
    correct: 0, explanation: 'La $i = 3, continue sare peste echo, deci 3 lipsește. La $i = 6, break oprește bucla înainte de echo, deci 6 nu se afișează, dar $i rămâne 6 după buclă. Rezultat: 1245|6.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$p = ["pen" => 3, "book" => 7];
foreach ($p as $k => $v) {
    echo "$k=" . $v * 2 . ";";
}`,
    options: ['pen=3;book=7;', '0=6;1=14;', 'pen=6;book=14;', 'pen=3*2;book=7*2;'],
    correct: 2, explanation: 'Cheile sunt pen și book, iar valorile se dublează înainte de concatenare (înmulțirea are prioritate față de .). Rezultat: pen=6;book=14;.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$n = [1, 2, 3];
foreach ($n as $x) {
    $x *= 2;
}
echo $n[0] . $n[1] . $n[2] . "-" . $x;`,
    options: ['246-6', '123-3', '123-6', '246-3'],
    correct: 2, explanation: '$x este o copie, deci tabloul rămâne 1, 2, 3 și se afișează 123. După buclă, $x păstrează ultima valoare primită: 3 * 2 = 6. Rezultat: 123-6.' },
  { type: 'analysis', question: 'Ce afișează codul de mai jos?', code: `<?php
$i = 3;
while ($i > 0):
    echo $i--;
endwhile;
echo "!" . $i;`,
    options: ['321!0', '3210!0', '321!1', '321!'],
    correct: 0, explanation: '$i-- afișează valoarea curentă și apoi o scade, deci se afișează 3, 2, 1. Bucla se oprește când $i este 0, iar după buclă se afișează !0. Rezultat: 321!0.' },

  // ---------- FILL (9) ----------
  { type: 'fill', question: 'Completează codul ca să verifice dacă produsul "mouse" există în coș și să afișeze Lipseste dacă nu există. La final, cantitatea afișată trebuie să fie 0 când cheia lipsește, fără Warning.', code: `<?php
$cos = ["laptop" => 2];
if (____($cos["mouse"])) {
    echo "Exista";
} ____ {
    echo "Lipseste";
}
echo "|" . ($cos["mouse"] ____ 0);`,
    blanks: [['isset'], ['else'], ['??']],
    explanation: 'isset() verifică existența cheii fără Warning. Ramura pentru restul cazurilor este else, iar ?? întoarce valoarea implicită 0 când cheia lipsește. Se afișează Lipseste|0.' },
  { type: 'fill', question: 'Completează bucla for care adună numerele de la 1 la 5 și afișează suma finală (15).', code: `<?php
$s = 0;
for ($i = 1; $i ____ 5; $i++) {
    $s ____ $i;
}
echo ____;`,
    blanks: [['<='], ['+='], ['$s']],
    explanation: 'Condiția $i <= 5 include și valoarea 5. $s += $i adaugă fiecare număr la sumă, iar la final se afișează $s.' },
  { type: 'fill', question: 'Completează codul care împarte $n la 10 cât timp $n este cel puțin 1 și numără pașii. Pentru $n = 100 se afișează 3.', code: `<?php
$n = 100;
$pasi = 0;
____ ($n >= 1) {
    $n = $n / 10;
    $pasi____;
}
echo ____;`,
    blanks: [['while'], ['++', '+= 1', '+=1'], ['$pasi']],
    explanation: 'Nu știm de la început câți pași sunt, doar condiția de oprire, deci se potrivește while. $pasi++ numără pașii (100, 10, 1 sunt >= 1, apoi 0.1 oprește bucla), iar echo $pasi afișează 3.' },
  { type: 'fill', question: 'Completează fișierul PHP, cu sintaxa alternativă, ca să genereze o listă HTML cu câte un <li> pentru fiecare fruct din tablou.', code: `<?php $fructe = ["mar", "para"]; ?>
<ul>
<?php ____ ($fructe as $f)____ ?>
  <li><?= $f ?></li>
<?php ____; ?>
</ul>`,
    blanks: [['foreach'], [':'], ['endforeach']],
    explanation: 'În sintaxa alternativă acoladele devin : și endforeach;. Antetul rămâne foreach ($fructe as $f), urmat de două puncte.' },
  { type: 'fill', question: 'Completează bucla dublă ca să afișeze produsele i * j și să se oprească complet (din ambele bucle) la primul produs mai mare decât 4. Se afișează: 1 2 3 2 4', code: `<?php
____ ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= 3; $j____) {
        if ($i * $j > 4) {
            ____ 2;
        }
        echo $i * $j . " ";
    }
}`,
    blanks: [['for'], ['++', '+= 1', '+=1'], ['break']],
    explanation: 'Bucla exterioară este un for, iar bucla interioară mărește $j cu $j++. break 2 iese din ambele bucle deodată; un break simplu ar ieși doar din cea interioară și ar continua cu $i = 3.' },
  { type: 'fill', question: 'Completează codul ca să afișeze Deschis între orele 9 și 17 inclusiv (ora < 18), Se inchide la ora 18, iar în rest Inchis. Pentru $ora = 14 se afișează Deschis.', code: `<?php
$ora = 14;
if ($ora >= 9 ____ $ora < 18) {
    echo "Deschis";
} ____ ($ora == 18) {
    echo "Se inchide";
} ____ {
    echo "Inchis";
}`,
    blanks: [['&&', 'and'], ['elseif', 'else if'], ['else']],
    explanation: 'Ambele condiții trebuie să fie adevărate, deci se leagă cu &&. A doua ramură este elseif, iar else prinde toate celelalte cazuri.' },
  { type: 'fill', question: 'Completează codul care calculează media notelor din tabloul asociativ (9 și 6). Se afișează 7.5.', code: `<?php
$note = ["Ana" => 9, "Ion" => 6];
$suma = 0;
foreach ($note ____ $elev => $nota) {
    $suma ____ $nota;
}
echo $suma / ____($note);`,
    blanks: [['as'], ['+='], ['count', 'sizeof']],
    explanation: 'foreach ($tablou as $cheie => $valoare) parcurge fiecare pereche. $suma += $nota însumează notele, iar count($note) dă numărul elementelor (2). 15 / 2 = 7.5.' },
  { type: 'fill', question: 'Completează bucla care adună 1, 2, 3, ... până când suma ajunge la cel puțin 10. Corpul trebuie executat cel puțin o dată. Se afișează: 4 pasi, suma 10', code: `<?php
$sum = 0;
$k = 0;
____ {
    $k++;
    $sum ____ $k;
} ____ ($sum < 10);
echo "$k pasi, suma $sum";`,
    blanks: [['do'], ['+='], ['while']],
    explanation: 'do...while rulează corpul înainte de a verifica condiția. $sum += $k adaugă pasul curent. Sumele sunt 1, 3, 6, 10, iar la 10 condiția $sum < 10 devine falsă după 4 pași.' },
  { type: 'fill', question: 'Completează expresia match care întoarce Iarna pentru lunile 12, 1 și 2, Vara pentru 6, 7 și 8, iar pentru orice altă lună Alt anotimp. Pentru $luna = 1 se afișează Iarna.', code: `<?php
$luna = 1;
$sezon = ____ ($luna) {
    12, ____, 2 => "Iarna",
    6, 7, 8 => "Vara",
    ____ => "Alt anotimp",
};
echo $sezon;`,
    blanks: [['match'], ['1'], ['default']],
    explanation: 'Într-o ramură match se pot scrie mai multe valori separate prin virgulă. Iarna acoperă 12, 1, 2, iar default prinde toate celelalte luni.' },
];
