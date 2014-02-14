'use strict';

angular.module('angularKarma')
  .directive('addItemButton',['itemService',function (itemService) {
    return {
			restrict: 'A',
			link: function postLink(scope, element) {
						element.bind( 'click', function() {
							itemService.addItem( { title: 'New Title', description: 'New Description' } );
						});
					}
			};
	}]);
