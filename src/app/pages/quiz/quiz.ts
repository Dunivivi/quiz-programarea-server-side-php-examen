import {
  Component,
  DestroyRef,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { findLab } from '../../data/labs';
import { BLANK, QuestionType } from '../../models/question';
import { IntegrityService } from '../../services/integrity.service';
import { QuizService } from '../../services/quiz.service';
import { SheetsService } from '../../services/sheets.service';

export const TYPE_LABELS: Record<QuestionType, string> = {
  theory: 'Teorie',
  analysis: 'Ce afișează codul',
  fill: 'Completare de cod',
};

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
  host: {
    '(document:keydown)': 'onKey($event)',
  },
})
export class Quiz {
  protected readonly quiz = inject(QuizService);
  private readonly sheets = inject(SheetsService);
  private readonly integrity = inject(IntegrityService);
  private readonly router = inject(Router);

  protected readonly letters = ['A', 'B', 'C', 'D'];
  protected readonly typeLabels = TYPE_LABELS;
  protected readonly confirmQuit = signal(false);

  protected readonly session = this.quiz.session;
  protected readonly question = this.quiz.currentQuestion;
  protected readonly lab = computed(() => findLab(this.session()?.labId ?? ''));

  private readonly fillInputs = viewChildren<ElementRef<HTMLInputElement>>('fillInput');

  /** Codul întrebării de completare, tăiat la fiecare gol: între două bucăți vine un câmp. */
  protected readonly codeParts = computed(() => (this.question()?.code ?? '').split(BLANK));

  protected readonly answered = computed(() => {
    const q = this.question();
    if (!q) return false;
    if (q.type !== 'fill') return q.picked !== null;
    // toate golurile trebuie completate
    return (q.blanks ?? []).every((_, i) => !!q.typed?.[i]?.trim());
  });

  protected readonly isLast = computed(() => {
    const s = this.session();
    return !!s && s.current === s.questions.length - 1;
  });

  constructor() {
    if (!this.session()) this.router.navigate(['/']);

    // urmărim ieșirile din pagină, copierile și lipirile cât timp testul e deschis
    this.integrity.attach();
    inject(DestroyRef).onDestroy(() => this.integrity.detach());

    // la întrebările de completare, cursorul intră direct în câmpul gol
    effect(() => {
      if (this.question()?.type === 'fill') {
        setTimeout(() => this.fillInputs()[0]?.nativeElement.focus());
      }
    });
  }

  protected choose(i: number): void {
    this.quiz.choose(i);
  }

  protected typeAnswer(blank: number, value: string): void {
    this.quiz.type(blank, value);
  }

  protected next(): void {
    if (!this.answered()) return;
    this.integrity.answered((this.session()?.current ?? 0) + 1);
    const result = this.quiz.next();
    if (result) {
      this.sheets.send(result); // trimitem în fundal; pagina de rezultat arată starea
      this.router.navigate(['/rezultat']);
    }
  }

  protected quit(): void {
    this.quiz.quit();
    this.router.navigate(['/']);
  }

  /** Lățimea câmpului gol, după lungimea textului scris. */
  protected inputWidth(blank: number): string {
    const len = Math.max(6, (this.question()?.typed?.[blank] ?? '').length + 2);
    return `${Math.min(len, 40)}ch`;
  }

  /** 1–4 / A–D aleg varianta; Enter trece mai departe. */
  protected onKey(event: KeyboardEvent): void {
    const q = this.question();
    if (!q || event.metaKey || event.ctrlKey || event.altKey) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      this.next();
      return;
    }
    if (q.type === 'fill') return; // în câmpul gol, tastele se scriu normal

    const key = event.key.toUpperCase();
    let index = Number(key) - 1;
    if (Number.isNaN(index)) index = this.letters.indexOf(key);
    if (index >= 0 && index < (q.options?.length ?? 0)) {
      event.preventDefault();
      this.choose(index);
    }
  }
}
