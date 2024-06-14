describe("Static", () => {
  class Configuration {
    static NAME: string = "Belajar";
    static VERSION: number = 2.0;
    static AUTHOR: string = "Muhammad Hashfi";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it('should support static number', () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5))
  });

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
});
