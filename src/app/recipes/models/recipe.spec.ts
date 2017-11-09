import {Recipe} from './recipe';

describe('Recipes', () => {
  describe('Recipe', () => {
    it('should set title', () => {
      expect(new Recipe('test').title).toBe('test');
    });
  });
});
