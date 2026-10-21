/** Tipul întrebării: teorie, „ce afișează codul”, completarea unei secvențe de cod. */
export type QuestionType = 'theory' | 'analysis' | 'fill';

/** Marcajul unui loc gol din codul întrebărilor de completare. */
export const BLANK = '____';

export interface Question {
  type: QuestionType;
  question: string;
  /** Codul afișat. Obligatoriu la „analysis” și „fill”; la „fill” conține cel puțin 3 BLANK-uri. */
  code?: string;
  /** theory / analysis: exact 4 variante și indexul celei corecte. */
  options?: string[];
  correct?: number;
  /** fill: pentru FIECARE gol, în ordine, lista răspunsurilor acceptate. */
  blanks?: string[][];
  explanation: string;
}
