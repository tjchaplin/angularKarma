'use strict';

describe('Service: itemService', function () {

  // load the service's module
  beforeEach(module('angularKarma'));

  // instantiate service
  var scope;
  var itemService;

  beforeEach(inject(function ($rootScope,_itemService_) {
    itemService = _itemService_;
    scope = $rootScope;
  }));

  it('should send event when item is added', function () {
    scope.$on( 'item.added', function() {
      expect(true).toBe(true);
    });

    itemService.addItem({title:'a',description:'b'});
  });

});
