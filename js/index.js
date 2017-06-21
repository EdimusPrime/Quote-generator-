$(document).ready(function() {

$('.btn').click(function(){
	getGenre();
});

function getGenre(){
	var genre =Math.floor(Math.random() * 20);
	// alert( genre );
	if (genre>10){
		// movieQuotes();
		alert( 'Yay Movie Quote incoming' );
	} else {
		// vidQuotes();
		alert( 'Yay Video Game Quote incoming' );
	}
}



});