(function($) {


  // map init

  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(42.284928, -83.012048),
    draggable: false,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var image = 'img/marker.png';
  var myLatLng = new google.maps.LatLng(42.284928, -83.012048);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  })

	// smooth scroll

	$('.nav a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				if ($('#navbar').hasClass('in')) {
					$(".navbar-toggle").click();
				}
				return false;
			}
		}
  });

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-59164517-1', 'auto');
  ga('send', 'pageview');
  
  $('#covidModal').modal('show')

})(jQuery);
