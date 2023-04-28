import chalk from "chalk";
import inquirer from "inquirer";

async function wordCount(){
    let chars:number = 0;
    let words:number = 0;
    console.log("Characters and Words Counter");
    const paraInp = await inquirer.prompt([
        {
            name:"para",
            type:"input",
            message:"Write a Paragraph"
        }
    ]);
    for (let index = 0; index < (paraInp.para).length; index++) {
        if(paraInp.para[index+1]!=" ")    
            chars+=1;
        }
    for (let index = 0; index < (paraInp.para).length; index++) {
        if(paraInp.para[index] == ' '){
            words+=1;
        }
        }
    console.log(`Total Characters in your Paragraph (Without Whitespaces): ${chars}`);
    console.log(`Total Words in your Paragraph (Without Whitespaces): ${words}`);
}

wordCount();