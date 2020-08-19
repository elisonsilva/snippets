# String Format com JavaScript

[Ref.](https://pt.stackoverflow.com/questions/82852/string-format-com-javascript)

``` javascript
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) { 
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                ;
            });
        };
    }
    console.log("{0} is dead, but {1} is alive!".format("ASP", "ASP.NET"));
```