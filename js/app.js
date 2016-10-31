(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.mymessage = "";
  $scope.textColor = "";
  $scope.borderColor = "";

  $scope.CheckIfTooMuch = function () {
    var multiLine = $scope.Lunches;
    
    if (multiLine) {
      var splitLine = multiLine.split(",");
      var lunches = 0;
      for (var i=0; i<splitLine.length; i++) {
        if (splitLine[i].trim().length > 0) {
          lunches++;
        }
      }
      if (lunches<=0) {
        $scope.mymessage = "Please enter data first!"
        $scope.textColor = "red";
        $scope.borderColor = "borderRed";
      }
      else if (lunches>3) {
        $scope.mymessage = "Too much!!"
        $scope.textColor = "green";
        $scope.borderColor = "borderGreen";
      }
      else {
        $scope.mymessage = "Enjoy!"
        $scope.textColor = "green";
        $scope.borderColor = "borderGreen";
      };      
    }
    else {
      $scope.mymessage = "Please enter data first!"
      $scope.textColor = "red";
      $scope.borderColor = "borderRed";
    }
  
  };
}

})();
