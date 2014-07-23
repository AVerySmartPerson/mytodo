'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.error = false;

    $scope.todos = [];

    $scope.addTodo = function() {
    	if ($scope.todo) {
    		$scope.todos.push($scope.todo);
    		$scope.todo = '';
    		$scope.error = false;
    	} else {
    		$scope.error = true;
    	}
    };

    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    };
  });
