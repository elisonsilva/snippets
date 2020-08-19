# Formatar moeda brasileira em JavaScript

[Ref.](http://wbruno.com.br/expressao-regular/formatar-em-moeda-reais-expressao-regular-em-javascript/)
``` javaScript

    /* Expressão regular para localizar os valores números e substituí-los pela formatação em Real.*/

    var test = 'R$ 1.700,90';

    function getMoney( str ){
        return parseInt( str.replace(/[\D]+/g,'') );
    }

    function formatReal( int ){
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }


    var int = getMoney( test );
    console.log( int ); // 170090


    console.log( formatReal( 1000 ) ); // 10,00
    console.log( formatReal( 19990020 ) ); // 199.900,20
    console.log( formatReal( 12006 ) ); // 120,06
    console.log( formatReal( 111090 ) ); // 1.110,90
    console.log( formatReal( 1111 ) ); // 11,11
    console.log( formatReal( 120090 ) ); // 1.200,90
    console.log( formatReal( int ) ); // 1.700,90
``` 