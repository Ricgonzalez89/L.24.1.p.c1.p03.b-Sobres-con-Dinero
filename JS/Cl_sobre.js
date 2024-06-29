export default class Cl_sobre{
    constructor(vB, c){
        this.valorB = vB;
        this.cantB = c;
    }

    set valorB(vB){
        this._valorB = vB;
    }

    get valorB(){
        return this._valorB;
    }

    set cantB(c){
        this._cantB = c;
    }

    get cantB(){
        return this._cantB;
    }

    calcDin(){
        return this.valorB * this.cantB;
    }
}