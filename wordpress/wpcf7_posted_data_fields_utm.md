
Criar cookies para salvar os utms do parametros da url

``` javascript
function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    // Exemplo: https://www.w3schools.com/js/js_cookies.asp
    // Give the URL parameters variable names
    var source = getParameterByName('utm_source');
    var medium = getParameterByName('utm_medium');
    var campaign = getParameterByName('utm_campaign');
    var content = getParameterByName('utm_content');
    var term = getParameterByName('utm_term');
    if(source || medium  || campaign || content || term ){
        setCookie('utms', 'utm_source=' + source + '&utm_medium=' + medium + '&utm_campaign=' + campaign + '&utm_content=' + content + '&utm_term=' + term);
    }
```

Action para salvar 

```php
function save_application_form($array){
	if( isset($_COOKIE['utms']) ){
		
		$utms = explode('&',$_COOKIE['utms']);
		$utmsNew = array();
		
		foreach ($utms as $key => $value) {
			$utm = explode('=',$value);
			$utmsNew[$utm[0]] = $utm[1];
		}

		$array["utm_source"] = isset($utmsNew['utm_source']) ? $utmsNew['utm_source'] : '';
		$array["utm_medium"] = isset($utmsNew['utm_medium']) ? $utmsNew['utm_medium'] : '';
		$array["utm_campaign"] = isset($utmsNew['utm_campaign']) ? $utmsNew['utm_campaign'] : '';
		$array["utm_url"] = empty($_SERVER['HTTP_REFERER']) ? '' : $_SERVER['HTTP_REFERER'];
	}
	return $array;
}
add_filter( 'wpcf7_posted_data', 'save_application_form', 10, 1 );
```
