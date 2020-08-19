/**
 * Como ordenar alfabeticamente uma matriz de objetos por chave em JavaScript
 * ref.: https://ourcodeworld.com/articles/read/764/how-to-sort-alphabetically-an-array-of-objects-by-key-in-javascript
 */

/**
 * Function to sort alphabetically an array of objects by some specific key.
 * 
 * @param {String} property Key of the object to sort.
 */
function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

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

// Sort the MyData array with the custom function
// that sorts alphabetically by the name key
MyData.sort(dynamicSort("name"));

// Display data with new order !
console.log(MyData);


// Sort the MyData array with the custom function
// that sorts alphabetically in descending order by the name key
MyData.sort(dynamicSort("-name"));

// Display data with new order !
console.log(MyData);