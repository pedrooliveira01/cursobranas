import Frete from "./Frete";
import Item from "./Item";

export default class OrderItem {    
    constructor (readonly item: Item, readonly price: number, readonly quantity: number){
       
    }

    getTotal(){
       return this.price * this.quantity;
    } 
}