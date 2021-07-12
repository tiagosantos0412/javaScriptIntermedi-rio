class ListaNegociacoes {

    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);

    }

    get negociacoes(){
        //programação defensiva eu crio uma cópia da negociação para a verdadeira não ser alterada
        return [].concat(this._negociacoes);
    }
}