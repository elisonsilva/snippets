# Additional method Jquery Validate ViaCep

ref. [[1](https://itqna.net/questions/89066/additional-method-jquery-validate-viacep)]

```javascript
$.validator.addMethod('cep', function(val) {

    var cep = val.replace(/\D/g, '');
    //Expressão regular para validar o CEP.
    validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {
            if (!("erro" in dados)) {
                return true;
            } //end if.
            else {
                //CEP pesquisado não foi encontrado.
                return false
            }
        });
    } //end if.
    else {
        //cep é inválido.
        return false;
    }
}, 'Cep invalido');
```