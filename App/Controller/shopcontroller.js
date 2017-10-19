app.controller("shopcontroller",["$scope","shopservice",function ($scope,shopservice) {
    shopservice.getshop().then(function (res) {
        $scope.name=res.data;
    });
    $scope.$on("delete", function (event, index) {
        $scope.name.splice(index,1);
        quan();
    });
    $scope.$on("itemchecked", function (event, index) {
        $scope.count=0;
        $scope.name[index].state=!$scope.name[index].state;
        for(var i=0;i<$scope.name.length;i++){
            if($scope.name[i].state){
               $scope.count++;
            }
        }

        if($scope.count==$scope.name.length){
            $scope.flag = true;
        }else{
            $scope.flag = false;
        }
    });
    $scope.$on("haha", function () {
        quan();
    })
    $scope.ha= function () {
        $scope.flag = !$scope.flag;
        for(var i=0;i<$scope.name.length;i++){
            if($scope.flag){
                $scope.name[i].state=true;
            }else{
                $scope.name[i].state=false;
            }
        }
    };
    function quan(){
        $scope.qian=0;
        $scope.shu=0;
       $scope.name.forEach(function (item,index) {
          if(item.state){
              $scope.qian+=item.num*item.price;
              $scope.shu+=item.num;

          }
       });
        }













}] );