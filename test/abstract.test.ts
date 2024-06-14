describe('Abstract Class', () => {
    abstract class Customer {
        readonly id: number
        abstract name: string
        
        constructor(id: number){ 
            this.id = id
        }
        hello() {
            console.info("hello")
        }

        abstract sayhello(name: string): void
    }

    class regularCustomer extends Customer {
        name: string

        constructor(id: number, name: string) {
            super(id)
            this.name = name
        }

        sayhello(name: string): void {
            console.info(`hello ${name} my name is ${this.name}`)
        }
    }

    it('should support', () => {
        const customer1 = new regularCustomer(1, "hass")
        customer1.sayhello("muhammad")
    });
})