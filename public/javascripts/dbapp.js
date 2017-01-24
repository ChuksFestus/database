var app = angular.module('dbApp', []);

app.controller('mainController', function($scope){
  	$scope.posts = [];
  	$scope.newPost = {MSA: '', cutsomers: '', amount: " ", created_at: '', package: " ",};

  	$scope.post = function(){
    	$scope.newPost.created_at = Date.now();
    	$scope.posts.push($scope.newPost);
    	$scope.newPost = {MSA: '', cutsomers: '', amount: " ", package: " ", created_at: ''};
  	};
});