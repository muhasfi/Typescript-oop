describe("Properties", () => {
    class Customer {
        readonly id: number
        name: string = "p"  //default value
        age?:number

        constructor (id: number, name: string) {
            this.id = id
            this.name = name //hilangkan
        }

        sayhello(name: string): void {
            console.info(`Hello ${name} hai ${this.name}`)
        }
    }
    it('should can have properties', () => {
        const customer = new Customer(1, 'hass')
        customer.age = 22

        console.info(customer.id)
        console.info(customer.name)
        console.info(customer.age)
        console.info(customer)
    });

    it('should can have method', () => {
        const customer = new Customer(1, "hass" )
        customer.sayhello("amadeus")
    });

})