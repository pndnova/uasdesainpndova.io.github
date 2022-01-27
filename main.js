$(window).on('load', function(){
    $('.datang').addClass('datangk');

    $('.subgambar').addClass('subgambarr');


})

$(window).scroll(function(){
	const scroll = $(this).scrollTop();


	if(scroll > $('.about').offset().top -350){
		$('.about .judul h1').addClass('judull');
	}


	if(scroll > $('.about').offset().top -250){
		$('.about .col-3').each(function(i){
			setTimeout(function(){
				$('.about .col-3').eq(i).addClass('imgg');
			},500 * (i+1));
		})
	}

	if(scroll > $('.sarana').offset().top -350){
		$('.sarana .judul h1').addClass('judulll');
	}



	if(scroll > $('.top').offset().top -300){
		$('.top .col-3').each(function(i){
			setTimeout(function(){
				$('.top .col-3').eq(i).addClass('topp');
			},500 * (i+1));
		})
	}

	if(scroll > $('.botom').offset().top -100){
		$('.botom .col-3').each(function(i){
			setTimeout(function(){
				$('.botom .col-3').eq(i).addClass('botomm');
			},500 * (i+1));
		})
	}



})