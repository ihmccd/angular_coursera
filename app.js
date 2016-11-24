(function() {
  'use strict';

angular.module('EatApp',[])
.controller('EatAppController', EatAppController);

EatAppController.$inject =['$scope'];
function EatAppController ($scope){
$scope.items = '';
$scope.messageFunc = function(){
  var arrBeforeCheck = $scope.items.split(',');
  var arr = [];
  for (var i=0;i<arrBeforeCheck.length;i++){
    if (/\w/.test(arrBeforeCheck[i])){  //using RegExp to validate
      arr.push(arrBeforeCheck[i]);
    }
  }
  console.log(arr, arr.length);
  if (arr.length>3){
    $scope.message= 'Too much!';
    $scope.someclassMessage='green';
    $scope.someclassBorder='greenborder';
  }
  else if (arr.length<=3 && arr.length>0){
    $scope.message=  'Enjoy!'
    $scope.someclassMessage='green';
    $scope.someclassBorder='greenborder';
  }
  else{
    $scope.message=  'Please enter data first';
    $scope.someclassMessage='red';
    $scope.someclassBorder='redborder';
  }
}

$scope.sayMessage = function (){
  console.log($scope.messageFunc());
}


}
})();
