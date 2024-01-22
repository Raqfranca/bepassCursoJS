(function(DOM) {
    'use strict';
      
    function app(){
      return {
        init: function(){
          console.log("Teste do init");
          this.companyInfo();
          this.setupForm();
        },
  
        companyInfo: function companyInfo() {
          var self = this; 
  
          var ajax = new XMLHttpRequest();
          ajax.open('GET', './company.json', true);
          ajax.send();
          ajax.addEventListener('readystatechange', function() {
            self.getCompanyInfo(ajax);
          }, false);
        },
  
        getCompanyInfo: function getCompanyInfo(ajax) {
          if (ajax.readyState === 4 && ajax.status === 200) {
            var data = JSON.parse(ajax.responseText);
            var $companyName = new DOM('[data-js="company-name"]');
            var $companyPhone = new DOM('[data-js="company-phone"]');
            $companyName.get()[0].textContent = data.name;
            $companyPhone.get()[0].textContent = data.phone;
          }
        },
  
        setupForm: function setupForm() {
          var self = this;
          var form = new DOM('[data-js="form-register"]').get()[0];
  
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            self.handleFormSubmit(form);
          });
        },
  
        handleFormSubmit: function handleFormSubmit(form) {
          var $tableBody = new DOM('table tbody');
          var newRow = $tableBody.create('tr');
          
          
          var marcaInput = form.querySelector('#marca');
          var newCell = newRow.create('td');
          newCell.textContent = marcaInput.value;
  
          
          $tableBody.get()[0].appendChild(newRow);
  
          
          form.reset();
        }
  
      };
    }
  
    app().init();
  
  })(window.DOM);