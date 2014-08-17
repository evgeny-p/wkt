(function() {
    'use strict';
    
    var app = angular.module('geometryList.services');
    app.factory('geometryListService', function($rootScope) {
        var geometryList = [];

        var service = {
            geometryList: geometryList,

            // XXX: bad solution
            needFitBounds: false,

            addGeometry: function(wkt) {
                geometryList.push({wkt: wkt, layer: DG.Wkt.geoJsonLayer(wkt)});
                service.needFitBounds = false;
            },

            addGeometryWithBounds: function(wkt) {
                geometryList.push({wkt: wkt, layer: DG.Wkt.geoJsonLayer(wkt)});
                service.needFitBounds = true;
            },
            
            removeGeometry: function(index) {
                geometryList.splice(index, 1);
            }
        };

        return service;
    });
})();
