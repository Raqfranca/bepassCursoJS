(function(){
    'use stript'
       function DOM(selector) {
   
           this.element = document.querySelectorAll(selector);
   
           this.on = function(eventType, callback) {
               Array.from(this.element).forEach(function(element) {
                   element.addEventListener(eventType, callback);
               });
           };
   
           this.off = function(eventType, callback) {
               Array.from(this.element).forEach(function(element) {
                   element.removeEventListener(eventType, callback);
               });
           };
   
           this.get = function() {
               return this.element;
           };
   
           
           this.forEach = function(callback) {
               Array.from(this.element).forEach(callback);
           };
   
           this.map = function(callback) {
               return Array.from(this.element).map(callback);
           };
   
           this.filter = function(callback) {
               return Array.from(this.element).filter(callback);
           };
   
           this.reduce = function(callback, initialValue) {
               return Array.from(this.element).reduce(callback, initialValue);
           };
   
           this.reduceRight = function(callback, initialValue) {
               return Array.from(this.element).reduceRight(callback, initialValue);
           };
   
           this.every = function(callback) {
               return Array.from(this.element).every(callback);
           };
   
           this.some = function(callback) {
               return Array.from(this.element).some(callback);
           };
   
       }
   
       DOM.isArray = function(obj) {
           return Array.isArray(obj);
       };
   
       DOM.isObject = function(obj) {
           return typeof obj === 'object' && obj !== null;
       };
   
       DOM.isFunction = function(obj) {
           return typeof obj === 'function';
       };
   
       DOM.isNumber = function(obj) {
           return typeof obj === 'number';
       };
   
       DOM.isString = function(obj) {
           return typeof obj === 'string';
       };
   
       DOM.isBoolean = function(obj) {
           return typeof obj === 'boolean';
       };
   
       DOM.isNull = function(obj) {
           return obj === null || obj === undefined;
       };
   
       window.DOM = DOM;
   })();