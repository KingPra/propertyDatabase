module.exports = {
    name: 'MapController',
    func: function ($scope, MapService) {
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