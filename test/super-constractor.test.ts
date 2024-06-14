describe("Super Constractor", () => {
    class Person {
        name: string

        constructor(name: string) {
            this.name = name
        }
    }

    class Employee extends Person {
        departement : string

        constructor(name: string, departemn: string) {
            super(name)
            this.departement = departemn
        }
    }

    it('should support', () => {
        const employee = new Employee("hass", "departement")
        console.info(employee.name)
        console.info(employee.departement)
    });
})




