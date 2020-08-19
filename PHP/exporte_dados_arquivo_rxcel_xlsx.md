# Exporte dados para arquivo Excel XLSX. Gerador PHP XLSX. Sem ferramentas e bibliotecas externas.

[Simplexlsxgen](https://github.com/shuchkin/simplexlsxgen)

``` php 

    include_once('SimpleXLSXGen.php');
    $books = [
        ['ISBN', 'title', 'author', 'publisher', 'ctry' ],
        [618260307, 'The Hobbit', 'J. R. R. Tolkien', 'Houghton Mifflin', 'USA'],
        [908606664, 'Slinky Malinki', 'Lynley Dodd', 'Mallinson Rendel', 'NZ']
    ];
    $xlsx = SimpleXLSXGen::fromArray( $books );
$xlsx->saveAs('books.xlsx');

// Download
// SimpleXLSXGen::download() or SimpleXSLSXGen::downloadAs('table.xlsx');

```

Composer

``` bash
composer require shuchkin/simplexlsxgen
```