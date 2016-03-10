githubApiApp.controller("searchController", function($scope, $http){

  $scope.getGitInfo = function() {
    $scope.userNotFound = false;
    $scope.loaded = false;

    $http.get("https://api.github.com/search/users?q=" + $scope.username)
      .success(function (data) {
        if (data.total_count > 0)
        // data.name = data.login;
        $scope.users = data.items;
        $scope.loaded = true;
      })
      .error(function () {
        $scope.userNotFound = true;
      });

// data.items[1].login


  };
});
