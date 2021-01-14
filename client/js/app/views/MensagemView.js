class MensagemView extends View{

    //Por padrão, quando uma classe herda outra, ela também herda seu construtor. A escrita do construtor é opcional CASO NENHUMA OUTRA DEPENDA DELA AQUI
    constructor(elemento){
        super(elemento);//Ao declarar o super, há uma chamada para a classe pai. Classe de onde foram herdados os elementos.
    }

    _template(model) {
        return model.texto ? `<p class="alert alert-warning">${model.texto}</p>` : `<p></p>`;
  }
    
}