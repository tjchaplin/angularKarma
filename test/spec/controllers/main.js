'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularKarma'));

  var MainCtrl,
    scope,
    tooltypeservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,Tooltypeservice) {
    scope = $rootScope.$new();
    tooltypeservice = Tooltypeservice;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Tooltypeservice:tooltypeservice
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.items.length).toBe(2);
  });

  describe('Given an item is added to the service',function() {
    it('Should be added to controller items', function () {
      tooltypeservice.addItem({title:'c',description:'c'});
      expect(scope.items.length).toBe(3);
    });
  });


});
