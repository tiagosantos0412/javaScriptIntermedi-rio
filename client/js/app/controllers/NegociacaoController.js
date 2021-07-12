class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
/*
    adiciona(event){
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ', ')); //utilizando expressão regular para substituir o hifén do array por virgula
        let data = new Date(...this._inputData.value.split('-').map(function(item, indice){
            if(indice == 1){
                return item -1;
            }
            return item;
        }));
        console.log(data);
    }
*/

/*
    adiciona(event){
        event.preventDefault();
        let data = new Date(...this._inputData.value.split('-').map(function(item, indice){
            return item - indice %2;
        }));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
*/

/*
    adiciona(event){
        event.preventDefault();
        let data = new Date(...this._inputData.value.split('-').map((item, indice) =>{
            return item - indice %2;
        }));

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }
*/

    adiciona(event){

        event.preventDefault();

        //let helper = new DateHelper();

        let data = DateHelper.textoParaData(this._inputData.value);

        this._listaNegociacoes.adiciona(this._criaNegociacao());

        this._mensagem.texto = "Negociação adicionada com sucesso!";
        this._mensagemView.update(this._mensagem);

        this._negociacoesView.update(this._listaNegociacoes);

        this._limpaFormulario();
    }

    _criaNegociacao() {

        return new Negociacao(
              DateHelper.textoParaData(this._inputData.value),
              this._inputQuantidade.value,
              this._inputValor.value
          );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0

        this._inputData.focus();

    }

/*
    forma mais resumida sem a variável data.
    
    adiciona(event) {

        event.preventDefault();
    
        let helper = new DateHelper();
    
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

*/

}