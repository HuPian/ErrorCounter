var appModule=angular.module("app",[]);
appModule.service('errorCounterService',function(){
      var serviceConstructor=function(){
            this.counter=0;
      };
      serviceConstructor.protoType.increase=function(){
            this.counter++;
      };
      serviceConstructor.protoType.decrease=function(){
             this.counter--;
      };
      serviceConstructor.protoType.get=function(){
             return this.counter; 
      };
      serviceConstructor.protoType.init=function(initCount){
             return this.counter=initCount;
      };
      serviceConstructor.protoType.add=function(addCount){
             this.counter+=addCount;
      };
      serviceConstructor.protoType.remove=function(removeCount){
             this.counter-=removeCount;
      }
})
