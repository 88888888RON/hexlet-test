import reverse from '../src/index.js';

test('reverse', () => {
    expect(reverse('Hello')).toEqual('olleH');
    expect('').toEqual('');
});