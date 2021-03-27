const {soma, sub, multi, div} = require("./sum");

describe ("funcão somar",() => {
    test("3 + 3 = 6", () =>{
        expect(soma(3,3)).toBe(6);
    });
    
}  )
describe ("funcão subtrair",() => {
    test("3 - 2 = 1", () =>{
        expect(sub(3,2)).toBe(1);
    });
   
}  )
describe ("funcão multiplicar",() => {
    test("3 * 3 = 9", () =>{
        expect(multi(3,3)).toBe(9);
   
    });
}  )
describe ("funcão dividir",() => {
    test("4 / 2 = 2", () =>{
        expect(div(4,2)).toBe(2);
    });
    
}  )