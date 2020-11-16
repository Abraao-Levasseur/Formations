
// var str = "#";
// var space = " ";
// var arg = 4;
// const args = process.args

// for (number=1;number <= 4; number++)
// {
// console.log([space.repeat(arg - number)]+[str.repeat(number)]);
// }


var str = "#";
var space = " ";
var arg = 4;
const arguments = process.argv

for (number=1;number <= 4; number++)
{
console.log([space.repeat(arguments[2]- number)]+[str.repeat(number)]);

}