class NegociacaoController {

    constructor() {
        //O querySelector() obtem o primeiro elemento de uma árvore DOM ou um elemente específico usando o ID. Lembrar que o ID não pode ser repetido.
        let $ = document.querySelector.bind(document); //O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {

        event.preventDefault(); //Cancela o evento se for cancelável, sem parar a propagação do mesmo. Neste caso aqui, não dá refresh na página
   
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        this._listaNegociacoes.negociacoes.length = 0;

        console.log(this._listaNegociacoes.negociacoes);
    }

    //Os métodos auxiliares são métodos precedidos de "_" que são usados e acessados somente dentro da classe
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}