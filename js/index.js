$(document).ready(function() {



$('.btn').click(function(){
	getGenre();
});

function movieQuotes(){
	
	$(".main").css("background-image", "url('http://img09.deviantart.net/5f7f/i/2015/052/1/a/cinema_background_by_gazlan_sahmeiy-d8j17be.jpg')");

		var movQuoteList=[
		[ ["Quote1"], ["Author1"]],
		[ ["Quote2"], ["Author2"], ["Year"]],
		[ ["Quote3"], ["Author3"]],

		];

		// var movQuoteList={
		// ['id': 1, 'quote':"Quote1", 'author':"Author1"],
		// ['id': 2, 'quote':"Quote2", 'author':"Author2", 'year':"Year"],
		// ['id': 3, 'quote':"Quote3", 'author':"Author3"]

		// };

		

		// [	['quote3'],
		// 	['author3']
			
		// ]];

		// var movQuote =Math.floor(Math.random() * movQuoteLength);
		// var movQuoteLength=movQuoteList.length;

// 		var lookup = {};
// 			for (var i = 0, len = array.length; i < len; i++) {
//     		lookup[array[i].id] = array[i];
// }
		// for(i=0; i<movQuoteList.length; i++)

			console.log(movQuoteList[1][1])



		// if (movQuote===i){
			$('.quote').html(movQuoteList[1][0]);
			$('.author').html(movQuoteList[1][1]);
		// }

	// alert( 'Yay Movie Quote incoming' )
}

function vidQuotes(){
	// for(i=0; i<movQuoteList[i].length;i)
	$(".main").css("background-image", "url('http://1.bp.blogspot.com/-o0t6pL2sVIs/UUruIDZ7RaI/AAAAAAAAFn0/bS7CG8FT4Ro/s1600/console-controller-retro-desktop-wallpaper2.jpg')");
	// var movQuote =Math.floor(Math.random() * 10);
	// alert( 'Yay Movie Quote incoming' )
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