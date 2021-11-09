const Calculator = require("./calс")


describe("calculator", function () {
    const calc = new Calculator()
    describe("Summ", function () {
        it("Summ numbers ", function () {
            expect(calc.summ(1,1)).toEqual(2)
        });
        it("Summ string and number", function () {
            expect(calc.summ("1",1)).toEqual("11")
        });
        it("Summ boolean and number", function () {
            expect(calc.summ(true,0)).toEqual(1)
        });
    });
    describe("Multiplication", function () {
        it("Multiplication on 0", function () {
            expect(calc.multiplication(10001,0)).toEqual(0)
        });
        it("Multiplication on true", function () {
            expect(calc.multiplication(10001,true)).toEqual(10001)
        });
        it("Multiplication on  0.001", function () {
            expect(calc.multiplication(100001,0.001)).toEqual(100.001)
        });
    });
    describe("Division", function () {
        it("Division numbers", function () {
            expect(calc.division(2,4)).toEqual(0.5)
        });
        it("Division numbers on string", function () {
            expect(calc.division(2,"4")).toEqual(0.5)
        });
        it("Division numbers on string", function () {
            expect(calc.division(2,0)).toEqual(Infinity)
        });
    });
    describe("Subtraction", function () {
        it("subtraction numbers", function () {
            expect(calc.subtraction(2,0)).toEqual(2)
        });
        it("subtraction numbers and  string ", function () {
            expect(calc.subtraction(2,"-3")).toEqual(5)
        });
        it("subtraction numbers and NaN ", function () {
            expect(calc.subtraction(2,NaN)).toBeNaN()
        });
    });
});

