import {firebase} from '../../firebase';

export interface IRecipe {
  $key?: string;
  id: string;
  createdAt: Object;
  title: string;
}

export class Recipe implements IRecipe {
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  title;
  id;

  constructor(title: string) {
    this.title = title;
  }
}
