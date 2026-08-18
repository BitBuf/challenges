// Leetcode easy - Return Length of Arguments Passed

/*
Test Case 1:
-----------------------------------------------------
input:
[5]
-----------------------------------------------------
expected output:
1

Test Case 2:
-----------------------------------------------------
input:
[{},null,"3"]
-----------------------------------------------------
expected output:
3
*/


//IMPORTANT!! Submit Code Region Begin(Do not remove this line)
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
//IMPORTANT!! Submit Code Region End(Do not remove this line)
