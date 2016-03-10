githubApiApp.controller("personalSearchController", function($scope, $http){
var self = this;
self.specificUser = "";

  $scope.getPersonalGitInfo = function(login) {
    $scope.userNotFound = false;
    $scope.loadedAgain = false;

    $http.get("https://api.github.com/users/" + login)
      .success(function (data) {
        if (data.name === "") data.name = data.login;
        self.specificUser = data;
        debugger;
        $scope.loadedAgain = true;
      })
      .error(function () {
        $scope.userNotFound = true;
      });


  };
});
