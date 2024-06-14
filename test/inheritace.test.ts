describe("Inheritance", () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support ", () => {
    const employee = new Employee("hass");
    console.info(employee.name);

    const manager = new Manager("amadeus");
    console.info(manager.name);

    const director = new Director("ddddddd");
    console.info(director.name);
  });
});
