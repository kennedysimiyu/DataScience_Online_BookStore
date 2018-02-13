(function() {
  'use strict';

  angular.module('app')
  .controller('BooksController', BooksController);

  // injecting the service in our controller, using angular As no injecting $scope capture the this value and assign it to vm
  function BooksController(books, dataService, logger, badgeService) {

    var vm = this

    // define the properties
    vm.appName = books.appName;

    vm.allBooks = dataService.getAllBooks();
    vm.allReaders = dataService.getAllReaders();

    vm.getBadge = badgeService.retrieveBadge;

    logger.output('BooksController has been created.');

  }

}());