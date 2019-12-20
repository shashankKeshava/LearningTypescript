"use strict";
exports.__esModule = true;
// Types
exports.typesExample = {
    a: 1,
    b: "Hello Shashank",
    c: function (str) {
        return str.replace("Hi", "Hello");
    }
};
function dummyFunction(JSONArgument) {
    return JSONArgument.key;
}
exports.dummyFunction = dummyFunction;
// Return type setting for fucntions
function sum(x, y) {
    return x + y;
}
// Type Assertion
var ten = 10;
var color = "red";
ten = color;
