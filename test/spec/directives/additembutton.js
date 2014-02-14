'use strict';

describe('Directive: addItemButton', function () {

  // load the directive's module
  beforeEach(module('angularKarma'));

  var scope;
  var itemService;

  beforeEach(inject(function($rootScope,_itemService_) {
    scope = $rootScope.$new();
    itemService = _itemService_;
    spyOn(itemService, 'addItem');
  }));

  it('should add item to service', inject(function ($compile) {
    var element = angular.element('<div add-item-button></div add-item-button>');
    element = $compile(element)(scope);
    element.triggerHandler('click');
    expect(itemService.addItem).toHaveBeenCalled();
  }));
});
