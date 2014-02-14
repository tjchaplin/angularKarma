'use strict';

angular.module('angularKarma')
  .controller('ItemController', ['$scope','itemService',function ($scope,itemService) {
		$scope.$on( 'item.added', function() {
			$scope.items = itemService.items;
			$scope.$apply();
		});
		$scope.items = itemService.items;
	}]);