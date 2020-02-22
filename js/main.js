
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function toggleClass(elem,className){
        if (elem.className.indexOf(className) !== -1){
          elem.className = elem.className.replace(className,'');
        }
        else{
          elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
        }
      
        return elem;
      }
      
      function toggleDisplay(elem){
        const curDisplayStyle = elem.style.display;			
      
        if (curDisplayStyle === 'none' || curDisplayStyle === ''){
          elem.style.display = 'block';
        }
        else{
          elem.style.display = 'none';
        }
      
      }
      
      function toggleMenuDisplay(e){
        const dropdown = e.currentTarget.parentNode;
        const menu = dropdown.querySelector('.menu');
        const icon = dropdown.querySelector('.fa-angle-right');
      
        toggleClass(menu,'hide');
        toggleClass(icon,'rotate-90');
      }
      
      function handleOptionSelected(e){
        toggleClass(e.target.parentNode, 'hide');			
      
        const id = e.target.id;
        const newValue = e.target.textContent + ' ';
        const titleElem = document.querySelector('.dropdown .title');
        const icon = document.querySelector('.dropdown .title .fa');
      
      
        titleElem.textContent = newValue;
        titleElem.appendChild(icon);
      
        //trigger custom event
        document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
          //setTimeout is used so transition is properly shown
        setTimeout(() => toggleClass(icon,'rotate-90',0));
      }
      
      
      //get elements
      const dropdownTitle = document.querySelector('.dropdown .title');
      const dropdownOptions = document.querySelectorAll('.dropdown .option');
      
      //bind listeners to these elements
      dropdownTitle.addEventListener('click', toggleMenuDisplay);
      
      dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
      
      document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
  /*For Selecting dropdown item and displaying the medical form*/
  $(function() {
    // bind change event to select
    $('#dynamic_select').on('change', function() {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
        window.location = url; // redirect
      }
      return false;
    });
  });

  /*Profile pic jquery*/
  $(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});


})(jQuery);