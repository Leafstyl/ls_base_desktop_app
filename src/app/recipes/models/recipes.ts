import { firebase } from '../../firebase';

export interface IRecipes {
  $key?: string;
  id: string;
  createdAt: Object;
  cookMethod: string;
  cookTime: number;
  longName: string;
  preTime: number;
  shortName: string;
  website: string;
  lScore: number;
  eScore: number;
  aScore: number;
  fScore: number;
}

export class Recipes implements IRecipes {
  id;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  aScore: number;
  cookMethod: string;
  cookTime: number;
  eScore: number;
  fScore: number;
  lScore: number;
  longName: string;
  preTime: number;
  shortName: string;
  website: string;

  constructor() {
  }
}
