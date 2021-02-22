(() => {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menu-app/templates/home.template.html'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'src/menu-app/templates/categories.template.html',
                controller: 'CategoriesController as catCtrl',
                resolve: {
                    categories: ['MenuDataService', (MenuDataService) => MenuDataService.getAllCategories()]
                }
            })
            .state('menu.category', {
                url: 'menu/:category',
                templateUrl: 'src/menu-app/templates/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    chosen: ['MenuDataService', '$transition$', (MenuDataService, $transition$) => MenuDataService.getItemsForCategory($transition$.params().category)]
                }
            });
    }
})()