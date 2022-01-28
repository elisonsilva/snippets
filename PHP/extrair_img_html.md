#Como extrair img src, título e alt de html usando php? [1](https://www.ti-enxame.com/pt/php/como-extrair-img-src-titulo-e-alt-de-html-usando-php/958409893/) [2](https://stackoverflow.com/questions/21842117/using-preg-match-all-to-extract-all-image-links-on-a-webpage) [3](https://www.py4u.net/discuss/973276)

## obter toda a tag img
``` php
    /* preg_match_all match the regexp in all the $html string and output everything as 
    an array in $result. "i" option is used to make it case insensitive */

    # preg_match_all("/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png))/i", $raw, $matching)
    preg_match_all('/<img[^>]+>/i',$html, $result);

    print_r($result);

```

## extrair seus metadados
``` php
    $img = array();
    foreach( $result as $img_tag)
    {
        preg_match_all('/(alt|title|src)=("[^"]*")/i',$img_tag, $img[$img_tag]);
    }

    print_r($img);
```


## Extrair apenas src

``` php
    // get the featured image
    $image = get_the_post_thumbnail($photos[$i]->ID);

    // get the src for that image
    $pattern = '/src="([^"]*)"/';
    preg_match($pattern, $image, $matches);
    $src = $matches[1];
    unset($matches);
```