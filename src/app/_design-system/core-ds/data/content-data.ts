import {ColorsComponent} from '../../pattern-library/global/colors/colors.component';

export class ContentData {

  public static data: any = [
    {
      name: 'Atoms',
      children: [
        {
          name: 'Global',
          children: [
            {
              name: 'Colors',
              component: ColorsComponent
            },
            {
              name: 'Fonts'
            },
            {
              name: 'Animations'
            }
          ]
        },
        {
          name: 'Buttons',
          children: [
            {
              name: 'Button'
            },
            {
              name: 'Text Button'
            }
          ]
        }
      ]
    },
    {
      name: 'Molecules',
      children: []
    },
    {
      name: 'Organisms',
      children: []
    },
    {
      name: 'Templates',
      children: []
    }
  ];


}
