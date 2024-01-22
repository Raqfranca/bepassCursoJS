(function(DOM) {
    'use strict';
  
    function app() {
      return {
        init: function() {
            this.companyInfo();
            this.initForm();
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
  
        initForm: function initForm() {
            var self = this;
            var $form = new DOM('[data-js="form-register"]').get()[0];
  
            $form.addEventListener('submit', function(event) {
                event.preventDefault();
                self.addRowToTable();
            });
        },
  
        addRowToTable: function addRowToTable() {
            var $table = new DOM('table').get()[0];
            var rowData = this.getFormData();
  
          
            var newRow = $table.insertRow(-1);
  
          
            var imgCell = newRow.insertCell();
            var cardImg = document.createElement('img');
            cardImg.src = rowData.urlImg;
            cardImg.classList.add('card-img-top', 'table-img');
            imgCell.appendChild(cardImg);
            
            Object.values(rowData).forEach(function(value) {
                if (value !== rowData.urlImg) {
                var cell = newRow.insertCell();
                var text = document.createTextNode(value);
                cell.appendChild(text);
                }
            });
        },
  
        getFormData: function getFormData() {
            var formData = {};
            var formElements = new DOM('[data-js="form-register"] input').get();
  
            formElements.forEach(function(input) {
                formData[input.id] = input.value;
            });
  
            return formData;
        }
      };
    }
  
    app().init();
  
  })(window.DOM);
  