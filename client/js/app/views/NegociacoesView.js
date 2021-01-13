class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){

        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
            ${model.negociacoes.map(n => {
            //Quando a resposta é numa única linha, o 'return' é opcional
            return `
                <tr>
                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>
            `
            }).join('')}
        </tbody>      
        <tfoot>
        <td colspan="3"></td>
        <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
            /*
            A opção acime trata da programação funcional usando arrow function. 
            (function() {
                
                let total = 0;
                model.negociacoes.forEach(n => total+= n.volume);
                return total;
           })() //IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida. Os parênteses no final executam o bloco. */
          }
        </td>
    </tfoot>
        </table>
        `;
    }

    update(model){

        this._elemento.innerHTML = this._template(model);
    }

}