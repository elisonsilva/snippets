
# Como posso obter o nome e a extensão da imagem no url da imagem [1](https://stackoverflow.com/questions/52055068/how-can-i-get-image-name-and-image-extension-from-image-url)

``` php
$url = 'https://static01.nyt.com/images/2018/08/28/us/28vote_print/28vote_xp-articleLarge.jpg?quality=75&auto=webp&disable=upscale';

// Getting the name
$name = pathinfo(parse_url($url)['path'], PATHINFO_FILENAME);

// Getting the extension
$ext = pathinfo(parse_url($url)['path'], PATHINFO_EXTENSION);

// Output:
var_dump($name);    // 28vote_xp-articleLarge
var_dump($ext);     // jpg
```
