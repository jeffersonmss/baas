(function() {
    'use strict';
    
    angular.module('baas-front-end.person')
    .controller('PersonCtrl', PersonCtrl);
  
    PersonCtrl.$inject = ['personFactory'];
  
    /* @ngInject */
    function PersonCtrl(personFactory) {
      var vm = this;
      vm.remove = remove;
      vm.people = personFactory.findAll();

      activate();

      function remove(person) {
        personFactory.remove(person).then(function(res) {
          console.log('Removed');
        }).catch(function (error) {
          console.log(error);
        });
      }

      function activate() {
        
      }
    }
  })();
  