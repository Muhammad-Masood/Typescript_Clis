import inquirer from "inquirer";
import chalk from "chalk";

async function guess() {
    console.log(chalk.black(chalk.bold("Number Guessing Game")));
    const round = await inquirer.prompt([{
        name:"round",
        type:"list",
        choices:["Easy","Medium","Hard"],
        message:"Choose The Level Of Difficulty"
    }]);
    if(round.round == "Easy"){
        let r = 1;
        console.log("YOU HAVE 7 ROUNDS!");
        for(let i = 0 ; i<7 ; i++){
            if(r==7){
                console.log(chalk.redBright(chalk.bold(("LAST ROUND BRUH!!!"))));
                }
            else{
                console.log(chalk.bgCyan(chalk.blackBright(`Round ${r}, LET'S GO!`)));
                }
        const random = Math.round(Math.random()*4);
        const input = await inquirer.prompt([
            {
                name:"number",
                type:"number",
                message:"Guess A Number (Hint: 0-4)"
            }]);
            console.log(`Number Generated: ${random}`);
            if(input.number == random){
                console.log(chalk.bgWhiteBright(chalk.bold(("CONGRATS!!! YOU WON!!!"))));
                break;
            }
            r++;
            if(r==8 && input.number!=random){
                console.log(chalk.red("YOU LOOOOOSEE!!"));
            }
            }
        }
    else if(round.round == "Medium"){
        let r = 1;
        console.log("YOU HAVE 6 ROUNDS!");
        for(let i = 0 ; i<6 ; i++){
            if(r==6){
                console.log(chalk.redBright(chalk.bold(("LAST ROUND BRUH!!!"))));
                }
                else{
            console.log(`Round ${r}! LET'S GO!`);
                }
        const input = await inquirer.prompt([
            {
                name:"number",
                type:"number",
                message:"Guess A Number from (Hint: 0-9)"
            }]);
            const random = Math.round(Math.random()*9);
            console.log(`Number Generated: ${random}`);
            if(input.input == random){
                console.log(chalk.bgWhiteBright("CONGRATS!!! YOU WON!!!"));
                break;
            }
            r++;
            if(r==7 && input.number!=random){
                console.log(chalk.red("YOU LOOOOOSEE!!"));
            }
        }
        }
    else{
        let r = 1;
        console.log("YOU HAVE 4 ROUNDS!");
        for(let i = 1 ; i<5 ; i++){
            if(r==4){
                console.log(chalk.redBright(chalk.bold(("LAST ROUND BRUH!!!"))));
                }
                else{
            console.log(`Round ${r}! LET'S GO!`);
                }
        const input = await inquirer.prompt([
            {
                name:"number",
                type:"number",
                message:"Guess A Number from (Hint: 0-99)"
            }]);
            const random = Math.round(Math.random()*99);
            console.log(`Number Generated: ${random}`);
            if(input.input == random){
                console.log(chalk.bgWhiteBright("CONGRATS!!! YOU WON!!!"));
                break;
            }
            r++;
            if(r==5 && input.number!=random){
                console.log(chalk.red("YOU LOOOOOSEE!!"));
            }
            }
    }

    const inp2 = await inquirer.prompt([{
        name:"choice",
        type:"list",
        choices:["Play Again","Exit"]
    }]);
    if(inp2.choice == "Play Again"){
        guess();
    }
}
guess();