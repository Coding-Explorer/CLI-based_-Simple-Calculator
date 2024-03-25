#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { massage: "Enter first number", type: "number", name: "firstNumber" },
    { massage: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "Multiplication", "Division", "Modulus", "Exponention"],
    },
]);
// conditional statement.
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "Exponention") {
    console.log(answer.first ** answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator.");
}
