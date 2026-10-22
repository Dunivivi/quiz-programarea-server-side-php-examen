import { Lab } from '../models/quiz';
import { PHP1_QUESTIONS } from './php1.questions';
import { PHP1B_QUESTIONS } from './php1-b.questions';
import { PHP23_QUESTIONS } from './php23.questions';
import { PHP23B_QUESTIONS } from './php23-b.questions';
import { PHP4_QUESTIONS } from './php4.questions';
import { PHP4B_QUESTIONS } from './php4-b.questions';
import { PHP6_QUESTIONS } from './php6.questions';
import { PHP6B_QUESTIONS } from './php6-b.questions';

/** Întrebările fiecărei teme (setul inițial + runda a doua). */
const TEMA1 = [...PHP1_QUESTIONS, ...PHP1B_QUESTIONS];
const TEMA23 = [...PHP23_QUESTIONS, ...PHP23B_QUESTIONS];
const TEMA45 = [...PHP4_QUESTIONS, ...PHP4B_QUESTIONS];
const TEMA6 = [...PHP6_QUESTIONS, ...PHP6B_QUESTIONS];
const TOATE = [...TEMA1, ...TEMA23, ...TEMA45, ...TEMA6];

/**
 * Examenul și testele de pregătire. Fiecare test alege random întrebări din setul lui,
 * după `structure` (implicit 10 teorie, 5 „ce afișează codul”, 5 completare — TEST_STRUCTURE din config.ts).
 */
export const LABS: Lab[] = [
  {
    id: 'examen',
    short: 'EX',
    // ascuns până la examen: pune `false` (sau șterge rândul) ca să apară
    hidden: false,
    name: 'Examen',
    title: 'Programarea server-side a site-urilor Web',
    description: 'Examenul: 20 de întrebări din toate temele.',
    topics: ['Tema 1', 'Temele 2–3', 'Temele 4–5', 'Tema 6'],
    color: '#4f5b93',
    questions: TOATE,
  },
  {
    id: 'test-complet',
    short: '100',
    name: 'Test de pregătire',
    title: 'Test complet — 100 de întrebări',
    description: 'Pregătire pentru examen: 50 teorie, 25 „ce afișează codul”, 25 completare de cod.',
    topics: ['Tema 1', 'Temele 2–3', 'Temele 4–5', 'Tema 6'],
    color: '#0f766e',
    questions: TOATE,
    structure: { theory: 50, analysis: 25, fill: 25 },
  },
  {
    id: 'tema-1',
    short: 'T1',
    name: 'Test pe temă',
    title: 'Tema 1: Tehnologii Web și programarea server-side',
    description: 'Internet și Web, client–server, HTTP, URL, pagini statice și dinamice.',
    topics: ['Tema 1'],
    color: '#2563eb',
    questions: TEMA1,
  },
  {
    id: 'tema-2-3',
    short: 'T2–3',
    name: 'Test pe temă',
    title: 'Temele 2–3: Serverul local, variabile și operatori',
    description: 'XAMPP, primul script, echo/var_dump, tipuri, ghilimele, operatori și expresii.',
    topics: ['Tema 2', 'Tema 3'],
    color: '#7c3aed',
    questions: TEMA23,
  },
  {
    id: 'tema-4-5',
    short: 'T4–5',
    name: 'Test pe temă',
    title: 'Temele 4–5: Instrucțiuni condiționale și repetitive',
    description: 'if/elseif/else, switch, match, ternar, ??, while, for, foreach, break/continue.',
    topics: ['Tema 4', 'Tema 5'],
    color: '#c2410c',
    questions: TEMA45,
  },
  {
    id: 'tema-6',
    short: 'T6',
    name: 'Test pe temă',
    title: 'Tema 6: Tablouri',
    description: 'Tablouri indexate și asociative, multidimensionale, foreach, funcții de tablou.',
    topics: ['Tema 6'],
    color: '#db2777',
    questions: TEMA6,
  },
];

export function findLab(id: string): Lab | undefined {
  return LABS.find((l) => l.id === id);
}

/** Testele care pot fi date acum (fără cele ascunse). */
export const OPEN_LABS = LABS.filter((l) => !l.hidden);
