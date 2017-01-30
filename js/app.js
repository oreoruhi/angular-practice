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


app.controller('MainController', ['$scope', '$http', 'MainService', function ($scope, $http, MainService) {
	
	function init(){
		searchfunction();		
	}	

	function searchfunction(){
		$scope.searchuser = function(username){
			MainService.SampleGet(username)
			.then(function(response){
				$scope.error = null;
			 	$scope.oreoruhi = response.data;
			 	console.log(response);

			 	MainService.SampleRepeat(username)
			 	.then(function(reporesponse){
			 		$scope.repo = reporesponse.data;
			 		$scope.repoorder = "+name";
			 		console.log(reporesponse);
			 	}, function(none){
			 		console.log(none);
			 	});

			 }, function(error){
			 	$scope.error = "User not found.";
			 	console.log(error);
			 });
		}
	}

	init();

}]);

app.service('MainService', ['$http', function ($http) {
	
	var mainservice = this;

	mainservice.SampleGet = function(username){
		return $http.get("https://api.github.com/users/" + username);
	}

	mainservice.SampleRepeat = function(username){
		return $http.get("https://api.github.com/users/" + username + "/repos");
	}

}]);