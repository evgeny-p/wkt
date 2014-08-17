(function() {
    'use strict';

    var app = angular.module('geometryList');
    app.controller('GeometryListController', function($scope, geometryListService) {
        $scope.geometryList = geometryListService.geometryList;

        $scope.removeGeometry = function(index) {
            geometryListService.removeGeometry(index);
        }
    });
})();
