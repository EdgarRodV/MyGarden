(function(){
    const app = angular.module("myGarden",[ ]);
    app.controller("plantasCtrl",["$scope",function($scope){
        $scope.plantas=[
            {
                "id": 0,
                "nombre": "Monstera",
                "categoria": "Media Sombra",
                "imagen": "Monstera",
                "alt": "Planta Monstera",
                "url": "monstera.html" 
            },
            {
                "id": 1,
                "nombre": "Alocasia Wentii",
                "categoria": "Media Sombra",
                "imagen": "AlocasiaWentii",
                "alt": "Planta Alocasia Wentii",
                "url": "AlocasiaWentii.html" 
            },
            {
                "id": 2,
                "nombre": "Sansevieria",
                "categoria": "Media Sombra",
                "imagen": "Sansevieria",
                "alt": "Planta Sansevieria",
                "url": "Sansevieria.html" 
            },
            {
                "id": 3,
                "nombre": "Potus (Télefono)",
                "categoria": "Media Sombra",
                "imagen": "telefono",
                "alt": "Planta Potus",
                "url": "telefono.html" 
            },
            {
                "id": 4,
                "nombre": "Goeppertia Insignis",
                "categoria": "Media Sombra",
                "imagen": "GoeppertiaInsignis",
                "alt": "Planta Goeppertia Insignis",
                "url": "goeppertiaInsignis.html" 
            }
        ];
    }]);
})();