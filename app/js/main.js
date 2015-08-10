$(document).ready(function() {
	setInterstitialPopup();


});

// ***********************************************************************************************************
// ***********************************************************************************************************





// --------------------------------------------------------------------------------------------------------------

//function new_footer_height(){
//    var newHeight=( window.innerHeight -  $(".container").outerHeight() -30 );
//    if (newHeight>180) {
//        $(".js-footer-fluidHeight").css("height", newHeight );
//        $(".footer").addClass("footer-absolute");
//    } else {
//        $(".footer").removeClass("footer-absolute");
//    }
//}

// --------------------------------------------------------------------------------------------------------------

function setInterstitialPopup() {
	$("body a").on("click",function() {
		if($(this).attr("data-target") === "#interstitial")
		{
			$("#interstitial").find("#go").attr("href", $(this).attr("href"));
		}	

		if($(this).attr("data-type") === "reference")
            {
                $(".js-third-party").show();
                $(".js-sanofi-pasteur").hide();

            } else {
                $(".js-third-party").hide();
                $(".js-sanofi-pasteur").show();
    		}

	});
	
	$("#interstitial #go").on("click",function(){
		$('#interstitial').modal('hide');
	});
}


// --------------------------------------------------------------------------------------------------------------

$("sup").on("click",function(){
  $('html, body').animate({
    scrollTop: $("#references").offset().top
  }, 1000);
});

// --------------------------------------------------------------------------------------------------------------

$(".head-faq").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
    });
});

$(".head-faq").click(function(){
    $(this).children("img").attr("src","http://prtlimages.cunamutual.com/ImageServer/Portal/B2B/ExpandSign.gif");
}, function() {
    $(this).children("img").attr("src","http://prtlimages.cunamutual.com/ImageServer/Portal/B2B/CollapseSign.gif");
});


