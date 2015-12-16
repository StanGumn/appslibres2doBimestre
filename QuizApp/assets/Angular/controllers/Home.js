app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {

    console.log("Entro al controlador Home");


    $http({
        method: 'GET',
        url: 'http://localhost:1337/Usuarios'
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);

            $scope.listaUsuarios = respuesta.data;
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });

}]);