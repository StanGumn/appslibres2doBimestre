var app = angular.module('AplicacionPrueba',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home',{
        url:"/", 
        templateUrl: "rutas/Home.html", 
        controller:'HomeController'
    })        
        .state('cuenta',{url:"/Usuarios", templateUrl: "rutas/CuentaUsuario.html", controller:'CuentaUsuarioController'})
    
        .state('usuarios',{url:"/Cuentas", templateUrl: "rutas/Usuarios.html", controller:'UsuariosController'});
});
















