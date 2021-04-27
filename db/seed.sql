USE employees;

INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales lead", 30000, 1),
    ("Sales person", 40000, 1),
    ("Lead engineer", 90000, 2),
    ("Software engineer", 70000, 2),
    ("Account manager", 100000, 3),
    ("Accountant", 80000, 3),
    ("Legal team lead", 120000, 4),
    ("Lawyer", 130000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Michael", "Scott", 1, NULL),
    ("Dwight", "Schrute", 1, 1),
    ("Jim", "Halpert", 2, NULL),
    ("Darryl", "Philbin", 2, 2),
    ("Oscar", "Martinez", 3, NULL),
    ("Kevin", "Malone", 3, 3),
    ("Toby", "Flenderson", 4, NULL),
    ("Holy", "Flacks", 4, 4);

