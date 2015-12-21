app.factory('PruebasFactory', ['$resource', function ($resource) {
    var pruebas = $resource('http://localhost:1337/Pruebas/:id', {
        id: '@id'
    }, {
        actualizar: {
            method: 'put'
        },  
        busqueda: {
            method: 'get',
            URL: 'http://localhost:1337/Pruebas?idUsuario=:idUsuario',
            isArray: true,
            params: {
                idUsuario: '@idUsuario'
            }
        }

    });
    return pruebas;
}]);