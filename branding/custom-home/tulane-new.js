// - JQuery is used throughout Catalog -- this replaces home-page listings with pre-specified default cards
$(document).ready(function() {
    if (window.location.pathname == "/") {
    // - home-page banner-top-color -
    var color_banner = $('<div id="custom_color_banner" style="height: 15px; background-repeat: no-repeat; background-color: #105400;"></div>');
    $('#app-header').after(color_banner);
    // - home-page banner -
    $("#home-page #feature").append("<div class='container'><div class='hero-container col-xs-12 col-sm-12 col-md-12'><h1><span>Faculty and Staff development and training courses</span></h1></div></div>");
    // - begin: card-deck -
    // - listing-1 -
    $("#listings").append('<div class="col-md-3 col-sm-6"> <a class="product-link" href="https://example.catalog.instructure.com/browse/faculty-technology-lab"><div class="product-tile course-tile" data-logo-account="1178" aria-hidden="true"><div class="product-image"><div class="image-container"><span class="image-wrapper" title="Faculty Technology Lab" style="background-image: url(image-url-goes-here);"><img class="image-placeholder img-responsive" alt="" src="/assets/product-image-ratio.png"></span></div><span class="ProductIcon__Wrapper--gallery-index"><span class="sr-only">Faculty Technology Lab</span><span role="presentation" aria-hidden="true" title="Course"><div class="ProductIcon__LargeCircle--course"><span class="icon icon-course"></span></div></span></span></div><div class="product-heading" style="word-wrap: break-word;"><h3 title="Faculty Technology Lab" class="product-title">Faculty Technology Lab</h3></div><div class="product-footer"><div class="learn-more"><div class="product-dates">Browse Courses Now</div><div class="sr-only"><div>Faculty Technology Lab</div><div>Listing Account: University Catalog</div></div></a></div>');
    // - listing-2 -
    $("#listings").append('<div class="col-md-3 col-sm-6"> <a class="product-link" href="https://example.catalog.instructure.com/browse/faculty-technology-lab"><div class="product-tile course-tile" data-logo-account="1178" aria-hidden="true"><div class="product-image"><div class="image-container"><span class="image-wrapper" title="Faculty Technology Lab" style="background-image: url(image-url-goes-here);"><img class="image-placeholder img-responsive" alt="" src="/assets/product-image-ratio.png"></span></div><span class="ProductIcon__Wrapper--gallery-index"><span class="sr-only">Faculty Technology Lab</span><span role="presentation" aria-hidden="true" title="Course"><div class="ProductIcon__LargeCircle--course"><span class="icon icon-course"></span></div></span></span></div><div class="product-heading" style="word-wrap: break-word;"><h3 title="Faculty Technology Lab" class="product-title">Faculty Technology Lab</h3></div><div class="product-footer"><div class="learn-more"><div class="product-dates">Browse Courses Now</div><div class="sr-only"><div>Faculty Technology Lab</div><div>Listing Account: University Catalog</div></div></a></div>');
    // - listing-3 -
    $("#listings").append('<div class="col-md-3 col-sm-6"> <a class="product-link" href="https://example.catalog.instructure.com/browse/faculty-technology-lab"><div class="product-tile course-tile" data-logo-account="1178" aria-hidden="true"><div class="product-image"><div class="image-container"><span class="image-wrapper" title="Faculty Technology Lab" style="background-image: url(image-url-goes-here);"><img class="image-placeholder img-responsive" alt="" src="/assets/product-image-ratio.png"></span></div><span class="ProductIcon__Wrapper--gallery-index"><span class="sr-only">Faculty Technology Lab</span><span role="presentation" aria-hidden="true" title="Course"><div class="ProductIcon__LargeCircle--course"><span class="icon icon-course"></span></div></span></span></div><div class="product-heading" style="word-wrap: break-word;"><h3 title="Faculty Technology Lab" class="product-title">Faculty Technology Lab</h3></div><div class="product-footer"><div class="learn-more"><div class="product-dates">Browse Courses Now</div><div class="sr-only"><div>Faculty Technology Lab</div><div>Listing Account: University Catalog</div></div></a></div>');
    // - listing-4 -
    $("#listings").append('<div class="col-md-3 col-sm-6"> <a class="product-link" href="https://example.catalog.instructure.com/browse/faculty-technology-lab"><div class="product-tile course-tile" data-logo-account="1178" aria-hidden="true"><div class="product-image"><div class="image-container"><span class="image-wrapper" title="Faculty Technology Lab" style="background-image: url(image-url-goes-here);"><img class="image-placeholder img-responsive" alt="" src="/assets/product-image-ratio.png"></span></div><span class="ProductIcon__Wrapper--gallery-index"><span class="sr-only">Faculty Technology Lab</span><span role="presentation" aria-hidden="true" title="Course"><div class="ProductIcon__LargeCircle--course"><span class="icon icon-course"></span></div></span></span></div><div class="product-heading" style="word-wrap: break-word;"><h3 title="Faculty Technology Lab" class="product-title">Faculty Technology Lab</h3></div><div class="product-footer"><div class="learn-more"><div class="product-dates">Browse Courses Now</div><div class="sr-only"><div>Faculty Technology Lab</div><div>Listing Account: University Catalog</div></div></a></div>');

    // - Additional listings go here
    // - end: card-deck -

        // - Do not edit below this line, unless you know what you are doing - 
        var checkExist = setInterval(function () {
            if ($('div.col-md-12 > h3').length) {
                clearInterval(checkExist);
                $("div.col-md-12 > h3").ready(function () {
                    $("#listings > div.col-md-12").html("");
                    });
            }
        }, 50);
    }
    else {
     //- show search-form when not on home-page -
    $("#search-form").show();
    }
});