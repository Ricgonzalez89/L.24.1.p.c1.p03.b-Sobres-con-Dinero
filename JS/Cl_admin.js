export default class Cl_admin{
    constructor(){
        this.acumDinTotal = 0;
    }

    procesarSobre(s){
        //Acumular el dinero total de cada sobre
        this.acumDinTotal += s.calcDin();
    }

    dineroTotal(){
        return this.acumDinTotal;
    }
}