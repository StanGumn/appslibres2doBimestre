app.controller('EditarUsuarioController', ['$scope', "$http", '$stateParams', 'PruebasFactory', function ($scope, $http, $stateParams, PruebasFactory) {

    console.log("Entro a Editar usuario");

    console.log($stateParams.idUsuario);

    $http({
        method: 'GET',
        url: 'http://localhost:1337/Usuarios/' + $stateParams.idUsuario
    }).then(
        function exitoEnElGuardado(respuesta) {
            console.log(respuesta);

            $scope.usuariosEdit = respuesta.data;
        },
        function falloEnElGuardado(error) {
            console.log(error);
        });

    $scope.editarUsuario = function () {
        $http({
            method: 'PUT',
            url: 'http://localhost:1337/Usuarios/' + $stateParams.idUsuario,
            data: {
                nombre: $scope.usuariosEdit.nombre,
                apellido: $scope.usuariosEdit.apellido,
                password: $scope.usuariosEdit.password,
                correo: $scope.usuariosEdit.correo,
                imagen: $scope.usuariosEdit.imagen
            }
        }).then(
            function exitoEnElGuardado(respuesta) {
                console.log(respuesta);

                $scope.usuariosEdit = respuesta.data;
            },
            function falloEnElGuardado(error) {
                console.log(error);
            });


    }

    PruebasFactory.busqueda({
            idUsuario: $stateParams.idUsuario
        })
        .$promise.then(
            function llegaron(respuesta) {
                console.log(respuesta);
            },
            function Errores(error) {
                console.log(error);
            }

        );

    
    PruebasFactory.save({
            nombre: $stateParams.pruebas.nombre
        })
        .$promise.then(
            function llegaron(respuesta) {
                console.log(respuesta);
                $state.pruebas  
            },
            function Errores(error) {
                console.log(error);
            }

        );
    //    $scope.varialeNomnreDelDesarrollador = {
    //        nombre: 'Adrian',
    //        edad: 21,
    //        casado: true,
    //        hijos: ['pepe', 'juan'],
    //        novia: {
    //            nombre: 'fsddsf'
    //        }
    //    };
    //    $scope.varialeNomnreDelDesarrollador = "Nombre";
    //    $scope.varialeNomnreDelDesarrollador = 1;
    //    $scope.varialeNomnreDelDesarrollador = function () {
    //
    //    };
    //    $scope.varialeNomnreDelDesarrollador = true;
    //    $scope.varialeNomnreDelDesarrollador = false;
    //    $scope.varialeNomnreDelDesarrollador = null;
    //    $scope.varialeNomnreDelDesarrollador = undefined;
    //    $scope.varialeNomnreDelDesarrollador = [1, "asdsd", true, false, null, undefined, function () {}];

}]);