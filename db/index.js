const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOINT role on employee.role_id LEFT JOINT department on role.department_id = department.id LEFT JOINT employee manager on manager.id = employee.manager_id;"
    );
  }
}

module.exports = new DB(connection);
