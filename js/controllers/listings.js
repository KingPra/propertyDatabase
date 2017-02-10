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