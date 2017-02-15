(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{"./components/listings":2,"./components/map":3,"./controllers/listings":4,"./controllers/map":5,"./routers":6,"./services/listings":7,"./services/map":8}],2:[function(require,module,exports){
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
        //$scope.locations = ListingsService.getLoc();
        console.log(ListingsService.getLoc());
        let listArr = ListingsService.getLoc();


        let pages = listArr.length / 10;
        console.log('pages: ')






        // buttons for pages
        $scope.num = [5, 10, 15];
        // let number = [];
        // console.log('number array outside of func:')
        // console.log(number);
        // $scope.num = number;
        // $scope.pages = () => {
        //     for(let i = 1; i < listArr.length / 10; i++) {
        //         //number = i;
        //         console.log('number');
        //         //console.log(number);
        //      number.push(i);       
        //     }
        // };

        // showPage function
        let startNum = 0;
        let endNum = 10;
        $scope.showPage = (operator) => {
            console.log(operator);
            $scope.locations = listArr.slice(startNum, endNum);
            if (operator === 'next' && endNum < listArr.length) {
                startNum = startNum + 10;
                endNum = endNum + 10;
                console.log('next button');
                console.log(startNum, endNum);
                console.log(listArr.length / 10);

                console.log($scope.num);
            } else
                if (operator === 'back' && startNum > 0) {
                    startNum = startNum - 10;
                    endNum = endNum - 10;
                    console.log('back button');
                }
            return $scope.locations;
        };

        //$scope.data = $scope.locations.slice(0, 5);
        //console.log($scope.locations.slice(0, 5));

        // test func
        // $scope.getMore = () => {
        //     $scope.data = $scope.locations(0, Scope.data.length + 5);
        //     console.log('infinite scroll starts here');
        // }
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'MapController',
    func: function ($scope, MapService) {




    let kings_map;
    function initMap() {
        kings_map = new google.maps.Map(document.querySelector('#map'), {
            center: {
                 lat: -34.397,
                 lng: 150.644,
            },
            zoom: 8
        });

        let marker = new google.maps.Marker({
            position: {
                // lat: -34.397,
                // lng: 150.644,
            },
            map: kings_map
        });
    };

    initMap();
    



        console.log('map controller');
        $scope.locate = () => {
            console.log('scope locate was clicked, activated in map controller');
            MapService.locate();
        }
    }

};



// (function(window, google) {

//     // map options
//     let options = {
//         center: {
//             lat: 37.791350, // lat and long for san fran. Change later
//             lng: -122.435883,
//     },
//     zoom:10,
// },
//     element = document.getElementById('#map')
//     // map
//     map = new google.maps.Map(element, options)

// }(window, google));
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
        // temp get request for testing
        $http.get('/fakerequest.json')
        // $http.get('https://still-retreat-79338.herokuapp.com/address.json')
        .then(function (response) {
            angular.copy(response.data, locations);
            console.log('then function');
            console.log(response.data);
        });
        return {
            getLoc: () => {
                console.log('getLoc function');
                console.log(locations);
                return locations;
            },
        }
    },
};

},{}],8:[function(require,module,exports){
module.exports = {
    name: 'MapService', 
    func:  () => {
    
        return {
            locate: () => {
                console.log('my map was clicked');
               //return mymap;
            }
        }
    },
};
},{}]},{},[1]);
