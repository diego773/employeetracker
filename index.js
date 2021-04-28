const inquirer = require("inquirer");
const db = require("./db");
const consoleTable = require("console.table");
const { prompt } = require("inquirer");

async function viewEmployees() {
  let allEmployees = await db.selectAllEmployees();
  console.table(db.allEmployees());
}

viewEmployees();

const addEmployees = () => {
  prompt({
    type: "list",
    name: "employeeToAdd",
    message: "What type of employee would you like to add?",
    choices: [
      "Sales lead",
      "Sales person",
      "Lead engineer",
      "Software engineer",
      "Account manager",
      "Accountant",
      "Legal team lead",
      "Lawyer",
    ],
  });
};
