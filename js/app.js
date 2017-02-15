const app = angular.module('PropData', [
        'ngMaterial', 
        'ui.router',
        'angularUtils.directives.dirPagination',
    ]);
// angular material theme
// config(function ($mdThemingProvider) {
//     $mdThemingProvider.theme('default')
//         .primaryPalette('blue')
//         .accentPalette('orange')
    //end of theme


    //controller loop
    const controllers = [
        require('./controllers/listings'),
        require('./controllers/map'),
    ];
    for (let i = 0; i < controllers.length; i++) {
        app.controller(controllers[i].name, controllers[i].func)
    };
    // components loop
    const components = [
        require('./components/listings'),
        require('./components/map'),
    ];
    for (let i = 0; i < components.length; i++) {
        app.component(components[i].name, components[i].object)
    };
    // services loop
    const services = [
        require('./services/listings'),
        require('./services/map'),
    ];
    for (let i = 0; i < services.length; i++) {
        app.factory(services[i].name, services[i].func)
    };
    // router
    const routers = require('./routers');
    app.config($stateProvider => {
        for (let i = 0; i < routers.length; i++) {
            $stateProvider.state(routers[i]);
        }
    });

//Google maps
// angular.module('appMaps', ['uiGmapgoogle-maps'])
//     .controller('mainCtrl', function($scope) {
//         $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
//     });

    // left in from starter pack. delete if not needed
// });
window.addEventListener('load', function () {
    console.log('ready to rock');
});

// google maps stuff
{/*<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDX_XiOTs0b_rxPCETMAwBXH9ORBYq3VCQ&callback=initMap"
    async defer></script> 

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }*/}

