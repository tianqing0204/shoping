var app=angular.module("myapp",["ui.router"]);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("shop",{
            url:"/shop",
            templateUrl:"App/View/shop.html",
            controller:"shopcontroller"
        });
    $urlRouterProvider.otherwise("/shop");



})