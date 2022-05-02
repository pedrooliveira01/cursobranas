import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Frete from "./Frete";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon?: Coupon;   
    frete: Frete; 

    constructor (cpf: string, distance: number){
        this.cpf = new Cpf(cpf);
        this.orderItems = []; 
        this.frete = new Frete(distance);
    }

    addItem(item: Item, quantity: number){
      this.orderItems.push(new OrderItem(item, item.price, quantity));
    }

    addCoupon(coupon: Coupon){
        this.coupon = coupon;
    }

    getFrete(){        
        let total = 0;
        this.orderItems.map((orderItem) => {
            total += this.frete.getFrete(orderItem.item.getVolume(), orderItem.item.getDensity());
        }); 
        return total ? total : 0;
    }

    getTotal(){
        let total = this.orderItems.reduce((total, orderItem) => {
            total += orderItem.getTotal();
            return total;
        }, 0);
        if (this.coupon) total -= this.coupon.calculateDiscount(total); 
        total += this.getFrete();
        return total;
    }
}