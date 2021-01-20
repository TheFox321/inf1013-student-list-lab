import {Score} from './score';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  codePermanent: string;
  scores: Score[];
}

