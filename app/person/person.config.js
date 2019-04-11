(function () {
  'use strict';

  angular.module('baas-front-end.person').config(function ($stateProvider) {

    var personState = {
      name: 'app.person',
      url: '/person',
      templateUrl: 'person/person.html',
      controller: 'PersonCtrl',
      controllerAs: 'vm'
    }

    var createPersonState = {
      name: 'app.createPerson',
      url: '/person/create',
      templateUrl: 'person/create.html',
      controller: 'CreatePersonCtrl',
      controllerAs: 'vm'
    }

    var editPersonState = {
      name: 'app.editPerson',
      url: '/person/edit/:personId',
      templateUrl: 'person/edit.html',
      controller: 'EditPersonCtrl',
      controllerAs: 'vm'
    }
      
    $stateProvider.state(personState);
    $stateProvider.state(createPersonState);
    $stateProvider.state(editPersonState);

  })
})();
  