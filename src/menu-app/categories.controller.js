(() => {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController)

    CategoriesController.$inject = ['categories'];

    function CategoriesController(categories) {
        const categoryList = this;

        categoryList.categories = categories;
    }

})()