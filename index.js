const db = require("./db");
require("console.table");

async function viewEmployees() {
  let allEmployees = await db.selectAllEmployees();
  console.table(db.allEmployees());
}

viewEmployees();
