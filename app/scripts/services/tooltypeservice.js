'use strict';

angular.module('angularKarma')
	.service('Tooltypeservice', ['$rootScope',function Tooltypeservice($rootScope) {
		var serivce = {
			items : [
				{title:'Title1',description:'Description1'},
				{title:'Title2',description:'Description2'}
			],
			addItem : function(item){
				this.items.push(item);
				$rootScope.$broadcast('item.added');
			}
		};
		return serivce;
	}]);
