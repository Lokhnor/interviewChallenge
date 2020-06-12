const { fizzBuzz, app } = require('./index');
const request = require('supertest');

describe('Checking for multiples of 3 and 5', () => {
  test('Pass a 6 and expect a Fizz for multiple of 3', () => {
    expect(fizzBuzz(6)).toBe('Fizz');
  });
  test('Pass a 9 and expect a Fizz for multiple of 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  test('Pass a 10 and expect a Buzzz for multiple of 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  test('Pass a 15 and expect a FizzBuzz for multiple of 5 and 3', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
  test('Pass a 14 and expect 14 because it is not a multiple of 3 or 5', () => {
    expect(fizzBuzz(14)).toBe('14');
  });
});

describe('Integration tests for API endpoints', () => {
  test('Testing endpoint with supertests', (done) => {
    request(app)
      .get('/fizzbuzz/15')
      .expect(200)
      .expect('Fizz')
      .end(function (err, res) {
        if (err) throw err;
        done();
      });
  });
});
