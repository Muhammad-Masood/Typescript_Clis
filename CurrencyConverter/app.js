import inquirer from "inquirer";
async function cc() {
    const currInp = await inquirer.prompt([
        {
            name: "currency",
            type: "list",
            choices: ["PKR", "USD", "INR", "GBP", "CNY"],
            message: "Choose Your Currency"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount"
        },
        {
            name: "convCurrency",
            type: "list",
            choices: ["PKR", "USD", "INR", "GBP", "CNY"],
            message: "Choose the Convertible Currency"
        }
    ]);
}
cc();
