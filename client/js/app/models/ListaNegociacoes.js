class ListaNegociacoes{

    constructor(armadilha){
        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);//A função Reflect.apply() chama uma função alvo com os argumentos especificados
    }

    esvazia(){
        this._negociacoes = [];
        this._armadilha(this);
    }

    get negociacoes(){

        return [].concat(this._negociacoes);
    }
}