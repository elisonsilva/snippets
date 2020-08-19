# Salvar a saída de um console.log (objeto) para arquivo?

[Ref.](http://bgrins.github.io/devtools-snippets/#console-save)

**Dados Json**

``` javascript
/**
 * Variável com array de objetos
 */
var MyData = [
    { id : 1, name: "Angel Miguel",   city: "Nex Mexico" },
    { id : 2, name: "Michael Rogers", city: "Bogotá"     },
    { id : 3, name: "Steve Rogers",   city: "New York"   },
    { id : 4, name: "Ángel José",     city: "Bucaramanga"},
    { id : 5, name: "Carlos Delgado", city: "Nex Mexico" },
    { id : 6, name: "Jhonny Zapata",  city: "Zacatecas"  },
    { id : 7, name: "Bruce Wayne",    city: "Gotham"     },
    { id : 8, name: "Speedy Gonzales",city: "Nex Mexico" }
];
```


**Ordenar dados por *name***
``` javascript
// Console save file
console.save(MyData, 'filename');
```

**Função personalizada**

``` javascript
/**
 * console.save( DATA, FILENAME );
 */
(function(console){

console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)

```
