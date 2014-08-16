(function() {
    'use strict';

    var app = angular.module('geometryList');
    app.directive('dgMap', function() {
        return {
            scope: {
                id: '@',
                center: '@',
                fullscreenControl: '@',
                zoom: '@',
                zoomControl: '@'
            },
            link: function(scope) {
                DG.then(function() {
                    scope.dgMap = DG.map(scope.id, {
                        center: JSON.parse(scope.center),
                        fullscreenControl: scope.fullscreenControl === 'true',
                        zoom: parseInt(scope.zoom),
                        zoomControl: scope.zoomControl === 'true'
                    });
                    // Signal after map initialization.
                    scope.$apply();
                });
            }
        };
    });
})();
