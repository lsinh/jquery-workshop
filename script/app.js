// Write your code here!


$(document).ready(function() {
    // $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address=montreal').then(
    // function(res) {
        
    //     $('<div>"' + res.results[0].address_components[0].long_name + '"</div>').insertAfter($('h2'));
        
       
    // }
// );

$.ajax({
    
    url: 'http://api.open-notify.org/iss-now.json',
    dataType: 'jsonp',
    success: function(dataFromJson) {
        
    }
});

    // $('<h3>programming</h3>').insertAfter($('h2'));
    //blocked domain
    
});


// $(document).ready(function() {

// $.ajax({
    
//     url: 'http://api.open-notify.org/iss-now.json',
//     dataType: 'jsonp',
//     success: function(dataFromJson) {
//         console.log(dataFromJson);
//     }
// });
 
// });

