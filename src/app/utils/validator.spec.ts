import { isRequired } from './';

describe('Validators', () => {
  describe('isRequired', () => {
    it('should be a valid constraint', () => {
      const result = isRequired('someValue');
      expect(result).toBeUndefined();
    });
  });
});
