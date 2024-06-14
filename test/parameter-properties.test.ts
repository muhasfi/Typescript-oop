describe("Parameter Properties", () => {
    class Person {
        constructor(public name: string){}
    }

    it('should support', () => {
        const person = new Person("hass")
        console.info(person.name)

        person.name = "amadeus"
        console.info(person.name)
    });
})

