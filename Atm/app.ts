import inquirer from "inquirer";

let uAccNumber: number;
let userBalance: number;
let u2AccNumber: number;
let user2Balance: number;

const checkBalance = (): number => {
    return userBalance;
}

async function transfer() {
    const data = await inquirer.prompt([{
        name: "transferAmount",
        type: "number",
        message: "Enter Amount to Transfer"
    }
    ]);
    if (userBalance >= data.transferAmount) {
        user2Balance += data.transferAmount;
        userBalance -= data.transferAmount;
        console.log(`Successfully Transferred Amount: ${data.transferAmount}$ to ${u2AccNumber}.`);
        console.log(`New Balance: ${userBalance}$`);
        console.log(`Reciever New Balance: ${user2Balance}$`);
    }
    else {
        console.log("Transfer Failed!");
    }
}

async function withdraw() {
    const amount = await inquirer.prompt([{
        name: "withdrawAmout",
        type: "number",
        message: "Enter Amount to Withdraw"
    }]);
    if (userBalance >= amount.withdrawAmout) {
        userBalance -= amount.withdrawAmout;
        console.log(`Successfully Withdrawn ${amount.withdrawAmout}$.`);
        console.log(`New Balance: ${userBalance}$`);
    }
}

async function deposit() {
    const amount = await inquirer.prompt([{
        name: "depositAmout",
        type: "number",
        message: "Enter Amount to Deposit"
    }]);
    userBalance += amount.depositAmout;
    console.log(`Successfully Deposited ${amount.depositAmout}$`);
    console.log(`New Balance: ${userBalance}$`);
}

async function atm() {
    const data = await inquirer.prompt([{
        name: "userId",
        type: "input",
        message: "Enter your ID"
    },
    {
        name: "userPin",
        type: "password",
        message: "Enter your Pin"
    }
    ]);
    generateDetails();
    console.log(` Your Details: Account Number: ${uAccNumber}, Balance: ${userBalance}$\n`,
        `User2 Details: Account Number: ${u2AccNumber}, Balance: ${user2Balance}$`)
    let run: boolean = true;
    while (run) {
        const choice = await inquirer.prompt([{
            name: "funcs",
            type: "list",
            choices: ["Deposit", "Withdraw", "Transfer", "Check Balance", "Exit"]
        }]);
        switch (choice.funcs) {
            case "Deposit":
                await deposit();
                break;
            case "Withdraw":
                await withdraw();
                break;
            case "Transfer":
                await transfer();
                break;
            case "Check Balance":
                console.log(`Your Balance: ${checkBalance()}$`);
                break;
            case "Exit":
                run = false;
                break;
            default:
                break;
        }
    }
}

const generateDetails = (): void => {
    uAccNumber = Math.round(Math.random() * 1000000000000);
    u2AccNumber = Math.round(Math.random() * 1000000000000);
    userBalance = Math.round(Math.random() * 1000);
    user2Balance = Math.round(Math.random() * 1000);
}

atm();


