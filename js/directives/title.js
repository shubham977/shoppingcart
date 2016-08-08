angular.module('app').directive('pageTitle', [function($scope){
    return{
        restrict:'EA',
        templateUrl:'/shoppingCart/views/title.html',
        link: function($scope){

        }
    }
}])