(() => {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController)

    ItemsController.$inject = ['chosen'];

    function ItemsController(chosen) {
        const chosenList = this;

        chosenList.items = chosen.menu_items;
        chosenList.chosenCat = chosen.category.name;
    }

})()