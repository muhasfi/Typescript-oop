describe("Inhterface", () => {
    interface hasName {
        name: string
    }

    interface canSayHello {
        sayHello(name: string): void
    }

    class Person implements hasName, canSayHello {
        name: string

        constructor (name: string) {
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name} , hai ${this.name}`)
        }
    }

    it('should support inheritace', () => {
        const person = new Person("hass")
        person.sayHello("amadeus")
    });
})