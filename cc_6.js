// Base class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Subclass for Manager
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department, teamSize);
        this.teamSize = teamSize;
    }
    describe(){
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}

// Employees
const employees = [
    new Employee("Ed", "Sales"),
    new Employee("Edd", "Marketing"),
    new Employee("Eddy", "HR")
];

// Managers
const man1 = new Manager("Alice", "Engineering", 5);
const man2 = new Manager("Bob", "Design", 3);

// Display descriptions
for (const employee of employees) {
    console.log(employee.describe());
}
for (const manager of [man1, man2]) {
    console.log(manager.describe());
}

// Company class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) { 
        this.employees.push(employee);
    }

    listEmployees() {
        console.log("Current Employees:");
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
}
}



// instantiate company and add employees
const myCompany = new Company("Tech Solutions");

const emp4 = new Employee("Charlie", "Support");
const emp5 = new Employee("Dave", "Development");

const man3 = new Manager("Eve", "Operations", 4);

myCompany.addEmployee(emp4);
myCompany.addEmployee(emp5);
myCompany.addEmployee(man3);

myCompany.listEmployees();