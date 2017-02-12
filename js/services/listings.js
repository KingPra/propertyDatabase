module.exports = {
    name: 'ListingsService',
    func:($http) => {
        const locations = [];
        $http.get('https://still-retreat-79338.herokuapp.com/address.json')
        .then(function (response) {
            angular.copy(response.data, locations);
            //angular.copy(response.data.results.name, names);
        });
        return {
            getLoc: () => {
                console.log(locations);
                return locations;
            }
        }
    },
};