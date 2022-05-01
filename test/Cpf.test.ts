import Cpf from "../src/Cpf"

test("Deve validar um cpf válido", function () {
    const cpf = new Cpf("935.411.347-80");
    expect(cpf.value).toBe("935.411.347-80");
})

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"
]

test.each(wrongSameDigitCpf)("Deve validar um cpf inválido com todos os números iguais", function (cpf) {
    expect(() => new Cpf(cpf)).toThrow(new Error("CPF Inválido"));
})

test("Deve validar um cpf valido sem pontos e traços", function () {
    const cpf = new Cpf("93541134780");
    expect(cpf.value).toBe("93541134780");    
})

test("Deve validar length CPF", function () {
    expect(() => new Cpf("935411347801")).toThrow(new Error("CPF Inválido"));   
})