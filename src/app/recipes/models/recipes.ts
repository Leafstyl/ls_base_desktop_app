import { firebase } from '../../firebase';

export interface IRecipes {
  $key?: string;
  id: string;
  name: string;
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
  // id: string;
  // createdAt: Object;
  // gender: string;
  // age: number;
  // height: string;
  // weight: number;
  // bmi: number;
  // cholesteral: number;
  // bloodPressure: string;
}

export class Recipes implements IRecipes {
  id;
  name: string;
  aScore: number;
  cookMethod: string;
  cookTime: number;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  eScore: number;
  fScore: number;
  lScore: number;
  longName: string;
  preTime: number;
  shortName: string;
  website: string;

  // createdAt = firebase.database.ServerValue.TIMESTAMP;
  // gender: string;
  // age: number;
  // height: string;
  // weight: number;
  // bmi: number;
  // cholesteral: number;
  // bloodPressure: string;

  constructor() {
  }
}
