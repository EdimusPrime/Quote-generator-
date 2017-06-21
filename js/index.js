$(document).ready(function() {



$('.btn').click(function(){
	getGenre();
});

function movieQuotes(){
	
	$(".main").css("background-image", "url('http://img09.deviantart.net/5f7f/i/2015/052/1/a/cinema_background_by_gazlan_sahmeiy-d8j17be.jpg')");

		var movQuoteList=[
		[ ["I'm gonna make him an offer he can't refuse."], ["The Godfather"]],
		[ ["Do or do not, There is no try"], ["Star Wars: Empire Strikes Back"]],
		[ ["Stay on Target"], ["Star Wars: A New Hope"]],
		[ ["Keep your friends close, but your enemies closer."], ["The Godfather II"]],
		[ ["You want sympathy, look in the dictionary between shit and syphillis. That's where you'll find my sympathy."], ["Major Payne"]],
		[ ["Your scientists were so preoccupied with whether they could, they didn't stop to think if they should."], ["Jurassic Park"]],
		[ ["Quote3"], ["Author3"]],
		[ ["Quote3"], ["Author3"]],
		];

		var movQuote =Math.floor(Math.random() * movQuoteList.length);

		$('.quote').html('"' + movQuoteList[movQuote][0]+ '"');
		$('.author').html('-'+movQuoteList[movQuote][1]);
}

function vidQuotes(){

	$(".main").css("background-image", "url('http://1.bp.blogspot.com/-o0t6pL2sVIs/UUruIDZ7RaI/AAAAAAAAFn0/bS7CG8FT4Ro/s1600/console-controller-retro-desktop-wallpaper2.jpg')");
	var vidQuoteList=[
		[ ["Quote1"], ["Author1"]],
		[ ["All your base are belong to us"], ["Zero Wing"]],
		[ ["Quote3"], ["Author3"]],
		];

		var vidQuote =Math.floor(Math.random() * vidQuoteList.length);

		$('.quote').html('"' + vidQuoteList[vidQuote][0]+ '"');
		$('.author').html('-'+vidQuoteList[vidQuote][1]);
}



// function decides which genre of quotes to display

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