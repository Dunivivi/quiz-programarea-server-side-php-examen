import { Lab } from '../models/quiz';
import { PHP1_QUESTIONS } from './php1.questions';
import { PHP23_QUESTIONS } from './php23.questions';
import { PHP4_QUESTIONS } from './php4.questions';
import { PHP6_QUESTIONS } from './php6.questions';

/**
 * Examenele. Fiecare are setul lui de întrebări; la fiecare test se aleg random 20
 * (10 teorie, 5 „ce afișează codul”, 5 completare de cod — vezi TEST_STRUCTURE din config.ts).
 */
export const LABS: Lab[] = [
  {
    id: 'examen',
    name: 'Examen',
    title: 'Programarea server-side a site-urilor Web',
    description: 'Tehnologii Web, server-side, variabile și operatori, instrucțiuni condiționale, tablouri.',
    topics: [
      'Tema 1: Tehnologii Web și server-side',
      'Tema 2: Serverul local, variabile, tipuri',
      'Tema 3: Operatori și expresii',
      'Tema 4: Instrucțiuni condiționale',
      'Tema 6: Tablouri',
    ],
    color: '#4f5b93',
    questions: [...PHP1_QUESTIONS, ...PHP23_QUESTIONS, ...PHP4_QUESTIONS, ...PHP6_QUESTIONS],
  },
];

export function findLab(id: string): Lab | undefined {
  return LABS.find((l) => l.id === id);
}
