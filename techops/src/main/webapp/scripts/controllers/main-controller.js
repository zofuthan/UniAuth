define(['../utils/constant'], function (Constant) {
  /**
   * A module representing a login controller.
   * @exports controllers/login
   */
  var MainController = function ($scope, $log, LogoutService, $cookies, $location, $rootScope, $window, localStorageService) {
    // … other code here
    $rootScope.logout = function () {
      LogoutService.logout(function (response) {
        $cookies[window.location.hostname + '/Techops'] = '';
        console.log(response);
        if (response != undefined) {
          window.location.href = response.result;
        } else {
          $location.url('/login');
        }
        //$location.url(response.redirectURL);
      }, function (error) {
        $cookies[window.location.hostname + '/Techops'] = '';
        console.log(error);
        $location.url('/login');
      })
    }
    $rootScope.setting = function () {
      console.log($location.absUrl());
      if ($location.absUrl().indexOf('index.html') != -1) {
        var accountUrl = $location.absUrl().split('ams')[0] + 'techops/index.html#/account';
      } else {
        var accountUrl = $location.absUrl().split('ams')[0] + 'techops/#/account';
      }
      console.log(accountUrl);
      $window.location = accountUrl;
    }
    $scope.getUserName = function () {
      return localStorageService.get('username');
    }
    $scope.isLogon = function () {
      return !!$cookies[window.location.hostname + '/Techops'];
    }
    $rootScope.setCookieUsername = function (username) {
      $cookies[window.location.hostname + '/Techops'] = username;
    }
    $rootScope.getCookieUsername = function () {
      return $rootScope.userName;
    }
  };

  return {
    name: "MainController",
    fn: ["$scope", "$log", "LogoutService", "$cookies", "$location", "$rootScope", "$window", "localStorageService", MainController]
  }
});