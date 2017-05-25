$(function () {
	$(".parallax-img").parallax(
		{imageSrc: "assets/img/hackathon.jpg"});
});

	$(".facts").waypoint(function () {
		$(".facts").addClass("show");
	}, {
		offset: '50%'
	})


$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
});