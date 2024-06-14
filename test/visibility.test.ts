describe("Visibility", () => {
  class Counter {
    protected counter: number = 0; //private

    public increment(): void {
      this.counter++;
    }

    public getcounter(): number {
      return this.counter;
    }
  }

  class DoubleOunter extends Counter {
    public increment(): void {
      this.counter += 2;
    }
  }

  it("should support private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.info(counter.getcounter());
  });

  it("should support protected", () => {
    const counter = new DoubleOunter();
    counter.increment();
    counter.increment();
    counter.increment();

    console.info(counter.getcounter());
  });
});
