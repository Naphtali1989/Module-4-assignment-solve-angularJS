(() => {
    'use strict';

    angular.module('MenuApp')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');

    MenuDataService.$inject = ['$http', 'ApiBaseUrl'];

    function MenuDataService($http, ApiBaseUrl) {
        const service = this;

        service.getAllCategories = () => {
            return $http({
                    method: 'GET',
                    url: (ApiBaseUrl + '/categories.json')
                })
                .then(res => res.data)
        }

        service.getItemsForCategory = (categoryShortName) => {
            return $http({
                    method: 'GET',
                    url: (ApiBaseUrl + '/menu_items.json'),
                    params: {
                        category: categoryShortName
                    }
                })
                .then(res => res.data)
        }
    }
})()