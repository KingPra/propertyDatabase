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