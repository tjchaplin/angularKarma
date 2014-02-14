'use strict';

describe('Directive: addItemButton', function () {

  // load the directive's module
  beforeEach(module('angularKarma'));

  var element,
    scope,
    toolTypeService;

  beforeEach(inject(function($rootScope,Tooltypeservice) {
    scope = $rootScope.$new();
    toolTypeService = Tooltypeservice;
    spyOn(toolTypeService, 'addItem');
  }));

  it('should add item to service', inject(function ($compile) {
    element = angular.element('<div add-item-button></div add-item-button>');
    element = $compile(element)(scope);
    element.triggerHandler('click');
    expect(toolTypeService.addItem).toHaveBeenCalled();
  }));
});
