// base class
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// subclass for Manager
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department, teamSize);
        this.teamSize = teamSize;
    }
    describe(){
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}

const employees = [
    new Employee("Ed", "Sales"),
    new Employee("Edd", "Marketing"),
    new Employee("Eddy", "HR")
];

for (const employee of employees) {
    console.log(employee.describe());
}

const man1 = new Manager("Alice", "Engineering", 5);
const man2 = new Manager("Bob", "Design", 3);

for (const manager of [man1, man2]) {
    console.log(manager.describe());
}