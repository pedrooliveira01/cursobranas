import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

test("Não deve criar um pedido com cpf inválido", function() {
  expect( () => new Order("111.111.111-11", 1000)).toThrow(new Error("CPF Inválido"));
});

test("Deve criar um pedido com 3 itens (com descrição, preço e quantidade)", function() {
  const order = new Order("935.411.347-80", 1000);
  order.addItem( new Item(1, "Guitarra", 1000, 0, 0, 0, 0), 1);
  order.addItem( new Item(2, "Amplificador", 5000, 0, 0, 0, 0), 1);
  order.addItem( new Item(3, "Cabo", 30, 0, 0, 0, 0), 3);
  const total = order.getTotal();
  expect(total).toBe(6090);
});

test("Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)", function() {
    const order = new Order("935.411.347-80", 1000);
    order.addItem( new Item(1, "Guitarra", 1000, 0, 0, 0, 0), 1);
    order.addItem( new Item(2, "Amplificador", 5000, 0, 0, 0, 0), 1);
    order.addItem( new Item(3, "Cabo", 30, 0, 0, 0, 0), 3);
    order.addCoupon(new Coupon("VALE20", 20, new Date("3000-04-30T00:00:00")));
    const total = order.getTotal();
    expect(total).toBe(4872);
  });

  test("Não deve aplicar cupom de desconto expirado", function() {
    const order = new Order("935.411.347-80", 1000);
    order.addItem( new Item(1, "Guitarra", 1000, 0, 0, 0, 0), 1);
    order.addItem( new Item(2, "Amplificador", 5000, 0, 0, 0, 0), 1);
    order.addItem( new Item(3, "Cabo", 30, 0, 0, 0, 0), 3);
    expect(() => order.addCoupon(new Coupon("VALE20", 20, new Date("2022-04-30T00:00:00")))).toThrow("Cupom expirado");
    const total = order.getTotal();
    expect(total).toBe(6090);
  });

  test("Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)", function() {
    const order = new Order("935.411.347-80", 1000);
    order.addItem( new Item(1, "Camera", 1000, 20, 15, 10, 1), 1);
    order.addItem( new Item(2, "Guitarra", 5000, 100, 30, 10, 3), 1);
    order.addItem( new Item(3, "Geladeira", 30, 200, 100, 50, 40), 1);
    const frete = order.getFrete();
    expect(frete).toBe(440.00);    
  })