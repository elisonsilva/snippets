# Pegar IP atual do usuário 

``` php
    /** Pegar IP atual */
    function getUserIpAddr(){
        if( !empty($_SERVER['HTTP_CLIENT_IP']) ){
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }

    echo getUserIpAddr();

```