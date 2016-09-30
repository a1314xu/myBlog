/**
 * Created by xu_pc on 2016/9/30.
 */
var app = angular.module('myBlog', []);
app.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/test').success(function (data) {
        $scope.hello = data || [];
        console.log(data);
    }).error(function (data) {
        console.log('Error: ' + data);
    })
}]);