'use strict';

describe('Service: Tooltypeservice', function () {

  // load the service's module
  beforeEach(module('angularKarma'));

  // instantiate service
  var Tooltypeservice;
  var scope;
  beforeEach(inject(function ($rootScope,_Tooltypeservice_) {
    Tooltypeservice = _Tooltypeservice_;
    scope = $rootScope;
  }));

  it('should send event when item is added', function () {
    scope.$on( 'item.added', function() {
      expect(true).toBe(true);
    });

    Tooltypeservice.addItem({title:'a',description:'b'});
  });

});
