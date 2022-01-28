
# PHP preg_replace to turn **xyz** to <b>xyz</b>[1](https://stackoverflow.com/questions/4019187/php-preg-replace-to-turn-xyz-to-bxyz-b)[2](https://stackoverflow.com/questions/19253840/make-text-between-asterisks-bold)

``` php
$string = 'start ** not bold ** and **bold** not bold **bold *** still bold** not bold **** not bold ****';

echo preg_replace('/(?<!\*)\*\*(?![\s*])(.*?)(?<![\s*])\*\*(?!\*)/', '<b>$1</b>', $string);


# Colocar ultima palavra em negrito
preg_replace('/(\s+\S+)?$/', '<b>$1</b>','Inteligência para a sua vida - Podcast');

# A primeira palavra
preg_replace('/^(\S+(\s+)?)/', '<b>$1</b>','Inteligência para a sua vida - Podcast');

# As duas primeiras
reg_replace('/^(\S+(\s+\S+)?)/', '<b>$1</b>','Inteligência para a sua vida - Podcast');

```



