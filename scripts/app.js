angular.module('myApp', [])
.controller('mainCtrl', function($scope) {

	var init = function() {
		$scope.formData = {};
		$scope.charges = {};
		$scope.earnings = {};

		$scope.charges.subtotal = 0;
		$scope.charges.tip = 0;
		$scope.charges.total = 0;
		$scope.earnings.tip_total = 0;
		$scope.earnings.meal_count = 0;
		$scope.earnings.avg_tip = 0;
		$scope.submitted = false;
	};

	init();

	var compute = function() {
		$scope.charges.subtotal = $scope.formData.meal_price * (1 + $scope.formData.tax_rate/100);
		$scope.charges.tip = $scope.charges.subtotal * $scope.formData.tip_rate/100;
		$scope.charges.total = $scope.charges.subtotal + $scope.charges.tip;

		$scope.earnings.tip_total += $scope.charges.tip;
		$scope.earnings.meal_count++;
		$scope.earnings.avg_tip = $scope.earnings.tip_total / $scope.earnings.meal_count;
	};

	$scope.validate = function() {
		if($scope.mealDetails.$valid) {
			compute();
		}
	}

	$scope.cancel = function() {
		$scope.formData = {};
		$scope.submitted = false;
	}

	$scope.reset = function() {
		init();
	}

})