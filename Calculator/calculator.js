#!/usr/bin/env node
import { calc } from "./calc_funcs.js";
import inquirer from "inquirer";
import chalk from "chalk";
async function args() {
    const arg = await inquirer.prompt([{
            type: "number",
            name: "number1",
            message: "Input Number 1"
        },
        {
            type: "number",
            name: "number2",
            message: "Input Number 2"
        }]);
    return { number1: arg.number1, number2: arg.number2 };
}
async function calculator() {
    let opt = true;
    while (opt) {
        console.log(chalk.bgBlueBright("Calculator by Masood"));
        const choice = await inquirer.prompt([{
                type: "list",
                name: "opt",
                message: "Choose Operation",
                choices: ["+", "-", "*", "/", "%", "Exit"]
            },
        ]);
        if (choice.opt == "+") {
            const { number1: n1, number2: n2 } = await args();
            calc.add(n1, n2);
        }
        else if (choice.opt == "-") {
            const { number1: n1, number2: n2 } = await args();
            calc.sub(n1, n2);
        }
        else if (choice.opt == "*") {
            const { number1: n1, number2: n2 } = await args();
            calc.multiply(n1, n2);
        }
        else if (choice.opt == "/") {
            const { number1: n1, number2: n2 } = await args();
            calc.divide(n1, n2);
        }
        else if (choice.opt == "%") {
            const { number1: n1, number2: n2 } = await args();
            calc.mod(n1, n2);
        }
        else {
            opt = false;
        }
    }
}
calculator();
