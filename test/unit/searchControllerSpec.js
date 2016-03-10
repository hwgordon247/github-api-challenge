describe("searchController", function(){
  var ctrl;

  beforeEach(function(){
    module("githubApiApp");
    inject(function($controller){
      ctrl = $controller("searchController");
    });
  });

  it("does something", function(){
    expect(ctrl.count).toEqual(0);
  });

});
