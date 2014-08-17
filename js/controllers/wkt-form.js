(function() {
    'use strict';

    var app = angular.module('geometryList');
    app.controller('WktFormController', function($scope, geometryListService) {
        $scope.submit = function() {
            geometryListService.addGeometryWithBounds($scope.wkt);
            $scope.wkt = "";
        }
    });
})();
