
angular.module("todolist", []).controller("myCtrl", function($scope) {

    $scope.Tasks=["Read a Novel"];

    $scope.addItem=function(){
        $scope.errortext="";
        if(!$scope.addMe){return;}
        if($scope.Tasks.indexOf($scope.addMe)==-1)
        {
            $scope.Tasks.push($scope.addMe);
        }
       else{
           $scope.errortext="The item is already in your TODO list.";
       }
    }
    $scope.removeItem=function(x){
        $scope.errortext="";
        $scope.Tasks.splice(x,1);

    }
});