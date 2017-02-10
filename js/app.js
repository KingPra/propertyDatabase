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

