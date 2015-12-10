// Write your code here!
$('#signup-form').on('submit', function(event) {
    // write your code here
    
    if ($("input[name='user']").val().length > 0) {
        
    
   
    if ($("input[name='password']").val().length < 10) {
         
             event.preventDefault();
         alert('You must provide a password longer than 10 characters');
        
        
    }
    
    else if ($("input[name='password']".val()) != $("input[name='password2']").val()) {
        event.preventDefault();
          alert('Your passwords must match');
    }
    
    else if (($("input[name='password']".val()) === $("input[name='password2']").val()))
    
    {
        alert('Welcome!');
        
    }
  
        
    }
    
    else {
        event.preventDefault();
        alert('please type in a username!');
    }
   
    
    
    
});