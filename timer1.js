
process.argv.shift();
process.argv.shift();
let secondsArr = process.argv;
secondsArr.sort(function(a, b) {
  return a - b;
});
let timeFr = 0;
for (const seconds in secondsArr) {
  secondsArr[seconds] *= 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timeFr += secondsArr[seconds]);
}
