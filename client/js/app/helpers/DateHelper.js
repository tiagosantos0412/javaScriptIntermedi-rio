class DateHelper{

    constructor(){

        throw new Error('Esta classe não pode ser instanciada!');
    }

    static dataParaTexto(data){

        //Utilizando template string

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

        /*
            return data.getDate()
            + '/' + (data.getMonth() +1)
            + '/' + data.getFullYear();
        */
    }

    static textoParaData(texto){

        //expressão regular para realizar a validação da string de data

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('A data deve estar no formato yyyy-mm-dd');
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
}