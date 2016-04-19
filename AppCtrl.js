(function(){
  'use strict'

  angular.module('app', []);
  angular.module('app').controller('AppCtrl', [AppCtrl]);
  
  function AppCtrl() {
    var ctrl = this;
    ctrl.msg = "probando, probando...1...2!";
    
  }
  
}())