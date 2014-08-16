(function() {
    'use strict';

    angular.module('geometryList', []).directive('dgMap', function() {
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
                    var map = DG.map(scope.id, {
                        center: JSON.parse(scope.center),
                        fullscreenControl: scope.fullscreenControl === 'true',
                        zoom: parseInt(scope.zoom),
                        zoomControl: scope.zoomControl === 'true'
                    });
                });
            }
        };
    });
})();
