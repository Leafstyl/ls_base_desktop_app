import {ContentModel} from './content-model';

describe('SizeService', () => {

  let model:ContentModel;

  const MOCK_Name:string = 'Mock Name';
  const MOCK_Component:any = {foo: 'bar'};

  const MOCK_Child_Name:string = 'Mock Child Name';
  const MOCK_Child_Component:any = {foo: 'child bar'};

  let MOCK_Data:{} = {
    name: MOCK_Name,
    component: MOCK_Component,
    children: [
      {
        name: MOCK_Child_Name,
        component: MOCK_Child_Component
      }
    ]
  };

  beforeEach(() => {
    model = new ContentModel(MOCK_Data);
  });

  it('should assign name and components', () => {
    expect(model.name).toEqual(MOCK_Name);
    expect(model.component).toEqual(MOCK_Component);

    expect(model.children[0].name).toEqual(MOCK_Child_Name);
    expect(model.children[0].component).toEqual(MOCK_Child_Component);
  });

  it('should parse children and assign child name and components', () => {
    expect(model.children.length).toEqual(1);
    expect(model.children[0].name).toEqual(MOCK_Child_Name);
    expect(model.children[0].component).toEqual(MOCK_Child_Component);
  });
});
