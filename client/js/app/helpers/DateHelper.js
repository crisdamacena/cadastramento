class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode ser instanciada');
    }

    //Com o static, o método funciona na classe e não somente no instanciamento
    //Métodos estáticos podem ser chamados sem uma instancia do objeto criada
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd')
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    //Spread Operator desmembra um objeto iterável
    //O método split() separa itens de uma string e cria um novo array
    // O método map() varre um array e transforma cada item antes de jogar no novo array
    //A flecha => é uma arrow function, ou funções seta, e foi introduzidas no ES6
    //As datas em Javascript são contadas com meses de 0 a 11. O mês é decrementado em 1 valor
    
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
}