describe("Medhod Overriding", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name} hai ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name)
      console.info(`and iam pppppp`)
      // console.info(`Hello ${name}, im ${this.name}`);
    }
  }

  it("should support", () => {
    const employee = new Employee("hass");
    employee.sayHello("Amadeus");

    const manager = new Manager("amadeus")
    manager.sayHello("manager")
  });
});
