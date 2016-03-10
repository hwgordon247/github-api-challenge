describe("searchController", function(){
  var ctrl;

  beforeEach(function(){
    module("githubApiApp");
    inject(function($controller){
      ctrl = $controller("counterController");
    });
  });

  it("Pulls user info from the github api", function(){
    expect(ctrl.count).toEqual(0);
  });

  

});
