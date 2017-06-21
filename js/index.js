$(document).ready(function() {



$('.btn').click(function(){
	getGenre();
});

function movieQuotes(){
	// for(i=0; i<movQuoteList[i].length;i)
	$(".main").css("background-image", "url('http://img09.deviantart.net/5f7f/i/2015/052/1/a/cinema_background_by_gazlan_sahmeiy-d8j17be.jpg')");
	// var movQuote =Math.floor(Math.random() * 10);
	// alert( 'Yay Movie Quote incoming' )
}

function vidQuotes(){
	// for(i=0; i<movQuoteList[i].length;i)
	$(".main").css("background-image", "url('http://1.bp.blogspot.com/-o0t6pL2sVIs/UUruIDZ7RaI/AAAAAAAAFn0/bS7CG8FT4Ro/s1600/console-controller-retro-desktop-wallpaper2.jpg')");
	// var movQuote =Math.floor(Math.random() * 10);
	// alert( 'Yay Movie Quote incoming' )
}

function getGenre(){
	var genre =Math.floor(Math.random() * 20);
	// alert( genre );
	if (genre>10){
		movieQuotes();

	} else {
		// vidQuotes();
		vidQuotes();
	}
}



// var movQuoteList[];



});