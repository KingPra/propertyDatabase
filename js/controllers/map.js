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