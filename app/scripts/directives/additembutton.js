'use strict';

angular.module('angularKarma')
  .directive('addItemButton',['Tooltypeservice',function (Tooltypeservice) {
    return {
			restrict: 'A',
			link: function postLink(scope, element) {
					element.bind( 'click', function() {
						Tooltypeservice.addItem( { title: 'Star Wars', description: 'George Lucas' } );
					});
					}
			};
	}]);
