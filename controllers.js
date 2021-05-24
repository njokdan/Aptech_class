// Define the controller for this app module
app.controller('title_controller',function($scope){
    $scope.title = "Todo App";
})

app.controller('TodoCrtl', ['$scope', function($scope) {
   $scope.message = ""
   $scope.arrList = []

   $scope.addToList = function(){
    $scope.arrList.push($scope.message)
  }

   $scope.submit = function(){
     $scope.report = $scope.message
   }

   $scope.submit1 = () => {
    $scope.report = $scope.message
  }
}])

app.controller("serviceController",["$scope","$http",function($scope,$http){
  $scope.response = [];
  $scope.more = '2';

  $http.get('./docs.JSON').then(function(response){
    $scope.response = response.data
    //console.log($scope.response)
  })

  $scope.mores = function(){
    $scope.more = '100';
  }

}])

app.controller("userController",["$scope","$http",function($scope,$http){
  $scope.users = [];
  //$scope.more = '2';

  $http.get('https://jsonplaceholder.typicode.com/users/').then(function(response){
    $scope.users = response.data
    console.log($scope.users)
  })

  
}])

app.controller("todoController",["$scope","$http",function($scope,$http){
    $scope.todos = [];
    //$scope.more = '2';
  
    $http.get('https://jsonplaceholder.typicode.com/todos/').then(function(response){
      $scope.todos = response.data
      console.log($scope.todos)
    })
  
    
  }])

  app.controller("postController",["$scope","$http",function($scope,$http){
    $scope.posts = [];
    //$scope.more = '2';
  
    $http.get('https://jsonplaceholder.typicode.com/posts/').then(function(response){
      $scope.posts = response.data
      console.log($scope.posts)
    })
  
    
  }])

  