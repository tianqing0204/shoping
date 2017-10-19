app.directive("shop", function () {
    return {
        templateUrl:"App/View/template/_shop.html",
        controller:"xiaoshop",
        scope:{
            item:"=item",
            index:"@index"
        }


    }
})