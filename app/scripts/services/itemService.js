'use strict';

angular.module('angularKarma')
	.service('itemService', ['$rootScope',function itemService($rootScope) {
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
