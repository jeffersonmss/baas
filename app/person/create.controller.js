(function() {
  'use strict';
  
  angular.module('baas-front-end.person')
  .controller('CreatePersonCtrl', CreatePersonCtrl);

  CreatePersonCtrl.$inject = ['personFactory', '$state'];

  /* @ngInject */
  function CreatePersonCtrl(personFactory, $state) {
    var vm = this;
    vm.create = create;

    activate();

    function create(person) {
      if (person.name && person.email) {
        personFactory.create(person).then(function(res) {
          $state.go('app.person');
        }).catch(function (error) {
          console.log(error);
        });
      }
    }

    function activate() {
      
    }

  }
})();
  