// import inquirer from "inquirer";

// const checkBalance = (_uBalance:number): number => {
//     return _uBalance;
// }

// async function transfer(_recieverBal:number, _recieverAcc:number, _uBalance:number) {
//      const data = await inquirer.prompt([{
//         name:"transferAmount",
//         type:"number",
//         message:"Enter Amount to Transfer"
//     }
// ]);
//     if(_uBalance>=data.transferAmount){
//         _recieverBal+=data.transferAmount;
//         _uBalance-=data.transferAmount;
//         console.log(`Successfully Transferred Amount: ${data.transferAmount}$ to ${data._recieverAcc}.`);
//         console.log(`New Balance: ${_uBalance}$`);
//     }
//     else{
//         console.log("Transfer Failed!");
//     }
// }

// async function withdraw(_uBalance:number) {
//     const amount = await inquirer.prompt([{
//         name:"withdrawAmout",
//         type:"number",
//         message:"Enter Amount to Withdraw"
//     }]);
//     if(_uBalance>=amount.withdrawAmout){
//         _uBalance-=amount.withdrawAmout;
//         console.log(`Successfully Withdrawn ${amount.withdrawAmout}$.`);
//         console.log(`New Balance: ${_uBalance}$`);
//         return _uBalance;
//     }
// }

// async function deposit (_uBalance:number){
//     const amount = await inquirer.prompt([{
//         name:"depositAmout",
//         type:"number",
//         message:"Enter Amount to Deposit"
//     }]);
//     _uBalance+=amount.depositAmout;
//     console.log(`Successfully Deposited ${amount.depositAmout}$`);
//     console.log(`New Balance: ${_uBalance}$`);
//     return _uBalance;
// }

// export {checkBalance,transfer,deposit,withdraw};