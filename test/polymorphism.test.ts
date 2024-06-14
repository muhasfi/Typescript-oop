describe('Polymorphism', ()=> {
    class Employee {
        constructor(public name: string){

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager{

    }
    
    function sayHello (employee: Employee): void {
        // console.info(`Hello ${employee.name}`)
        
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.info(`Hello VP ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager
            console.info(`Hello Manager ${manager.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    function sayHelloWrong (employee: Employee): void {
        // console.info(`Hello ${employee.name}`)
        
        if (employee instanceof Manager) {
            const manager = employee as Manager
            console.info(`Hello manager ${manager.name}`)
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.info(`Hello vp ${vp.name}`)
        } else {
            console.info(`Hello employee ${employee.name}`)
        }
    }

    it('should support', () => {
        let employee: Employee = new Employee("hass")
        console.info(employee)

        employee = new Manager("hass")
        console.info(employee)

        employee = new VicePresident("hass")
        console.info(employee)
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("hass"))
        sayHello(new Manager("muh"))
        sayHello(new VicePresident("pppp"))
    });

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee("hass"))
        sayHelloWrong(new Manager("muh"))
        sayHelloWrong(new VicePresident("pppp"))
    });
})