$(document).ready(function () {

	// Menu button
	$("#navbarResponsive a").on("click", function (event) {
		var hash = this.hash;
		if (hash !== "") {
			event.preventDefault();

			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 50, function () {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}
	});

	// Work Button
	$(".main-work__btn").click(function () {
		var value = $(this).attr("data-image-toggle");
		var filter = $(".main-work__filter");

		// Button Active
		var listItems = $(".main-work__btn");
		for (let i = 0; i < listItems.length; i++) {
			listItems[i].classList.remove("main-work__btn-active");
		}
		this.classList.add("main-work__btn-active");

		if (value == "all") {
			filter.show("2000");
		}
		else {
			filter.not("." + value).hide("3000");
			filter.filter("." + value).show("3000");
		}
	});

	// Modal Work Images
	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

	// Back To Top
	$(window).scroll(function (){
		if($(window).scrollTop() > 100) {
			$(".go-top").css ({
				"opacity":"100","pointer-events":"auto"
			});
		}
		else {
			$(".go-top").css ({
				"opacity":"0", "pointer-events":"none"
			});
		}
	});

	// Animation loading section
	var wow = new WOW();
	wow.init();
});