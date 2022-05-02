export default class Item{
    constructor (
        readonly idItem: number, 
        readonly description: string, 
        readonly price: number,
        readonly height: number,
        readonly width: number,
        readonly depth: number,
        readonly weight: number){

    }

    getVolume() {
        return (this.height/100) * (this.width/100) * (this.depth/100);
    }

    getDensity() {
        return Math.round(this.weight / this.getVolume());
    }    
}