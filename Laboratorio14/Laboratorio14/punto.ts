export class Punto {

    constructor(private _x?: number,private _y?: number){

    }

    disegna(){
        console.log('x: '+ this._x, 'y: ' + this._y   );
    }

    get x(){
        return this._x;
    }
    set x(valore){
        if (valore < 0)
            throw new Error('non puoi passare valori negativi!');
        this._x = valore;
    }
}
