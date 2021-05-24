app.directive('menuDirective',function(){
    return{
        restrict:'E',
        template:`<ul><li><a href="#!/">Home</a></li>
        <li><a href="#!/about">About</a></li>
        <li><a href="#!/contact">Contact Us</a></li>
        <li><a href="#!/user">User List</a></li>
        <li><a href="#!/todo">Todo List</a></li>
        <li><a href="#!/post">Posts</a></li>
      </ul>`
    }
})