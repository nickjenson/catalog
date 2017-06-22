// - JQuery is used throughout Catalog -- this adds an additional links to the #user-nav element - 

$("#app-header div.col-xs-12.col-sm-6.col-md-7")
    .attr("class", "col-xs-12 col-sm-12 col-md-4");
$("#app-header div.col-xs-12.col-sm-6.col-md-5")
    .attr("class", "col-xs-12 col-sm-12 col-md-8");

// - Custom Links -
$('#app-header #user-nav').prepend("<div id='page-links'><ul class='piped-list'>\
    <li><a target='_blank' href='https://google.com'>Course List</a></li>\
    <li><a target='_blank' href='https://google.com'>Home</a></li></ul></div>");
    
