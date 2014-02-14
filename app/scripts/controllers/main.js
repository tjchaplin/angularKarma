'use strict';

angular.module('angularKarma')
  .controller('MainCtrl', ['$scope','Tooltypeservice',function ($scope,Tooltypeservice) {
		$scope.$on( 'item.added', function() {
			$scope.items = Tooltypeservice.items;
			$scope.$apply();
		});

		$scope.items = Tooltypeservice.items;
	}]);