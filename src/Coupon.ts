export default class Coupon {
    constructor (readonly code:string, readonly percentage: number, readonly expireDate: Date){
        if (expireDate < new Date()) throw new Error("Cupom expirado");

    }

    calculateDiscount(total : number){
        return (total * this.percentage) / 100;
    }
}