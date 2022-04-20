# Export obj to csv

[Ref.](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)


## Out
``` javascript
/*out*/
downloadCSV({ filename: "pluginslist.csv" });
```

## Object
``` javascript
/*Object*/
var pluginslist = [
        {
            Symbol: "AAPL",
            Company: "Apple Inc.",
            Price: "132.54"
        },
        {
            Symbol: "INTC",
            Company: "Intel Corporation",
            Price: "33.45"
        },
        {
            Symbol: "GOOG",
            Company: "Google Inc",
            Price: "554.52"
        },
    ];
```



## Function download
``` javascript
    window.downloadCSV = function(args) {
        var data, filename, link;

        var csv = convertArrayOfObjectsToCSV({
            data: pluginslist // Obj
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    var today = new Date();
    var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
    var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var dateTime = date+'-'+time;
```

## Function convert object to cvs

``` javascript
    function convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }
```