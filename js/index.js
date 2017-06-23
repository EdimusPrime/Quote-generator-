$(document).ready(function() {



	$('.getQuote').click(function(){
	getGenre();
	});

	// function decides which genre of quotes to display

	function getGenre(){
		var genre =Math.floor(Math.random() * 400);

		if (genre<101){
			movieQuotes();

		} else if (genre>100 && genre <201){
			vidQuotes();
		} else if (genre>200 && genre <301){
			songQuotes();
		} else {
			tvQuotes();
		}
	}



	// function for movie quotes

	function movieQuotes(){
	
		$(".main").css("background-image", "url('http://img09.deviantart.net/5f7f/i/2015/052/1/a/cinema_background_by_gazlan_sahmeiy-d8j17be.jpg')");
		// $('.main').fadeIn();

			var movQuoteList=[
				[ ["I'm gonna make him an offer he can't refuse."], ["The Godfather"]],
				[ ["Do or do not, There is no try"], ["Star Wars: Empire Strikes Back"]],
				[ ["Stay on Target"], ["Star Wars: A New Hope"]],
				[ ["Keep your friends close, but your enemies closer."], ["The Godfather II"]],
				[ ["You want sympathy, look in the dictionary between shit and syphillis. That's where you'll find my sympathy."], ["Major Payne"]],
				[ ["Your scientists were so preoccupied with whether they could, they didn't stop to think if they should."], ["Jurassic Park"]],
				[ ["So, Lone Starr, now you see that evil will always triumph, because good is dumb"], ["Spaceballs"]],
				[ ["This is for all you new people. I have only one rule. Everybody fights, no one quits. If you don't do your job, I'll kill you myself! Welcome to the Roughnecks!"], ["Starship Troopers"]],
				[ ["A man can be an artist... in anything, food, whatever. It depends on how good he is at it. Creasy's art is death. He's about to paint his masterpiece."], ["Man on Fire"]],
				[ ["Goonies never say die!"], ["The Goonies"]],
				[ ["No thinking - that comes later. You must write your first draft with your heart. You rewrite with your head. The first key to writing is... to write, not to think!"], ["Finding Forrester"]],
				[ ["Negotiation's over. Sentence is death."], ["Dredd"]],
				[ ["You're killing me, Smalls!"], ["The Sandlot"]],
				[ ["Son of a bitch is dug in like an Alabama tick."], ["Predator"]],
				[ ["Hey, where are da white women at?"], ["Blazin' Saddles"]],
				[ ["Y'know, I could eat a peach for hours."], ["Face/Off"]],
				// [ ["Quote1"], ["Author1"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
			];

			var movQuote =Math.floor(Math.random() * movQuoteList.length);

			var currentQuote=movQuoteList[movQuote][0];
			var currentAuthor=movQuoteList[movQuote][1];

				$('.quote').html('"' + currentQuote + '"');
				$('.author').html('-'+ currentAuthor);


				// function to share quote through a tweet

				$('#tweet-this').on("click", function () {
				 var textToTweet = $(".quote").text();
				   if (textToTweet.length > 140) {
				     alert("This Quote is over Twitter character capacity!")
				   }
				 var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(textToTweet);
				 window.open(twtLink,'_blank');
   
				 });

	};

	function vidQuotes(){

		$(".main").css("background-image", "url('http://1.bp.blogspot.com/-o0t6pL2sVIs/UUruIDZ7RaI/AAAAAAAAFn0/bS7CG8FT4Ro/s1600/console-controller-retro-desktop-wallpaper2.jpg')");
	
			var vidQuoteList=[
				[ ["You exist because we allow it and you will end because we demand it."], ["Mass Effect 2"]],
				[ ["All your base are belong to us"], ["Zero Wing"]],
				[ ["C-c-c-c-combo breaker!"], ["Killer Instinct"]],
				[ ["The right man in the wrong place can make all the difference in the world."], ["Half-Life 2"]],
				[ ["Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair."], ["Red Dead Redemption"]],
				[ ["We all make choices, but in the end our choices make us."], ["Bio Shock"]],
				[ ["War is when the young and stupid are tricked by the old and bitter into killing each other."], ["Grand Theft Auto IV"]],
				[ ["At the end of the day, as long as there are two people left on the planet, someone is gonna want someone dead."], ["Team Fortress 2"]],
				[ ["Don’t ever stop. Always keep going, no matter what happens and is taken from you. Even when life is so unfair, don’t give up."], ["Assassin's Creed II"]],
				[ ["Science isn't about why - it's about why not."], ["Portal 2"]],
				[ ["There are no heroes here, only survivors!"], ["Tomb Raider"]],
				[ ["What is bravery, without a dash of recklessness?"], ["Dark Souls"]],
				[ ["The closer you get to the Light... the greater your shadow becomes."], ["Kingdom Hearts"]],
				[ ["Do a barrel roll!"], ["Star Fox 64"]],
				[ ["Explanation: two per cent probability that the miniature organic is simply looking for trouble and needs to be blasted. That may be wishful thinking on my part, master."], ["Star Wars: Knights of the Old Republic"]],
				[ ["There are no choices. Nothing but a straight line."], ["Max Payne"]],
				[ ["Now we can fight as warriors, hand to hand. It is the basis of all combat. Only a fool trusts his life to a weapon."], ["Metal Gear Solid"]],
				[ ["What is a man? A miserable little pile of secrets!"], ["Castlevania: Symphony of the Night"]],
				[ ["You've met with a terrible fate, haven't you?"], ["The Legend of Zelda: Majora’s Mask"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
			];

			var vidQuote =Math.floor(Math.random() * vidQuoteList.length);

				var currentQuote=vidQuoteList[vidQuote][0];
				var currentAuthor=vidQuoteList[vidQuote][1];

				$('.quote').html('"' + currentQuote + '"');
				$('.author').html('-'+ currentAuthor);

					$('#tweet-this').on("click", function () {
				 var textToTweet = $(".quote").text();
				   if (textToTweet.length > 140) {
				     alert("This Quote is over Twitter character capacity!")
				   }
				 var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(textToTweet);
				 window.open(twtLink,'_blank');
   
				 });
	}

	function songQuotes(){

		$(".main").css("background-image", "url('http://cdn.wallpapersafari.com/1/12/mN8EtI.jpg')");
		
			var songQuoteList=[

				[ ["If you got beef, then bring the ruckus. Wu-Tang Clan ain't nuthin to fuck wit"], ["Wu-Tang Clan"]],
				[ ["Love is a battlefield."], ["Pat Benatar"]],
				[ ["I don't need no money, fortune, or fame. I got all the riches baby, one man can claim."], ["The Temptations"]],
				[ ["War is not the answer, because only love can conquer hate."], ["Marvin Gaye"]]
				[ ["For what is a man? What has he got? If not himself - Then he has naught. To say the things he truly feels And not the words of one who kneels."], ["Frank Sinatra"]],
				[ ["Crack mothers, crack babies and AIDS patients/Youngbloods can't spell, but they could rock you in PlayStation."], ["Mos Def"]],
				[ ["T to the R-uh-O-Y, how did you and I meet?/In front of Big Lou's, fighting in the street/But only you saw what took many time to see/I dedicate this to you for believing in me."], ["C.L. Smooth"]],
				[ ["And even after all my logic and my theory/I add a &#34;Motherfucker&#34; so you ignorant niggas hear me."], ["The Fugees"]],
				[ ["First ship 'em dope and let 'em deal to brothers/Give 'em guns, step back and watch 'em kill each other/'It's time to fight back,' that's what Huey said/Two shots in the dark, now Huey's dead."], ["2Pac"]],
				[ ["Elvis was a hero to most/But he never meant shit to me. You see/Straight up racist that sucker was, simple and plain/Motherfuck him and John Wayne."], ["Public Enemy"]],
				[ ["We used to fuss when the landlord dissed us/No heat. Wonder why Christmas missed us/Birthdays was the worst days/Now we sip champagne when we thirst-ay"], ["Notorious B.I.G."]],
				[ ["I start to think, and then I sink/Into the paper like I was ink/When I'm writing, I'm trapped in between the lines/I escape when I finish the rhyme."], ["Rakim"]],
				[ ["Shells lay around on the battleground Dead bodies are found throughout the town Tried to put shame in my game to make a name I’mma put it on a bullet, put it in your brain"], ["Rakim"]],
				[ ["Dead in the middle of Little Italy Little did we know that we riddled some middleman who didn’t do diddly"], ["Big Pun"]],
				[ ["You done got left if you don't got my new number A rich man told me it's a part of the come up Remember when they used to want me to shut up Now it's ironic cause I only conversate with those hundreds"], ["D.R.A.M."]],
				[ ["And I love Dr. King but violence might be necessary 'Cause when you live on MLK and it gets very scary You might have to pull your AK, send one to the cemetery"], ["Run The Jewels"]],
				[ ["I don't work for free, I am barely giving a fuck away"], ["Run The Jewels"]],
				[ ["No hocus pocus, you simple suckas deserve to know this. Top of the morning, my fist to your face is fucking Folgers"], ["Run The Jewels"]],
				[ ["Let your mind and your soul be free Work to shine meet your goal believe Spread that kind of L-O-V-E Take some time off the lonely"], ["Blackalicious"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
			];

			var songQuote =Math.floor(Math.random() * songQuoteList.length);

			var currentQuote=songQuoteList[songQuote][0];
			var currentAuthor=songQuoteList[songQuote][1];

				$('.quote').html('"' + currentQuote + '"');
				$('.author').html('-'+ currentAuthor);

					$('#tweet-this').on("click", function () {
				 var textToTweet = $(".quote").text();
				   if (textToTweet.length > 140) {
				     alert("This Quote is over Twitter character capacity!")
				   }
				 var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(textToTweet);
				 window.open(twtLink,'_blank');
   
				 });
	}

	function tvQuotes(){

		$(".main").css("background-image", "url('http://cdn.wallpapersafari.com/26/59/ZfgFil.jpg')");
			var tvQuoteList=[


				[ ["You can't live your life according to maybes"], ["Orange Is The New Black"]],
				[ ["I wish there was a way to know you're in the good old days before you've actually left them."], ["The Offics"]],
				[ ["To exist is to survive unfair choices"], ["The OA"]],
				[ ["You can't cling on to the past, because no matter how tightly you hold on, it's already gone"], ["How I Met Your Mother"]],
				[ ["The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice-versa, the bad things don't necessarily spoil the good things and make them unimportant."], ["Doctor Who"]],
				[ ["It's not that simple. You know what makes a good person good? When a good person does something bad, they own up to it. They try to learn something from it and they move on."], ["Parks and Recreation"]],
				[ ["He’s trying to force you to like normal things. And you shouldn’t like things because people tell you you’re supposed to"], ["Stranger Things"]],
				[ ["Mourn the losses because they are many. But celebrate the victories, because they are few."], ["Queer as Folk"]],
				[ ["Nothing in this world that's worth having comes easy"], ["Scrubs"]],
				[ ["Never forget what you are, the rest of the world will not. Wear it like armour and it can never be used to hurt you."], ["Game of Thrones"]],
				[ ["If you look for the light you will often find it. But if you look for the dark, it is all you will ever see"], ["The Legend of Korra"]],
				[ ["A dream is an answer to a question we haven't learned how to ask"], ["The X-Files"]],
				[ ["This is just a moment in time...Step aside and let it happen"], ["Firefly"]],
				[ ["And when you find yourself lost in the darkness and despair, remember it’s only in the black of night you see the stars."], ["One Tree Hill"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
				// [ ["Quote3"], ["Author3"]],
			];

			var tvQuote =Math.floor(Math.random() * tvQuoteList.length);
			
			var currentQuote=tvQuoteList[tvQuote][0];
			var currentAuthor=tvQuoteList[tvQuote][1];

				$('.quote').html('"' + currentQuote + '"');
				$('.author').html('-'+ currentAuthor);

					$('#tweet-this').on("click", function () {
				 var textToTweet = $(".quote").text();
				   if (textToTweet.length > 140) {
				     alert("This Quote is over Twitter character capacity!")
				   }
				 var twtLink = 'https://twitter.com/home?status=' +encodeURIComponent(textToTweet);
				 window.open(twtLink,'_blank');
   
				 });
	}



});