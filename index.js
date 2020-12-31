const validate = require("./calc");
const readline = require("readline");
const { stdin, stdout } = require("process");

const rl = readline.createInterface(stdin, stdout);
console.log("This program will your metabolism ...");
var age;
var height;
var weigth;
var cal;

rl.question("Enter your age ? ", (age) => {
  age = age;
  rl.question("Enter your height (m) ? ", (hg) => {
    height = hg;
    rl.question("Enter your weight (kg) ?", (w) => {
      weigth = w;
      rl.question("Your calories consumption / day ? ", (cal) => {
        cal = cal;
        console.log(age, height, cal, weigth);
        if (
          age != undefined &&
          height != undefined &&
          cal != undefined &&
          weigth != undefined
        ) {
          let isOk = validate(age, weigth, height, cal);
          if (isOk) console.log("You are healthy ...");
          else console.log("You need more calories. Take care of your health");
        }
        rl.close();
      });
    });
  });
});
