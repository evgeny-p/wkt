(function() {
    'use strict';
    
    var app = angular.module('geometryList.services');
    app.factory('geometryListService', function($rootScope) {
        var geometryList = [];
        return {
            geometryList: geometryList,

            addGeometry: function(wkt) {
                geometryList.push({wkt: wkt, layer: DG.Wkt.geoJsonLayer(wkt)});
            },
            
            removeGeometry: function(index) {
                geometryList.splice(index, 1);
            }
        };
    });
})();
