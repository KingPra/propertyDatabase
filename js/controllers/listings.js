module.exports = {
    name: 'ListingsController',
    func: function ($scope, ListingsService) {
        //$scope.locations = ListingsService.getLoc();
        let listArr = ListingsService.getLoc();


        // this logs 0, timing issue?
        let pages = listArr.length / 10;
        console.log(`pages:${pages} `)

        // function for amount of  buttons needed
        let numUp = [];
        $scope.checkIt = () => {
            let count = 0;
            for (let i = 0; i < listArr.length / 10; i++) {
                count++;
                numUp.push(count);
            }
            return numUp
        };
        // buttons for pages
        $scope.num = numUp;


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
                } else
                    if (operator === 1) {
                        startNum = 0;
                        endNum = 10;
                        console.log(`one num is ${startNum}, ${endNum}`);
                    } else {
                        startNum = operator * 10;
                        endNum = startNum + 10;
                        console.log(`other buttons are pushed: ${startNum}, ${endNum}`);
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
