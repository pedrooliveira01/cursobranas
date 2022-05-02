export default class Frete {
    VALOR_MINIMO = 10;
    constructor (readonly distance:number){

    }

    getFrete(volume: number, depth: number ){   
        const total = Math.round((this.distance * volume * (depth / 100))  ) ;
        if (total<this.VALOR_MINIMO) return this.VALOR_MINIMO;
        return total;
    }    
}