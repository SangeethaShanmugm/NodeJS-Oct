import chalk from 'chalk';

const warning = chalk.hex('#FFA500');

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.red('Hello world!'));
// console.log(warning('Warning!'));


console.log(process.argv[2])

//destructure the process.argv
const [, , n] = process.argv
const double = (n) => n * 2

console.log(double(n))

const [, , n1, n2] = process.argv

const sum = (n1, n2) => n1 + n2
console.log(sum(+n1, +n2))