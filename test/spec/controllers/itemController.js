'use strict';

describe('Controller: ItemController', function () {

  // load the controller's module
  beforeEach(module('angularKarma'));

  var scope;
  var itemService;
  var ItemController;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_itemService_) {
    scope = $rootScope.$new();
    itemService = _itemService_;
    ItemController = $controller('ItemController', {
      $scope: scope,
      itemService: itemService
    });
  }));

  it('should attach a list of items to the scope', function () {
    expect(scope.items.length).toBe(2);
  });

  describe('Given an item is added to the service',function() {
    it('Should be added to controller items', function () {
      itemService.addItem({title:'c',description:'c'});
      expect(scope.items.length).toBe(3);
    });
  });

});