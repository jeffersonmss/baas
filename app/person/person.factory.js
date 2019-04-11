(function () {
    'use strict';
  
    angular.module('baas-front-end.person').factory('personFactory', personFactory);
  
    personFactory.$inject = ['$firebaseArray', '$firebaseObject'];
  
    /* @ngInject */
    function personFactory($firebaseArray, $firebaseObject) {
      var peopleRef = firebase.database().ref('contato');
      var people = $firebaseArray(peopleRef);
      
  
      var service = {
        findAll: findAll,
        findOne: findOne,
        create: create,
        remove: remove
      };
  
      return service;
  
      function findAll() {
        return people;
      };
  
      function create(person) {
        return people.$add(person).then(function(ref) {
          person.firebaseId = ref.key;
          return person;
        });
      };

      function remove(person) {
        return people.$remove(person).then(function(ref) {});
      };

      function findOne(personId) {
        people.$loaded().then(function() {
          console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
  
       });
        // var refOne = peopleRef.child(personId);
        // return $firebaseObject(refOne);
      };
  
    }
  })();
  