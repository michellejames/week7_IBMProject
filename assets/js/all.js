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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcblx0JChcIi5wYXJhbGxheC1pbWdcIikucGFyYWxsYXgoXG5cdFx0e2ltYWdlU3JjOiBcImFzc2V0cy9pbWcvaGFja2F0aG9uLmpwZ1wifSk7XG59KTtcblxuXHQkKFwiLmZhY3RzXCIpLndheXBvaW50KGZ1bmN0aW9uICgpIHtcblx0XHQkKFwiLmZhY3RzXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcblx0fSwge1xuXHRcdG9mZnNldDogJzUwJSdcblx0fSlcblxuXG4kKCcuY291bnRlcicpLmVhY2goZnVuY3Rpb24oKSB7XG4gIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICBjb3VudFRvID0gJHRoaXMuYXR0cignZGF0YS1jb3VudCcpO1xuICBcbiAgJCh7IGNvdW50TnVtOiAkdGhpcy50ZXh0KCl9KS5hbmltYXRlKHtcbiAgICBjb3VudE51bTogY291bnRUb1xuICB9LFxuXG4gIHtcblxuICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgIGVhc2luZzonbGluZWFyJyxcbiAgICBzdGVwOiBmdW5jdGlvbigpIHtcbiAgICAgICR0aGlzLnRleHQoTWF0aC5mbG9vcih0aGlzLmNvdW50TnVtKSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAkdGhpcy50ZXh0KHRoaXMuY291bnROdW0pO1xuICAgICAgLy9hbGVydCgnZmluaXNoZWQnKTtcbiAgICB9XG5cbiAgfSk7ICBcbiAgXG59KTsiXX0=
