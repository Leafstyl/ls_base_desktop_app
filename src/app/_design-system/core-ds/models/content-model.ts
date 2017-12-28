export class ContentModel {

  name: string;
  key: string;
  component: any;

  children?: ContentModel[] = [];
  // children?: ContentModel [];


  constructor (data: {}) {
    this.name = data['name'];
    this.key = this.name.replace(' ', '_').toLowerCase();
    this.component = data['component'];

    if (data['children']) {
      this.children = data['children'].map(child => new ContentModel(child));
    }

    console.log(data, this);
  }
}
