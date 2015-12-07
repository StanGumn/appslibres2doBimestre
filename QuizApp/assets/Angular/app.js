var app = angular.module('Usuarios',[]);


app.controller('Usuario', ['$scope','$http', function($scope,$http) {
    $scope.saludo = 'Hola!';
    $scope.nombre = 'Adrian';
    $scope.saludo = function(){
        return "Saludos" + $scope.nombre ;
    }
    
$http({
    method: 'GET',
    url: 'http://localhost:1337/Usuarios'
}).then(function successCallback(DATOS) {
   console.log(DATOS);
    
    $scope.usuarios = DATOS.data;
    
    
    
}, function errorCallback(ERROR) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(ERROR);
});
    
    $scope.seleccionado = 0;


}]);















