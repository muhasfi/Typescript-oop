describe("Instance Of",() => {
    class Employee {}
    class Manager {}

    const hass = new Employee()
    const muh = new Manager()

    it('should have problem using typeof', () => {
        console.info(typeof hass)
        console.info(typeof muh)
    });

    it('should support instanceof', () => {
        expect(hass instanceof Employee).toBe(true)
        expect(hass instanceof Manager).toBe(false)

        expect(muh instanceof Employee).toBe(false)
        expect(muh instanceof Manager).toBe(true)
    });
})