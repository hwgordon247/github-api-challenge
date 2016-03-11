githubApiApp.controller("personalSearchController", function($scope, $http){
var self = this;


  $scope.getPersonalGitInfo = function(login) {
    $scope.userNotFound = false;
    $scope.loadedAgain = false;

    $http.get("https://api.github.com/users/" + login + "?access_token=3a8128552359d69803a6ae6df6bbeed9338e251d")
    // $http.get(localhost:9292/)
      .success(function (data) {
        if (data.name === "") data.name = data.login;
        $scope.specificUser = data;
        $scope.loadedAgain = true;
      })
      .error(function () {
        $scope.userNotFound = true;
      });
  };

  $scope.hidePersonalGitInfo = function(login){
    $scope.loadedAgain = false;
  };
});
