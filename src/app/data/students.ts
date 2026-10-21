/**
 * Elevii care pot da examenul: [Nume, Prenume].
 * Numele se compară fără să țină cont de majuscule, diacritice (ş/ș, ţ/ț), cratime și spații în plus.
 */
export interface Group {
  name: string;
  students: [nume: string, prenume: string][];
}

export const GROUPS: Group[] = [
  {
    name: 'Grupa 2',
    students: [
      ['Bantuș', 'Denis'],
      ['Bălănici', 'Mădălina'],
      ['Beleaev', 'Maxim'],
      ['Botezatu', 'Marian'],
      ['Braniște', 'Bogdan'],
      ['Chiparuș', 'Ștefan'],
      ['Chirghei', 'Tudor'],
      ['Chiroșca', 'Vlad'],
      ['Cocieru', 'Cătălina'],
      ['Cornos', 'Maxim'],
      ['Cușnir', 'Cristian'],
      ['Erina', 'Anna'],
      ['Golubciuc', 'Sorin'],
      ['Grosu', 'Sergiu'],
      ['Hîncu', 'Iulian'],
      ['Iurcu', 'Nicolae'],
      ['Lipcanu', 'Laurențiu'],
      ['Luca', 'Vladislav'],
      ['Morcodeanu', 'Marina'],
      ['Palai', 'Radu'],
      ['Pîslaraș', 'Adelina'],
      ['Pogolșa', 'Constantin'],
      ['Roșca', 'Sergiu'],
      ['Roșcovan', 'Constantin'],
      ['Secrier', 'Radu'],
      ['Sînică', 'Vadim'],
      ['Stroici', 'Daniel'],
      ['Strungaru', 'Angelo'],
      ['Șoimu', 'Ecaterina'],
      ['Tintiuc', 'Cătălin'],
      ['Tudorica', 'Nicolae'],
      ['Țicu', 'Victor'],
      ['Untila', 'Ștefan'],
      ['Vieru', 'Sevastean'],
      ['Vrednic', 'Constanta'],
      ['Vrînceanu', 'Alina'],
    ],
  },
];
