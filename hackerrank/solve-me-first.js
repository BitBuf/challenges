// HackerRank easy - Solve Me First

/*
Test Case 1:
-----------------------------------------------------
input:
a = 2
b = 3
-----------------------------------------------------
expected output:
5
*/


//IMPORTANT!! Submit Code Region Begin(Do not remove this line)
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}

function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());

    var res = solveMeFirst(a, b);
    console.log(res);
}
//IMPORTANT!! Submit Code Region End(Do not remove this line)
