app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');    // Relative URL is: #!/some/path
  
    $routeProvider
    .when("/", {      // #!/
        templateUrl: "views/home.html"   // Relative to current folder
        //controller: 'serviceController'
    })
    .when("/about", {     // #!/1
        templateUrl: "views/about.html"
    })
    .when("/contact", {     // #!/2
        templateUrl: "views/contact.html"
    })
    .when("/user", {     // #!/2
      templateUrl: "views/users.html",
      controller: 'userController'
    })
    .when("/todo", {     // #!/2
        templateUrl: "views/todo.html",
        controller: 'todoController'
    })
    .when("/post", {     // #!/2
        templateUrl: "views/post.html",
        controller: 'postController'
    })
    .otherwise("/");  // #!/
  }]);