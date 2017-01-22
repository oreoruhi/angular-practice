var app = angular.module('app', []);

// var sexyDJ = function() {
// 	var truth1 = function() {
// 		console.log("It is not true that DJ is not sexy.");
// 	};

// 	var truth2 = function() {
// 		console.log("It is also not true that he is sexy. So which is which?");
// 	};

// 	return {
// 		truthOne: truth1,
// 		truthTwo: truth2
// 	};
// }


// var truthpolice = sexyDJ();

// truthpolice.truthOne();
// truthpolice.truthTwo();
// console.log(truthpolice);


app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
	
	$scope.message = "SexyDJ is false";

	var DJ = {
		firstname: "Denniel Joshu",
		lastname: "Diaz",
		desc: "Sexy"
	}

	$scope.DJ = DJ;

	$http.get("https://api.github.com/users/oreoruhi")
		 .then(function(response){
		 	$scope.oreoruhi = response.data;
		 	console.log(response);
		 });

}]);