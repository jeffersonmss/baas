(function() {
    'use strict';
    
    angular.module('baas-front-end.person')
    .controller('EditPersonCtrl', EditPersonCtrl);
  
    EditPersonCtrl.$inject = ['personFactory', '$state', '$stateParams'];
  
    /* @ngInject */
    function EditPersonCtrl(personFactory, $state, $stateParams) {
      var vm = this;
      var personId = $stateParams.personId;
      vm.person = {};
      vm.update = update;
  
      activate();
  
      function update(person) {
        if (person.name && person.email) {
        //   personFactory.create(person).then(function(res) {
        //     $state.go('app.person');
        //   }).catch(function (error) {
        //     console.log(error);
        //   });
        }
      }
  
      function activate() {
          personFactory.findOne(personId).then(function(res) {
            vm.person = res;
            console.log(vm.person);
          }).catch(function (error) {
            console.log(error);
          });
      }
  
    }
  })();
    