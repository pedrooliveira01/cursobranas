import Frete from "../src/Frete"

test("Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado", function() {
    const frete = new Frete(1000);
    expect(frete.getFrete(0.001, 1)).toBe(10);
})

test("Deve retornar o frete calculado", function() {
    const frete = new Frete(1000);
    expect(frete.getFrete(0.03, 100)).toBe(30);
})