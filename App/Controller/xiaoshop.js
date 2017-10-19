app.controller("xiaoshop", function ($scope) {
    $scope.delete= function (val) {
        $scope.$emit("delete",val);
    };
    $scope.itemchecked= function (ind) {
        $scope.$emit("itemchecked",ind);
    };
    $scope.itemcount= function (type) {
       if(type=='-'){
           if( $scope.item.num<=1) return;
           $scope.item.num--;

       }else{
           $scope.item.num++;

       }
        $scope.$emit("haha");
    }





})
