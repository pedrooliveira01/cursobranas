import Coupon from "../src/Coupon"

test("Cupom expirado", function() {
    expect(() => new Coupon("VALE20", 20, new Date("2022-04-30T00:00:00"))).toThrow("Cupom expirado");

})