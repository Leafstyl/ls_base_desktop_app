import { firebase } from '../../firebase';

export interface ISetup {
  $key?: string;
  id: string;
  createdAt: Object;
  gender: string;
  age: number;
  height: string;
  weight: number;
  bmi: number;
  cholesteral: number;
  bloodPressure: string;
}

export class Setup implements ISetup {
  id;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  gender: string;
  age: number;
  height: string;
  weight: number;
  bmi: number;
  cholesteral: number;
  bloodPressure: string;

  constructor() {
  }
}
