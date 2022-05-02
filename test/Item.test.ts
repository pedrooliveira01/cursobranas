import Item from "../src/Item"

test("Deve criar um item", function () {
    const item = new Item(1, "Guitarra", 1000, 20, 15, 10, 1);
    expect(item).toEqual({idItem: 1, 
        description: "Guitarra", 
        price: 1000,
        height: 20,
        width: 15,
        depth: 10,
        weight: 1});
})

test("Deve pegar o volume", function () {
    const item = new Item(1, "Guitarra", 1000, 20, 15, 10, 1);
    
    expect(item.getVolume()).toBe(0.003);
})

test("Deve pegar a densidade", function () {
    const item = new Item(1, "Guitarra", 1000, 20, 15, 10, 1);
    
    expect(item.getDensity()).toBe(333);
})