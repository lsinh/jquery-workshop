// Write your code here!

$(document).ready(function() {

    $('.announcement').prepend('<button>x</button>');

    $('button').on('click', function() {

        
               //picks up everything in its class so remove it 
            //   $('.announcement p').toggle('slow');
              
              
              
          if ($(this).text() === 'x') {
              $(this).text('Show Announcement');
              $(this).siblings().hide('slow');
              } else {
                  $(this).text('x');
                  $(this).siblings().show('slow');
              }
          }
    

) 
        
    } ) 
    

