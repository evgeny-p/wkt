(function() {
    'use strict';

    var app = angular.module('geometryList');
    app.controller('DgMapController', function($scope, geometryListService) {
        // Waiting for map initialization.
        $scope.$watch('dgMap', function(dgMap) {
            if (dgMap) {
                dgMap.on('click', function(e) {
                    var point = 'POINT(' + e.latlng.lng + ' ' + e.latlng.lat + ')';
                    geometryListService.addGeometry(point);
                    $scope.$apply();
                });
                $scope.layerGroup = DG.layerGroup();
                $scope.layerGroup.addTo(dgMap);
            }
        });

        $scope.geometryList = geometryListService.geometryList;
        $scope.$watchCollection('geometryList', function(newValue, oldValue, scope) {
            if (!scope.layerGroup) {
                return;
            }

            var scopeLayers = scope.geometryList.map(function(item) { return item.layer });
            var mapLayers = scope.layerGroup.getLayers();

            var createdLayers = _.difference(scopeLayers, mapLayers);
            var removedLayers = _.difference(mapLayers, scopeLayers);

            createdLayers.forEach(function(item) {
                scope.layerGroup.addLayer(item);
            });

            removedLayers.forEach(function(item) {
                scope.layerGroup.removeLayer(item);
            });
        });
    });
})();
