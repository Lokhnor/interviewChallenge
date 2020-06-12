const express = require('express');
const app = express();
const PORT = 8000;

app.get('/fizzbuzz/:n', (req, res) => {
  let num = req.params.n;
  let result = fizzBuzz(num);
  res.send(`${result}`);
});

// app.listen(PORT, () => {
//   console.log('Server is running at http://localhost:8000');
// });

function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 == 0) {
    return 'FizzBuzz';
  }
  if (n % 3 === 0) {
    return 'Fizz';
  }
  if (n % 5 === 0) {
    return 'Buzz';
  }
  return `${n}`;
}

module.exports = { fizzBuzz, app };
