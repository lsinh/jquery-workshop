// Write your code here!

$(document).ready(function() {
    
    $('img').on('click', function () {
        
        // var img = '<img src='$(this).attr alt='Kitty #1';
        
        var img = '<img src="'+$(this).attr("src")+'"">';
        var alt = '<p>"' + $(this).attr('alt') + '""</p>';
        
        $('body').append("<div class ='overlay'>" +img+alt + '</div>');
        
        //must append remove overlay inside callback function
        $('.overlay').on('click', function () {
            $(this).remove();
        });
        
        
    });
    
    
})