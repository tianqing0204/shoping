app.factory("shopservice", ["ajaxServer",function (ajaxServer) {
    var shopservice={
        getshop: function () {
           return ajaxServer.ajax("get","http://localhost:8080/?data");
        }

    };
    return shopservice;
}]);