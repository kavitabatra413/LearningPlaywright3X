//const year = Number(require('fs').readFileSync(0, 'utf8'));
let year = 2020
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

/*
A leap year has 366 days instead of 365.
Examples: 2020, 2024, 2028, 2032.
*/