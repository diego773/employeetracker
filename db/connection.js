const inquirer = require("inquirer");
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Stingray1!",
  database: "employees",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const addEmployees = () => {
  inquirer.prompt({
    first_name: "action",
    last_name: "action",
    role_id: "action",
    manager_id: "action",
    message: "what would you like to do",
  });
};

const tableDepartment = () => {
  inquirer.prompt({
    department: "action",
  });
};

const tableRole = () => {
  inquirer.prompt({
    title: "action",
    salary: "decimal",
    department_id= "integer",
  });
};

connection.query = util.promisify(connection.query);

module.exports = connection;

