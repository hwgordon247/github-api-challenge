describe("Github Api application", function(){


 beforeEach(function(){
   browser.get("http://localhost:8000");
 });


 it('should have a title', function() {
   expect(browser.getTitle()).toEqual('Github API App');
 });


 it("can display when user is not found", function(){
     var user = element(by.model('username')).sendKeys('hbcfrefhu5bgtvetyug');
     element(by.id('ghsubmitbtn')).click();
     expect(element(by.id('test')).getText()).toContain('No User Info Found');
 });

 it("can search for a username", function(){
     var user = element(by.model('username')).sendKeys('hwgordon247');
     element(by.id('ghsubmitbtn')).click();
     expect(element(by.id('test')).getText()).toContain('hwgordon247');
 });

 it("can access more information", function(){
     var user = element(by.model('username')).sendKeys('hwgordon247');
     element(by.id('ghsubmitbtn')).click();
     element(by.id('personalInfo')).click();
     expect(element(by.id('test')).getText()).toContain('Name: Henry Gordon');
 });

 it("shows how many repos the user has", function(){
     var user = element(by.model('username')).sendKeys('hwgordon247');
     element(by.id('ghsubmitbtn')).click();
     element(by.id('personalInfo')).click();
     expect(element(by.id('test')).getText()).toContain('Repos: 27');
 });


});
