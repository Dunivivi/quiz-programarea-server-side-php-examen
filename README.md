# Examen PHP

Examen grilă pentru cursul **Programarea server-side a site-urilor Web** (PHP) — Angular 22, fără backend propriu.
Bazat pe quiz-ul de laborator (`../quiz-programarea-server-side-php`).

- Setul are **120 de întrebări** din temele 1 (tehnologii Web, server-side), 2–3 (serverul local, variabile, operatori),
  4–5 (instrucțiuni condiționale și repetitive) și 6 (tablouri).
- Un examen = **20 de întrebări** alese aleatoriu: **10 teorie**, **5 „ce afișează codul”** (4 variante),
  **5 completare de cod** — fiecare cod are **cel puțin 3 goluri** scrise de elev; întrebarea e corectă doar dacă toate golurile sunt corecte.
- Nume și prenume validate după lista grupelor (`src/app/data/students.ts`).
- Nota (1–10) = corecte / 20 × 10, rotunjit. Rezultatul se trimite automat în Google Sheets, tab-ul **Examen PHP**
  (același script ca la celelalte quiz-uri), cu dispozitivul, IP-ul și coloana **Semnale**.

## Pornire

```bash
npm install
npm start          # http://localhost:4200
```

Netlify: setările sunt în `netlify.toml` (publish: `dist/quiz-app/browser`).
