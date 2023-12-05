(function(window, document){
    
    'Use Strict';

    console.log(document.getElementsByClassName('my-link'));
    console.log(document.getElementsByName('userName'));
    console.log(document.getElementsByTagName('input'))

    var $inputUserName = document.querySelector('#userName');
    var $inputPassword = document.querySelector('#password');

    var $button = document.querySelector('#button');

    $button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Fome :)')
    }, false);

    $inputUserName.addEventListener('click', function() {
        alert('Clicou no input do userName')
        console.log('Fome :)')
    }, false);

    console.log("Password " + $inputPassword.value);
    console.log("Name " + $inputUserName.value);


})(window, document);

