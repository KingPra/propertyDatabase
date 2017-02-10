(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('PropData', ['ngMaterial', 'ui.router']);
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




    // left in from starter pack. delete if not needed
// });
window.addEventListener('load', function () {
    console.log('ready to rock');
});


},{"./components/listings":2,"./components/map":3,"./controllers/listings":4,"./controllers/map":5,"./routers":6,"./services/listings":7}],2:[function(require,module,exports){
module.exports = {
    name: 'listings',
    object: {
        controller: 'ListingsController',
        templateUrl: 'templates/listings.html',
    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'map',
    object: {
        controller: 'MapController',
        templateUrl: 'templates/map.html',
    },
};
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'ListingsController',
    func: function ($scope, ListingsService) {
        console.log('listings controller')
        $scope.locations = ListingsService.getLoc();

        $scope.data = $scope.locations.slice(0, 5);
        $scope.getMore = () => {
            $scope.data = $scope.locations(0, Scope.data.length + 5);
            console.log('infinite scroll starts here');
        }
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'MapController',
    func: function ($scope) {
        console.log('map controller');
        $scope.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        $scope.loadMore = function () {
            var last = $scope.images[$scope.images.length - 1];
            for (var i = 1; i <= 10; i++) {
                $scope.images.push(last + i);
            }
        }
    }

};
},{}],6:[function(require,module,exports){
module.exports = [
    {
        name: 'listings',
        url: '/listings',
        component: 'listings',
    },
    {
        name: 'map',
        url: '/map',
        component: 'map',
    },

]
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'ListingsService',
    func:($http) => {
        const locations = [];
        const names = [];
        $http.get('https://still-retreat-79338.herokuapp.com/address.json')
        .then(function (response) {
            angular.copy(response.data, locations);
            //angular.copy(response.data.results.name, names);
        });
        return {
            getLoc: () => {
                console.log(locations);
                //console.log(names);
                return locations;
            }
        }
    },
};
},{}]},{},[1]);
